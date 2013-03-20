var markers=[];
var bindings=[];

require.config({
    baseUrl: "scripts/modules",
    waitSeconds: 15
});

var spin;
var waitSpin;
var jquery;
var editor;
var clprinted;

require(["ceylon/language/0.5/ceylon.language-0.5", 'jquery'],
    function(clang, $) {
        jquery=$;
        $(document).ready(function() {
            console && console.log("Ceylon language module loaded OK");
            clang.getProcess().write = function(x){
                clprinted=true;
                printOutput(x.string);
            };
            clang.getProcess().writeLine = function(x){
                clprinted=true;
                printOutputLine(x.string);
            };
            console && console.log("ceylon.language.print() patched OK");
            spin = Spinner({
                lines:12, length:20, width:10, radius:25, color:'#000',
                speed:1, trail:50, shadow:true, hwaccel:false
            });
            var donde=document.getElementById('edit_ceylon');
            editor = CodeMirror.fromTextArea(donde,{
                mode:'ceylon',
                lineNumbers:true,
                extraKeys:{
                    "Ctrl-D":function(cm){ getHoverDocs(cm); },
                    "Cmd-D":function(cm){ getHoverDocs(cm); },
                    "Ctrl-B":function(instance){ run(); },
                    "Cmd-B":function(instance){ run(); },
                    "Ctrl-.":function(){complete(editor);},
                    "Cmd-.":function(){complete(editor);}
                }
            });
            $('#shareurl').focus(function(){ jquery(this).select(); });
            $('#shareurl').hide();
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
                        editor.setValue(src);
                    },
                    error:function(a,status,err) {
                        alert("Error retrieving shared code: " + (err?err:status));
                    }
                });
            } else if (location.href.indexOf('?src=') > 0) {
                //Code is directly in URL
                key = location.href.slice(location.href.indexOf('?src=')+5);
                editor.setValue(decodeURIComponent(key));
            } else if (location.href.indexOf('?sample=') > 0) {
                //Retrieve code from the given sample id
                key = location.href.slice(location.href.indexOf('?sample=')+8);
                editCode(key);
            } else {
            	runCode(wrapCode('print("Ceylon ``language.version`` \\"``language.versionName``\\"");'));
                editCode('hello_world');
            }
        });
    }
);

// autocompletion support
function complete(editor){
	var cursor = editor.getCursor();
    var code = getEditCode();
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
        },
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        data: { 
        	ceylon:code,
        	r: cursor.line+2,
        	c: cursor.ch-1
        }
    });
}

