var markers=[];
var bindings=[];

require.config({
    baseUrl: "http://modules.ceylon-lang.org/repo/1",
    paths : {
        "ceylon/language/1.1.1/ceylon.language-1.1.1" : window.location.pathname + "scripts/modules/ceylon/language/1.1.1/ceylon.language-1.1.1",
        "ceylon/language/1.1.1/ceylon.language-1.1.1-model" : window.location.pathname + "scripts/modules/ceylon/language/1.1.1/ceylon.language-1.1.1-model",
        "jquery" : window.location.pathname + "scripts/jquery-1.11.1.min",
        "jquery-ui" : window.location.pathname + "scripts/jquery-ui-1.11.2.min",
        "jquery-cookie" : window.location.pathname + "scripts/jquery-cookie-1.4.1",
        "perfect-scrollbar-jquery" : window.location.pathname + "scripts/perfect-scrollbar.jquery.min",
        "github" : window.location.pathname + "scripts/github",
    },
    waitSeconds: 15
});

var jquery;
var github;
var selectedGist;
var editor;
var modeditor;
var clprinted;
var spinCount = 0;
var live_tc={
  status:0,
  last:Date.now(),
  clear:function clear() {
    live_tc.status=1;
    live_tc.last=Date.now();
    live_tc.text=editor.getValue();
    live_tc.modtext=modeditor.getValue();
  }
};
var closePopups=undefined;

