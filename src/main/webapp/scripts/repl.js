var examples={};
var markers=[];

require.config({
    baseUrl: "scripts/modules",
    waitSeconds: 15
});

var spin;
var waitSpin;

require(["ceylon/language/0.1/ceylon.language", 'scripts/spin.js'],
    function(clang, acer) {
        console && console.log("Ceylon language module loaded OK");
        clang.print = printOutput;
        console && console.log("ceylon.language.print() patched OK");
        spin = Spinner({
            lines:12, length:20, width:10, radius:25, color:'#000',
            speed:1, trail:50, shadow:true, hwaccel:false
        });
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
    printError("Code contains errors:");
    clearEditMarkers();
    for (var i=0; i < errors.length;i++) {
    	var err = errors[i];
        printError("--- " + err.msg + " (at " + (err.start.row-1) + ":" + err.start.col + ")");
        editor.setMarker(err.start.row-2, '<span class="ceylondoc"><a href="javascript:void(0);"><font color="#ff0000"><b>%N%</b></font><span>'+err.msg+'</span></a></span>');
        markers.push(editor.markText({line:err.start.row-2,ch:err.start.col},{line:err.end.row-2,ch:err.end.col+1},"editerror"));
    }
}
function showDocs(docs, refs) {
    for (var i=0; i<refs.length;i++) {
        var ref=refs[i];
        var idx = parseInt(ref.ref);
        //texto es docs[idx]
        markers.push(editor.markText({line:ref.loc.start.row-1,ch:ref.loc.start.col},{line:ref.loc.end.row-1,ch:ref.loc.end.col},"hoverhelp"));
    }
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
    markers=[];
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
