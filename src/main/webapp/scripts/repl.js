var examples={};
var markers=[];
var editWidgets=[];

require.config({
    baseUrl: "scripts/modules",
    waitSeconds: 15
});

var spin;
var waitSpin;
var jquery;
var editor;

require(["ceylon/language/0.1/ceylon.language", 'jquery', 'scripts/spin.js'],
    function(clang, $) {
        console && console.log("Ceylon language module loaded OK");
        clang.print = printOutput;
        console && console.log("ceylon.language.print() patched OK");
        spin = Spinner({
            lines:12, length:20, width:10, radius:25, color:'#000',
            speed:1, trail:50, shadow:true, hwaccel:false
        });
        $(document).ready(function() {
            var donde=document.getElementById('edit_ceylon');
            editor = CodeMirror.fromTextArea(donde,{
                value:'print("Hello, World!");',
                mode:'javascript',
                lineNumbers:true
            });
        });
        jquery=$;
    }
);

function stopSpinner() {
    document.getElementById('submit').disabled=false;
    waitSpin.stop();
    editor.focus();
}

function httpPost(url, data, successHandler, errorHandler, hideSpin) {
    var timeoutHandle;
    var errfunc;
    
    if (errorHandler) {
        errfunc = function(err) {
            errorHandler(err);
            hideSpin();
        }
    } else {
        errfunc = function(err) {
            alert("error: " + err);
            hideSpin();
        };
    }

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            clearTimeout(timeoutHandle);
            if (xhr.status == 200) {
                successHandler(xhr.responseText);
                hideSpin();
            } else {
                errfunc(xhr.responseText);
            }
        }
    };
    timeoutHandle = setTimeout(errorHandler, 10000);
    xhr.send(data);
}

function httpGet(url, successHandler, errorHandler, hideSpin) {
    //Retrieve code
    var timeoutHandle;
    var errfunc;
    if (errorHandler) {
        errfunc = function(err) {
            errorHandler(err);
            hideSpin();
        }
    } else {
        errfunc = function(err) {
            alert("error: " + err);
            hideSpin();
        }
    }
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            clearTimeout(timeoutHandle);
            if (xhr.status == 200) {
                successHandler(xhr.responseText);
                hideSpin();
            } else {
                errfunc(xhr.responseText);
            }
        }
    };
    timeoutHandle = setTimeout(errorHandler, 10000);
    xhr.send(null);
}

var oldcode, transok;

//Shows the specified error messages in the code
function showErrors(errors, docs, refs) {
    var errlocs={};
    printError("Code contains errors:");
    clearEditMarkers();
    for (var i=0; i < errors.length;i++) {
    	var err = errors[i];
        printError("--- " + err.msg + " (at " + (err.start.row-1) + ":" + err.start.col + ")");
        editor.setMarker(err.start.row-2, '<span class="ceylondoc"><a href="javascript:void(0);"><font color="#ff0000"><b>%N%</b></font><span>'+err.msg+'</span></a></span>');
        markers.push(editor.markText({line:err.start.row-2,ch:err.start.col},{line:err.end.row-2,ch:err.end.col+1},"editerror"));
        var nodo=document.createElement('pre');
        var loc=err.start.row+":"+err.start.col;
        nodo.setAttribute('id',loc);
        nodo.setAttribute('class','hoverhelp');
        var spaces='';
        var largo=err.end.col-err.start.col+1;
        for(var j=0;j<largo;j++)spaces+=' ';
        nodo.appendChild(document.createTextNode(spaces));
        editWidgets.push(nodo);
        editor.addWidget({line:err.start.row-3,ch:err.start.col},nodo,false);
        errlocs[loc]=err.msg;
    }
	function showErr(event) {
        if (errlocs[this.id]) {
            document.getElementById('docs_errs').innerHTML=errlocs[this.id];
        }
	}
	function hideErr(event) {
        document.getElementById('docs_errs').innerHTML=' ';
	}
    jquery(".hoverhelp").hover(showErr,hideErr);
}
function showDocs(docs, refs) {
    var doclocs={};
    for (var i=0; i<refs.length;i++) {
        var ref=refs[i];
        var idx = parseInt(ref.ref);
        //texto es docs[idx]
        var nodo=document.createElement('pre');
        var loc=ref.loc.start.row+":"+ref.loc.start.col;
        nodo.setAttribute('id',loc);
        nodo.setAttribute('class','hoverhelp');
        var spaces='';
        var largo=ref.loc.end.col-ref.loc.start.col+1;
        for(var j=0;j<largo;j++)spaces+=' ';
        nodo.appendChild(document.createTextNode(spaces));
		console.log("Agregando widget a " + ref.loc.start.row+":"+ref.loc.start.col+" - " + docs[idx]);
        editor.addWidget({line:ref.loc.start.row-3,ch:ref.loc.start.col},nodo,false);
        editWidgets.push(nodo);
        doclocs[loc]=docs[idx];
    }
	function showDoc(event) {
        if (doclocs[this.id]) {
            document.getElementById('docs_errs').innerHTML=doclocs[this.id];
        }
	}
	function hideDoc(event) {
        document.getElementById('docs_errs').innerHTML=' ';
	}
    jquery(".hoverhelp").hover(showDoc, hideDoc);
}