require(["ceylon/language/1.1.1/ceylon.language-1.1.1", 'jquery', 'jquery-ui', 'jquery-cookie', 'perfect-scrollbar-jquery', 'github'],
    function(clang, $, jqui, jqcookie, jqscrollbar, gh) {
        jquery=$;
        var auth;
        var token = $.cookie("githubauth");
        if (token != null) {
            auth = new gh.Authentication({
                type: "oauth",
                token: token
            });
        }
        github = new gh.GitHub({
            beforeSend: startSpinner,
            complete: stopSpinner,
            authentication: auth,
            debug: false
        });
        $(document).ready(function() {
            console && console.log("Ceylon language module loaded OK");
            clang.$_process().write = function(x){
                clprinted=true;
                printOutput(x.string);
            };
            clang.$_process().writeLine = function(x){
                clprinted=true;
                printOutputLine(x.string);
            };
            console && console.log("ceylon.language.print() patched OK");
            $('form').submit(false);
            
            var editorElem=document.getElementById('edit_ceylon');
            editor = CodeMirror.fromTextArea(editorElem,{
                mode:'ceylon',
                gutters:["CodeMirror-error-gutter", "CodeMirror-gutter"],
                lineNumbers:true,
                indentUnit:4,
                matchBrackets:true,
                styleActiveLine:true,
                autoCloseBrackets:true,
                //highlightSelectionMatches:true,
                extraKeys:{
                    "Ctrl-D":function(cm){ fetchDoc(cm); },
                    "Cmd-D":function(cm){ fetchDoc(cm); },
                    "Ctrl-B":function(instance){ performRun(); },
                    "Cmd-B":function(instance){ performRun(); },
                    "Ctrl-.":function(){complete(editor);},
                    "Cmd-.":function(){complete(editor);}
                }
            });

            $("#edit_ceylon_div .CodeMirror").resizable({
                stop: function() { editor.refresh(); },
                resize: function() {
                  $("#edit_ceylon_div .CodeMirror-scroll").height($(this).height());
                  $("#edit_module_div .CodeMirror").width($(this).width());
                  $(".CodeMirror-scroll").width($(this).width());
                  $('#output').width($(this).width());
                  $('#core-page').width($(this).width());
                  editor.refresh();
                  modeditor.refresh();
                }
              });
              
            var modEditorElem=document.getElementById('edit_module');
            modeditor = CodeMirror.fromTextArea(modEditorElem,{
                mode:'ceylon',
                gutters:["CodeMirror-error-gutter", "CodeMirror-gutter"],
                lineNumbers:true,
                indentUnit:4,
                matchBrackets:true,
                styleActiveLine:true,
                autoCloseBrackets:true,
                //highlightSelectionMatches:true,
                extraKeys:{
                    "Ctrl-.":function(){complete(editor);},
                    "Cmd-.":function(){complete(editor);}
                }
            });

            $("#edit_module_div .CodeMirror").resizable({
              stop: function() { editor.refresh(); },
              resize: function() {
                $("#edit_module_div .CodeMirror-scroll").height($(this).height());
                $("#edit_ceylon_div .CodeMirror").width($(this).width());
                $(".CodeMirror-scroll").width($(this).width());
                $('#output').width($(this).width());
                $('#core-page').width($(this).width());
                editor.refresh();
                modeditor.refresh();
              }
            });
            
            $('#output').resizable({
              stop: function() { editor.refresh(); },
              resize:function(){
                $(".CodeMirror-scroll").width($(this).width());
                editor.refresh();
                modeditor.refresh();
              }
            });

            $('#sidebarblock').perfectScrollbar();
            
            showGitHubConnect();
            $('#share_src').show();
            $('#save_src').hide();
            $('#update_src').hide();
            $('#gistname').hide();
            $('#shareurl').hide();
            $('#gistlink').hide();
            $('#deletegist').hide();
            var key = location.href.split('#');
            if (key.length == 2 && key[1].toString().trim().length > 16) {
                //retrieve code
                key = key[1];
                $.ajax('share?key='+key, {
                    cache:false,
                    dataType:'text',
                    timeout:20000,
                    beforeSend:startSpinner,
                    complete:stopSpinner,
                    success:function(src,status,xhr) {
                        setEditorSources(src);
                    },
                    error:function(a,status,err) {
                        alert("Error retrieving shared code: " + (err?err:status));
                    }
                });
            } else if (location.href.indexOf('?src=') > 0) {
                //Code is directly in URL
                key = location.href.slice(location.href.indexOf('?src=')+5);
                setEditorSources(decodeURIComponent(key));
            } else if (location.href.indexOf('?sample=') > 0) {
                //Retrieve code from the given sample id
                key = location.href.slice(location.href.indexOf('?sample=')+8);
                editCode(key);
            } else if (location.href.indexOf('?gist=') > 0) {
                //Retrieve code from the given sample id
                key = location.href.slice(location.href.indexOf('?gist=')+6);
                editGist(key);
            } else {
            	runCode(wrapCode('print("Ceylon ``language.version`` \\"``language.versionName``\\"");'));
                editCode('hello_world');
            }
            listGists();
            editor.on('change',function(){live_tc.last=Date.now();});
            editor.on('cursorActivity',function(){
              if (closePopups)closePopups();
              closePopups=undefined;
            });
            window.setInterval(function(){
              if (live_tc.status==1 && editor.getValue()!=live_tc.text && Date.now()-live_tc.last>5000) {
                console.log("typechecking...");
                live_tc.text=editor.getValue();
                live_tc.last=Date.now();
                $.ajax('translate', {
                    cache:false, type:'POST',
                    dataType:'json',
                    timeout:5000,
                    success:function(json, status, xhr) {
                        var errs = json['errors'];
                        if (errs && errs.length>0) {
                            showErrors(errs, false);
                        } else {
                            clearEditMarkers();
                        }
                    },
                    error:function() {},
                    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
                    data:{
                        tc:1,
                        module:live_tc.modtext,
                        ceylon:wrapCode(live_tc.text)
                    }
                });
              }
            },1000);
        });
    }
);

function hasImports() {
    return $('#imports').prop('checked');
}

function toggleImports() {
    if ($('#imports').prop('checked')) {
        showModuleEditor();
    } else {
        hideModuleEditor();
    }
}

function showModuleEditor() {
    $("#edit_module_div").show();
    modeditor.refresh();
    $('#imports').prop('checked', true);
    prevFullScriptState = isFullScript();
    $('#fullscript').prop('checked', true);
    $('#fullscript').prop('disabled', true);
}

function hideModuleEditor() {
    $("#edit_module_div").hide();
    $('#imports').prop('checked', false);
    $('#fullscript').prop('checked', prevFullScriptState);
    $('#fullscript').prop('disabled', false);
}