//Stores the code on the server and displays a URL with the key to retrieve it
function shareSource() {
    function printUrl(key, status, xhr) {
        var url = (location.href.split(/\?|#/)[0]) + '#' + key;
        jquery('#shareurl').val(url);
        jquery('#shareurl').show();
        jquery('#shareurl').focus();
    }
    jquery.ajax('share', {
        cache:false, type:'POST',
        dataType:'text',
        timeout:20000,
        beforeSend:startSpinner,
        complete:stopSpinner,
        success:printUrl,
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        data:{ceylon:editor.getValue()}
    });
}
//Starts the spinner at the center of the page.
function startSpinner() {
    waitSpin = spin.spin(document.getElementById('primary-content'));
}
//Hides the spinner that should be spinning at the center of the page.
function stopSpinner() {
    document.getElementById('run_ceylon').disabled=false;
    waitSpin && waitSpin.stop();
    editor.focus();
}

var oldcode, transok;

//Shows the specified error messages in the code
function showErrors(errors, docs, refs) {
    printError("Code contains errors:");
    for (var i=0; i < errors.length;i++) {
        var err = errors[i];
        if (err.from.line > 1) {
            var errmsg = escapeHtml(err.msg);
            printError("--- " + err.msg + " (at " + (err.from.line-1) + ":" + err.from.ch + ")");
            //This is to add a marker in the gutter
            editor.setMarker(err.from.line-2, '<span class="ceylondoc"><a href="javascript:void(0);"><font color="#ff0000"><b>&#x2717;&nbsp;%N%</b></font><span>'+errmsg+'</span></a></span>');
            //This is to modify the style (underline or whatever)
            var marker=editor.markText({line:err.from.line-2,ch:err.from.ch},{line:err.to.line-2,ch:err.to.ch+1},"cm-error");
            markers.push(marker);
            //And this is for the hover
            var estilo="ceylonerr_r"+err.from.line+"_c"+err.from.ch;
            marker=editor.markText({line:err.from.line-2,ch:err.from.ch},{line:err.to.line-2,ch:err.to.ch+1},estilo);
            markers.push(marker);
            bindings.push(estilo);
            jquery("."+estilo).attr("title", errmsg);
        }
    }
}
//Adds hover documentation to the specified text fragments.
function showDocs(docs, refs) {
    var estilos={};
    for (var i=0; i<refs.length;i++) {
        var ref=refs[i];
        if (ref.from.line > 1) {
            var estilo="ceylondoc_r"+ref.from.line+"_c"+ref.from.ch;
            var mark = editor.markText({line:ref.from.line-2,ch:ref.from.ch},{line:ref.to.line-2,ch:ref.to.ch+1},estilo);
            markers.push(mark);
            bindings.push(estilo);
            estilos[estilo]=ref.ref;
        }
    }
    for (var $$ in estilos) {
        jquery("."+$$).attr("title", docs[estilos[$$]]);
    }
}

//Wraps the contents of the editor in a function and sends it to the server for compilation.
//On response, executes the script if compilation was OK, otherwise shows errors.
//In any case it sets the hover docs if available.
function translate(onTranslation) {
  var code = getEditCode();
  if (code != oldcode) {
      clearEditMarkers();
      translateCode(code, true, onTranslation);
  } else {
      if (onTranslation) {
          onTranslation();
      }
  }
}

//Wraps the contents of the editor in a function and sends it to the server for compilation.
//On response, executes the script if compilation was OK, otherwise shows errors.
//In any case it sets the hover docs if available.
function translateCode(code, doShowCode, onTranslation) {
    clearOutput();
    transok = false;
    var compileHandler = function(json, status, xhr) {
        oldcode = code;
        var translatedcode=json['code'];
        if (translatedcode) {
            showCode(translatedcode);
            try {
                globalEval(translatedcode);
                transok = true;
                if (onTranslation) {
                    onTranslation();
                }
            } catch(err) {
                printError("Translated code could not be parsed:");
                printError("--- " + err);
            }
        } else {
            //errors?
            var errs = json['errors'];
            if (errs) {
                showErrors(errs);
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
        data:{ceylon:code}
    });
}

//Sends the code from the editor to the server for compilation and it successful, runs the resulting js.
function run() {
    translate(afterTranslate);
}

//Sends the given code to the server for compilation and it successful, runs the resulting js.
function runCode(code) {
  translateCode(code, false, afterTranslate);
}

//This function is called if compilation runs OK
function afterTranslate() {
    if (transok == true) {
        clprinted=false;
        //printSystem("// Script start at " + (new Date()));
        try {
            run_script();
        } catch(err) {
            printError("Runtime error:");
            printError("--- " + err);
        }
        if (!clprinted) {
            printSystem("Script ended with no output");
        }
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

//Retrieves the specified example from the editor, along with its hover docs.
function editCode(key) {
    //Make sure we don't do anything until we have an editor
    if (!editor) return false;
    //Retrieve code
    jquery.ajax('hoverdoc?key='+key, {
        cache:true,
        dataType:'json',
        timeout:20000,
        beforeSend:startSpinner,
        complete:stopSpinner,
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        success:function(json, status, xhr) {
            clearEditMarkers();
            editor.setValue(json['src']);
            editor.focus();
        },
        error:function(xhr, status, err) {
            alert("error retrieving '" + key + "'example: " + err?err:status);
        }
    });
}

function getEditCode() {
    return wrapCode(editor.getValue());
}

function wrapCode(code) {
    return "void run_script(){\n" + code + "\n}";
}

function setEditCode(src) {
	if (src != getEditCode()) {
		clearOutput();
	    clearEditMarkers();
	    editor.setValue(src);
	    editor.focus();
	}
}

//Puts the specified text in the result element.
function showCode(code) {
    var result = document.getElementById("result");
    result.innerText = code;
    return false;
}

//Clears all error markers and hover docs.
function clearEditMarkers() {
    for (var i=0; i<editor.lineCount();i++) {
        editor.clearMarker(i);
    }
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

function getHoverDocs(cm) {
    var code = getEditCode();
    var docHandler = function(json, status, xhr) {
        if (json && json['name']) {
            if (json['doc']) {

                var pos = editor.cursorCoords();
                var help = document.createElement("div");
                help.className = "help";
                help.innerHTML = json['doc'];
                help.style.left = pos.x + "px";
                help.style.top = pos.yBot + "px";
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
        },
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        data:{
            ceylon:code,
            r: cursor.line+2,
            c: cursor.ch-1
        }
    });
}
