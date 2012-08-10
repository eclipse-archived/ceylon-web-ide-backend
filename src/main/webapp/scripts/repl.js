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

require(["ceylon/language/0.3.1/ceylon.language-0.3.1", 'jquery', "browser/1.0.0/browser-1.0.0"],
    function(clang, $) {
        jquery=$;
        $(document).ready(function() {
            console && console.log("Ceylon language module loaded OK");
            clang.getProcess().write = function(x){
                clprinted=true;
                printOutput(x.getString());
            };
            clang.getProcess().writeLine = function(x){
                clprinted=true;
                printOutputLine(x.getString());
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
                    "Ctrl-Space":function(){complete(editor);}
                }
            });
            $('#shareurl').focus(function(){ jquery(this).select(); });
            $('#shareurl').hide();
            var key = location.href.split('#');
            if (key.toString().trim().length > 16) {
                //retrieve code
                key = key[key.length-1];
                $.ajax('share?key='+key, {
                    cache:false,
                    dataType:'text',
                    timeout:10000,
                    beforeSend:startSpinner,
                    complete:stopSpinner,
                    success:function(src,status,xhr) {
                        editor.setValue(src);
                        getHoverDocs(editor);
                    },
                    error:function(a,status,err) {
                        alert("Error retrieving shared code: " + err?err:status);
                    }
                });
            } else if (location.href.indexOf('?src=') > 0) {
                //Code is directly in URL
                key = location.href.slice(location.href.indexOf('?src=')+5);
                editor.setValue(decodeURIComponent(key));
            } else {
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
        timeout:10000,
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
        data: { 
        	ceylon:code, 
        	module:getModuleCode(),
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
        timeout:10000,
        beforeSend:startSpinner,
        complete:stopSpinner,
        success:printUrl,
        data:{ceylon:editor.getValue()}
    });
}
//Starts the spinner at the center of the page.
function startSpinner() {
    waitSpin = spin.spin(document.getElementById('primary-content'));
}
//Hides the spinner that should be spinning at the center of the page.
function stopSpinner() {
    document.getElementById('submit').disabled=false;
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
            printError("--- " + err.msg + " (at " + (err.from.line-1) + ":" + err.from.ch + ")");
            editor.setMarker(err.from.line-2, '<span class="ceylondoc"><a href="javascript:void(0);"><font color="#ff0000"><b>%N%</b></font><span>'+err.msg+'</span></a></span>');
            var marker=editor.markText({line:err.from.line-2,ch:err.to.line.ch},{line:err.to.line-2,ch:err.to.ch+1},"editerror");
            markers.push(marker);
            var estilo="ceylonerr_r"+err.from.line+"_c"+err.from.ch;
            marker=editor.markText({line:err.from.line-2,ch:err.from.ch},{line:err.to.line-2,ch:err.to.ch+1},estilo);
            markers.push(marker);
            bindings.push(estilo);
            jquery("."+estilo).attr("title", err.msg);
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
        clearOutput();
        clearEditMarkers();
        transok = false;
        var compileHandler = function(json, status, xhr) {
            oldcode = code;
            var translatedcode=json['code'];
            if (translatedcode) {
                showCode(translatedcode);
                showDocs(json['code_docs'], json['code_refs']);
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
                    showDocs(json['code_docs'], json['code_refs']);
                }
            }
        };
        document.getElementById('submit').disabled=true;
        jquery.ajax('translate', {
            cache:false, type:'POST',
            dataType:'json',
            timeout:10000,
            beforeSend:startSpinner,
            complete:stopSpinner,
            success:compileHandler,
            error:function(xhr, status, err) {
                transok = false;
                alert("An error occurred while compiling your code: " + err?err:status);
            },
            data:{ceylon:code, module:getModuleCode()}
        });
    } else {
        onTranslation();
    }
}

//Sends the code to the server for compilation and it successful, runs the resulting js.
function run() {
    translate(afterTranslate);
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
        if (clprinted!==true) {
            printSystem("Script ended with no output");
        }
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
        timeout:10000,
        beforeSend:startSpinner,
        complete:stopSpinner,
        success:function(json, status, xhr) {
            clearEditMarkers();
            editor.setValue(json['src']);
            showDocs(json['docs'], json['refs']);
            editor.focus();
        },
        error:function(xhr, status, err) {
            alert("error retrieving '" + key + "'example: " + err?err:status);
        }
    });
}

function getEditCode() {
    return "import browser { ... } import browser.dom { ... } void run_script() {\n" + editor.getValue() + "\n}";
}

function getModuleCode() {
	return "Module module { name='web_ide_script'; version='1.0.0'; dependencies = { Import { name = 'browser'; version = '1.0.0'; } };}";
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
    output.innerHTML = output.innerHTML + "<span class='jsc_msg'>" + txt + "</span><br>";
}

function printError(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + "<span class='jsc_error'>" + txt + "</span><br>";
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
    var code = "void run_script() {\n" + cm.getValue() + "}";
    var docHandler = function(json, status, xhr) {
        if (json && json['docs'] && json['refs']) {
            showDocs(json['docs'], json['refs']);
        }
    };
    document.getElementById('submit').disabled=true;
    jquery.ajax('hoverdoc', {
        cache:false, type:'POST',
        dataType:'json',
        timeout:10000,
        beforeSend:startSpinner,
        complete:stopSpinner,
        success:docHandler,
        error:function(xhr,status,err){
            transok=false;
            alert("An error occurred while retrieving documentation for your code: " + err?err:status);
        },
        data:{ceylon:code, module:getModuleCode()}
    });
}