// autocompletion support
function complete(editor){
	var cursor = editor.getCursor();
    var code = getEditCode();
    live_tc.status=4;
    jQuery.ajax('assist', {
        cache:false, type:'POST',
        dataType:'json',
        timeout:20000,
        beforeSend: startSpinner,
        success: function(json, status, xhr){
        	stopSpinner();
        	CodeMirror.autocomplete(editor, function(){
        		return {
        			list: json.opts,
        			from: cursor,
        			to: cursor
        		};
        	});
        },
        error:function(xhr, status, err) {
        	stopSpinner();
            alert("An error occurred while compiling your code: " + err?err:status);
            live_tc.status=1;
        },
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        data: { 
        	ceylon:code,
        	r: cursor.line+2,
        	c: cursor.ch-1
        }
    });
}

function showGitHubConnect() {
    if ($.cookie("githubauth") == null) {
        $("#ghconnect").html('<a href="https://github.com/login/oauth/authorize?client_id=ef3727725eeee1d1bae2&scope=gist&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fweb-ide-backend%2Fgithubauth&state=xyz" target="githubauth">Connect to GitHub</a>');
    } else {
        $("#ghconnect").html('<a href="#" onclick="$.removeCookie(\'githubauth\', { path: \'/\' }); window.location.reload()">Disconnect from GitHub</a>');
    }
}

function showGist(gist) {
    selectedGist = gist;
    var url = window.location.origin + window.location.pathname + "?gist=" + gist.data.id;
    jquery('#share_src').hide();
    jquery('#save_src').hide();
    jquery('#update_src').show();
    jquery('#gistname').val(gist.data.description.substr(19));
    jquery('#gistname').show();
    jquery('#gistlink').attr('href', gist.data.html_url);
    jquery('#gistlink').show();
    jquery('#shareurl').attr('href', url);
    jquery('#shareurl').show();
    var token = $.cookie("githubauth");
    if (token) {
        jquery('#deletegist').show();
    }
    handleGistNameChange();
}

function shareSource() {
    jquery('#share_src').hide();
    jquery('#save_src').show();
    jquery('#gistname').val("Code snippet");
    jquery('#gistname').show();
    handleGistNameChange();
}

//Stores the code on the server and displays a URL with the key to retrieve it
function saveSource() {
    function onSuccess(gist) {
        showGist(gist);
        createComment(gist);
        updateGists();
    }
    function onError(xhr, status, err) {
        printError("Error storing Gist: " + (err?err:status));
        live_tc.clear();
    }
    var files = getGistFiles();
    var title = jquery('#gistname').val();
    var data = {
        "description": "Ceylon Web Runner: " + title,
        "public": true,
        "files": files
    };
    github.createGist({
        data: data,
        success: onSuccess,
        error: onError
    });
}

function getGistFiles() {
    var files;
    if ($("#edit_module_div").is(":visible")) {
        files = {
            "script.ceylon": {
                "content": getEditCode()
            },
            "module.ceylon": {
                "content": getModuleCode()
            }
        };
    } else {
        files = {
            "script.ceylon": {
                "content": getEditCode()
            }
        };
    }
    return files;
}

// Creates a commit for the given Gist with a link to the Web Runner
function createComment(gist) {
    // Check that we have a valid GitHub token
    var token = $.cookie("githubauth");
    if (token) {
        var data = {
            "body": "[Click here](" + window.location.origin + window.location.pathname + "?gist=" + gist.data.id + ") to run this code online",
        }
        gist.createComment({
            data: data
        });
    }
}

function updateSource() {
    function onSuccess(gist) {
        showGist(gist);
        updateGists();
    }
    function onError(xhr, status, err) {
        printError("Error storing Gist: " + (err?err:status));
        live_tc.clear();
    }
    var files = getGistFiles();
    var title = jquery('#gistname').val();
    var data = {
        "description": "Ceylon Web Runner: " + title,
        "files": files
    };
    selectedGist.edit({
        data: data,
        success: onSuccess,
        error: onError
    });
}