function translate(onTranslation) {
    var code = "void run_script() {\n" + getEditCode() + "}";
    if (code != oldcode) {
        clearOutput();
        clearEditMarkers();
        transok = false;
        var compileHandler = function(result) {
            oldcode = code;
            var json = JSON.parse(result);
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
        var errHandler = function(errcodes) {
            transok = false;
            
            var errors = JSON.parse(errcodes);
            if (errors) {
                showErrors(errors);
            }
        }
        httpPost('translate', "ceylon=" + encodeURIComponent(code), compileHandler, errHandler, stopSpinner);
        document.getElementById('submit').disabled=true;
        waitSpin = spin.spin(document.getElementById('primary-content'));
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
        printSystem("// Script start at " + (new Date()));
        try {
            run_script();
        } catch(err) {
            printError("Runtime error:");
            printError("--- " + err);
        }
        printSystem("// Script end at " + (new Date()));
    }
}

//Shows the specified example in the editor. If the file is not available,
//retrieves it from the server.
function editCode(key) {
    //Make sure we don't do anything until we have an editor
    if (!editor) return false;
    if (!examples[key]) {
        //Retrieve code
        httpGet("examples/"+key+".ceylon", function(sample){
            examples[key]=sample;
            editCode(key);
        }, null, function(){;
            spin.stop();
        });
        waitSpin = spin.spin(document.getElementById('primary-content'));
        return false;
    } else {
        clearEditMarkers();
        editor.setValue(examples[key]);
        editor.focus();
        return true;
    }
}

function getEditCode() {
    return editor.getValue();
}

function showCode(code) {
    var result = document.getElementById("result");
    result.innerText = code;
    return false;
}

function clearEditMarkers() {
    for (var i=0; i<editor.lineCount();i++) {
        editor.clearMarker(i);
    }
    for (var i=0; i<markers.length;i++) {
        markers[i].clear();
    }
    //Remove widgets as well
    for (var i=0; i<editWidgets.length;i++) {
        editWidgets[i].parentNode.removeChild(editWidgets[i]);
    }
    markers=[];
    editWidgets=[];
}

function clearOutput() {
    var output = document.getElementById("output");
    output.innerHTML = "";
    editor.focus();
}

function printOutput(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + escapeHtml(txt) + "<br>";
}

function printSystem(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + "<span class='jsc_msg'>" + txt + "</span><br>";
}

function printError(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + "<span class='jsc_error'>" + txt + "</span><br>";
}

function escapeHtml(html) {
    return html;
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