function deleteGist() {
    function onRemove(gist) {
        doReset();
        updateGists();
    }
    if (selectedGist != null && confirm("Do you really want to delete this Gist?")) {
        selectedGist.remove({
            success: onRemove
        });
    }
}

function updateGists() {
    listGists();
}

function listGists(page) {
    var first = (page == null || page == 1);
    
    function showGist(gist) {
        if (first) {
            $('#yrcode').empty();
            first = false;
        }
        var desc = gist.data.description.substring(19);
        $('#yrcode').append('<li class="news_entry"><a href="#" onClick="return editGist(\'' + gist.data.id + '\')">' + desc + '</a></li>');
        $('#yrcodehdr').show();
        $('#yrcode').show();
    }
    
    function acceptGist(gist) {
        if (gist.data.description.startsWith("Ceylon Web Runner: ")) {
            var show = false;
            $.each(gist.data.files, function(idx, itm) {
                if (idx.endsWith(".ceylon")) {
                    show = true;
                }
            });
            return show;
        }
        return false;
    }
    
    function handleGist(gist) {
        if (acceptGist(gist)) {
            showGist(gist);
        }
    }
    
    function onEnd(list) {
        if (list.hasMoreElements()) {
            $('#yrcodemore').click(function() { return listGists(list.pages.length + 1); });
            $('#yrcodemore').show();
        } else {
            $('#yrcodemore').hide();
        }
    }
    
    // Check that we have a valid GitHub token
    var token = $.cookie("githubauth");
    if (token) {
        var gistsIter = github.gists();
        gistsIter.each({
            func: handleGist,
            finish: onEnd,
            page: page
        });
    }
}

function handleGistNameChange() {
    var name = $("#gistname").val();
    var disabled = (name == "");
    jquery('#save_src').prop('disabled', disabled)
    jquery('#update_src').prop('disabled', disabled)
}

function startSpinner() {
    var button = $('#run_ceylon');
    button.attr('disabled','disabled');
    button.addClass('active');
    spinCount++;
}

function stopSpinner() {
    spinCount--;
    if (spinCount == 0) {
        var button = $('#run_ceylon');
        button.removeAttr('disabled');
        button.removeClass('active');
        editor.focus();
    }
}

var oldcode, oldmodcode, transok;

//Shows the specified error messages in the code
function showErrors(errors, print) {
    if (print) {
        printError("Code contains errors:");
    }
    for (var i=0; i < errors.length;i++) {
        var err = errors[i];
        var errmsg = escapeHtml(err.msg);
        if (print) {
            printError((err.from.line-1) + ":" + err.from.ch + " - " + err.msg);
        }
        if (err.from.line > 1) {
            //This is to add a marker in the gutter
            var img = document.createElement('img');
            img.title=errmsg;
            img.src="images/error.gif";
            editor.setGutterMarker(err.from.line-2, 'CodeMirror-error-gutter', img);
            //This is to modify the style (underline or whatever)
            var marker=editor.markText({line:err.from.line-2,ch:err.from.ch},{line:err.to.line-2,ch:err.to.ch+1},{className:"cm-error"});
            markers.push(marker);
            //And this is for the hover
            var estilo="ceylonerr_r"+err.from.line+"_c"+err.from.ch;
            marker=editor.markText({line:err.from.line-2,ch:err.from.ch},{line:err.to.line-2,ch:err.to.ch+1},{className:estilo});
            markers.push(marker);
            bindings.push(estilo);
            jquery("."+estilo).attr("title", errmsg);
        }
    }
}

//Wraps the contents of the editor in a function and sends it to the server for compilation.
//On response, executes the script if compilation was OK, otherwise shows errors.
//In any case it sets the hover docs if available.
function translate(onTranslation) {
  var code = getEditCode();
  var modcode = getModuleCode();
  if (code != oldcode || modcode != oldmodcode) {
      clearEditMarkers();
      translateCode(code, modcode, true, onTranslation);
  } else {
      if (onTranslation) {
          onTranslation();
      }
  }
}

//Wraps the contents of the editor in a function and sends it to the server for compilation.
//On response, executes the script if compilation was OK, otherwise shows errors.
//In any case it sets the hover docs if available.
function translateCode(code, modcode, doShowCode, onTranslation) {
    clearOutput();
    transok = false;
    var compileHandler = function(json, status, xhr) {
        oldcode = code;
        oldmodcode = modcode;
        var translatedcode=json['code'];
        if (translatedcode) {
            showCode(translatedcode);
            try {
                transok = true;
                loadModuleAsString(translatedcode, onTranslation);
            } catch(err) {
                printError("Translated code could not be parsed:");
                printError("--- " + err);
            }
        } else {
            //errors?
            var errs = json['errors'];
            if (errs) {
                showErrors(errs, true);
            }
        }
    };
    document.getElementById('run_ceylon').disabled=true;
    jquery.ajax('translate', {
        cache:false, type:'POST',
        dataType:'json',
        timeout:20000,
        beforeSend:startSpinner,
        complete:stopSpinner,
        success:compileHandler,
        error:function(xhr, status, err) {
            transok = false;
            alert("An error occurred while compiling your code: " + err?err:status);
        },
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        data:{
            module:modcode,
            ceylon:code
        }
    });
}

//Sends the code from the editor to the server for compilation and it successful, runs the resulting js.
function performRun() {
    translate(afterTranslate);
}

//Sends the given code to the server for compilation and it successful, runs the resulting js.
function runCode(code, modcode) {
  translateCode(code, modcode, false, afterTranslate);
}

//This function is called if compilation runs OK
function afterTranslate() {
    if (transok == true) {
        clprinted=false;
        //printSystem("// Script start at " + (new Date()));
        try {
            executeCode();
        } catch(err) {
            printError("Runtime error:");
            printError("--- " + err);
        }
        if (!clprinted) {
            printSystem("Script ended with no output");
        }
        var _out = jquery("#output");
        _out.scrollTop(_out[0].scrollHeight);
    }
}

function executeCode(){
    var methodName = isFullScript(editor.getValue());
    if (typeof methodName == 'string' || methodName instanceof String) {
        if (window[methodName]) {
            window[methodName]();
        } else {
            printError("Function '" + methodName + "' does not exist");
        }
    } else {
        run();
    }
}

var stopfunc;

function setOnStop(func) {
	if (!stopfunc) {
		stopfunc = func;
		$('#run_ceylon').addClass('invis');
		$('#stop_ceylon').removeClass('invis');
	}
}

//A way to stop running scripts (that support it!)
function stop() {
	if (stopfunc) {
		try {
			stopfunc();
		} catch(e) {}
		stopfunc = undefined;
		$('#run_ceylon').removeClass('invis');
		$('#stop_ceylon').addClass('invis');
	}
}

// Sets the code for the editor(s)
function setEditorSources(src, modsrc) {
    $("#fullscript").prop('disabled', false);
    $("#imports").prop('disabled', false);
    if (modsrc && modsrc != "") {
        showModuleEditor();
        setModuleCode(unwrapModule(modsrc));
        setEditCode(unwrapCode(src));
    } else {
        hideModuleEditor();
        setModuleCode("// Add module imports here");
        setEditCode(unwrapCode(src));
    }
}

//Retrieves the specified example from the editor, along with its hover docs.
function editCode(key) {
    //Make sure we don't do anything until we have an editor
    if (!editor) return false;
    //Retrieve code
    live_tc.status=2;
    jquery.ajax('hoverdoc?key='+key, {
        cache:true,
        dataType:'json',
        timeout:20000,
        beforeSend:startSpinner,
        complete:stopSpinner,
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        success:function(json, status, xhr) {
            doReset();
            setEditorSourcesFromGist(json);
        },
        error:function(xhr, status, err) {
            printError("Error retrieving example '" + key + "': " + (err?err:status));
            live_tc.clear();
        }
    });
}

//Retrieves the specified code from GitHub
function editGist(key) {
    function onSuccess(gist) {
        setEditorSourcesFromGist(gist.data);
        showGist(gist);
    }
    function onError(xhr, status, err) {
        printError("Error retrieving Gist '" + key + "': " + (err?err:status));
        live_tc.clear();
    }
    
    //Make sure we don't do anything until we have an editor
    if (!editor) return false;
    //Retrieve code
    live_tc.status=2;
    github.gist(key).fetch({
        success: onSuccess,
        error: onError
    });
}

function setEditorSourcesFromGist(json) {
    var src, modsrc;
    for (var key in json.files) {
        if (json.files.hasOwnProperty(key)) {
            if (key == "module.ceylon") {
                modsrc = json.files[key].content;
            } else {
                src = json.files[key].content;
            }
        }
    }
    setEditorSources(src, modsrc);
}

function getEditCode() {
    return wrapCode(editor.getValue());
}

function getModuleCode() {
    return wrapModule(modeditor.getValue());
}

var wrappedTag = "//$webrun_wrapped\n";
var codePrefix = wrappedTag + "shared void run(){\n";
var codePostfix = "\n}";

function wrapCode(code) {
	if (isFullScript(code) == false) {
        return codePrefix + code + codePostfix;
	} else {
		return code;
	}
}

function unwrapCode(code) {
    if (isWrapped(code)) {
        $('#fullscript').prop('checked', false);
        code = code.trim();
        return code.substring(codePrefix.length, code.length - codePostfix.length);
    } else {
        $('#fullscript').prop('checked', true);
        return code;
    }
}

var modulePrefix = wrappedTag + "module web_ide_script \"1.0.0\" {\n";
var modulePostfix = "\n}";

function wrapModule(code) {
    if (isFullModule(code) == false) {
        return modulePrefix + code + modulePostfix;
    } else {
        return code;
    }
}

function unwrapModule(code) {
    if (isWrapped(code)) {
        $('#fullmodule').prop('checked', false);
        code = code.trim();
        return code.substring(modulePrefix.length, code.length - modulePostfix.length);
    } else {
        $('#fullmodule').prop('checked', true);
        return code;
    }
}

function isFullScript() {
    return $('#fullscript').prop('checked');
}

var prevFullScriptState = false;
function toggleFullScript() {
    // TODO try to wrap/unwrap code in editor
    prevFullScriptState = isFullScript();
}

function isFullModule() {
    return $('#fullmodule').prop('checked');
}

function toggleFullModule() {
    // TODO try to wrap/unwrap code in editor
    prevFullScriptState = isFullScript();
}

function isWrapped(code) {
    return code.toString().trimLeft().startsWith(wrappedTag);
}

function setEditCode(src) {
	if (src != getEditCode()) {
		clearOutput();
	    clearEditMarkers();
	    editor.setValue(src);
	    editor.focus();
        live_tc.clear();
	}
}

function setModuleCode(src) {
    if (src != getModuleCode()) {
        clearOutput();
        clearEditMarkers();
        modeditor.setValue(src);
        modeditor.focus();
        live_tc.clear();
    }
}

//Puts the specified text in the result element.
function showCode(code) {
    var result = document.getElementById("result");
    result.innerText = code;
    return false;
}

function doReset() {
    selectedGist = null;
    oldcode = "";
    oldmodcode = "";
    clearOutput();
    clearEditMarkers();
    jquery('#share_src').show();
    jquery('#save_src').hide();
    jquery('#update_src').hide();
    jquery('#gistname').hide();
    jquery('#gistlink').hide();
    jquery('#shareurl').hide();
    jquery('#deletegist').hide();
}

//Clears all error markers and hover docs.
function clearEditMarkers() {
    editor.clearGutter('CodeMirror-error-gutter');
    for (var i=0; i<markers.length;i++) {
        markers[i].clear();
    }
    markers=[];
    for (var i=0; i<bindings.length;i++) {
        jquery(bindings[i]).unbind('mouseenter mouseleave');
    }
    bindings=[];
}

function clearOutput() {
    var output = document.getElementById("output");
    output.innerHTML = "";
    editor.focus();
}

function printOutputLine(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + escapeHtml(txt) + "<br>";
}
function printOutput(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + escapeHtml(txt);
}

function printSystem(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + "<span class='jsc_msg'>" + escapeHtml(txt) + "</span><br>";
}

function printError(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + "<span class='jsc_error'>" + escapeHtml(txt) + "</span><br>";
}

//Basic HTML escaping.
function escapeHtml(html) {
    return (''+html).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Take a string containing the translated code for a Ceylon module,
// extracts the meta data and parses it to get at the dependencies
// and then pre-loads those dependencies using rewritten paths that
// RequireJS will understand. It will then evaluate the actual
// soruces and finally execute the "func()" that was passed.
// Quite a bit of jumping through hoops to get this all to work
function loadModuleAsString(src, func) {
    delete window.ex$;
    delete window._CTM$;
    delete window.$CCMM$;
    var lines = src.split("\n");
    var metadata = lines[1];
    globalEval(metadata);
    if (window.$CCMM$) {
        var deps = window.$CCMM$()["$mod-deps"];
        if (deps) {
            var newdeps = rewriteDependencies(deps);
            if (newdeps.length > 0) {
                require(newdeps, function() {
                    globalEval(src);
                    if (func) {
                        func();
                    }
                });
                return;
            }
        }
    }
    globalEval(src);
    if (func) {
        func();
    }
}

function globalEval(src) {
    if (window.execScript) {
        window.execScript(src);
        return;
    }
    var fn = function() {
        window.eval.call(window,src);
    };
    fn();
}

function rewriteDependencies(deps) {
    var newdeps = [];
    for (var i=0; i < deps.length; i++) {
        var newdep = rewriteDependency(deps[i]);
        if (!newdep.startsWith("ceylon/language/")) {
            newdeps.push(newdep);
        }
    }
    return newdeps;
}

function rewriteDependency(dep) {
    var p = dep.indexOf("/");
    var name = dep.substring(0, p);
    var version = dep.substring(p + 1);
    var path = name.replace(".", "/");
    return path + "/" + version + "/" + name + "-" + version;
}

function fetchDoc(cm) {
    var code = getEditCode();
    var modcode = getModuleCode();
    var docHandler = function(json, status, xhr) {
        live_tc.status=1;
        if (json && json['name']) {
            if (json['doc']) {

                var pos = editor.cursorCoords(true);
                var help = document.createElement("div");
                help.className = "help infront";
                help.innerHTML = json['doc'];
                help.style.left = pos.left + "px";
                help.style.top = pos.bottom + "px";
                document.body.appendChild(help);
                var done = false;
                function close() {
                    if (done) return;
                    done = true;
                    jQuery("body").unbind('keydown', close);
                    jQuery("body").unbind('click', close);
                    help.parentNode.removeChild(help);
                }
                jQuery("body").keydown(close);
                jQuery("body").click(close);
                closePopups=close;
                help.focus();

            } else if (json['name'].startsWith("ceylon.language::")) {
                var tok = json['name'].substring(17);
                if (json['type'] === 'interface' || json['type'] === 'class') {
                    console.log("URL http://modules.ceylon-lang.org/test/ceylon/language/0.5/module-doc/"
                        + json['type'] + "_" + tok + ".html");
                } else {
                    console.log("URL http://modules.ceylon-lang.org/test/ceylon/language/0.5/module-doc/index.html#" + tok);
                }
            }
        }
    };
    document.getElementById('run_ceylon').disabled=true;
    var cursor = editor.getCursor();
    live_tc.status=3;
    jquery.ajax('hoverdoc', {
        cache:false, type:'POST',
        dataType:'json',
        timeout:20000,
        beforeSend:startSpinner,
        complete:stopSpinner,
        success:docHandler,
        error:function(xhr,status,err){
            transok=false;
            alert("An error occurred while retrieving documentation for your code: " + err?err:status);
            live_tc.status=1;
        },
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        data:{
            module:modcode,
            ceylon:code,
            r: cursor.line+2,
            c: cursor.ch-1
        }
    });
}
