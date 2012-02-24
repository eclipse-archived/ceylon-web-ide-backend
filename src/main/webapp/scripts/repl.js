var examples={};

require.config({
    baseUrl: "scripts/modules",
    waitSeconds: 15
});

var spin;
var waitSpin;

function stopSpinner() {
    document.getElementById('submit').disabled=false;
    waitSpin.stop();
    editor.focus();
}

require(["ceylon/language/0.1/ceylon.language", 'scripts/spin.js'],
    function(mod) {
        console && console.log("Ceylon language module loaded OK");
        mod.print = printOutput;
        console && console.log("ceylon.language.print() patched OK");
        spin = Spinner({
            lines:12, length:20, width:10, radius:25, color:'#000',
            speed:1, trail:50, shadow:true, hwaccel:false
        });
    }
);

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

function translate(onTranslation) {
    var code = "void run_script() {\n" + getEditCode() + "}";
    if (code != oldcode) {
        clearOutput();
        clearEditMarkers();
        transok = false;
        var compileOkHandler = function(translatedcode) {
            oldcode = code;
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
        };
        var compileErrHandler = function(errcodes) {
            transok = false;
            
            // FIXME
            var AceRange = require("ace/range").Range;
            
            printError("Code contains errors:");
            var annotations = [];
            var errors = JSON.parse(errcodes);
            for (var idx in errors) {
            	var err = errors[idx];
                printError("--- " + err.msg + " (at " + (err.start.line-1) + ":" + err.start.pos + ")");
                annotations[idx] = {
                	row:err.start.line-2,
                	column:1,
                	text:err.msg,
                	type:"error"
                }
                var markerId = editor.getSession().addMarker(new AceRange(err.start.line-2, err.start.pos, err.end.line-2, err.end.pos+1), "editerror", "text");
            }
            editor.getSession().setAnnotations(annotations);
        }
        httpPost('translate', "ceylon=" + encodeURIComponent(code), compileOkHandler, compileErrHandler, stopSpinner);
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
        editor.getSession().setValue(examples[key]);
        editor.focus();
        return true;
    }
}

function getEditCode() {
    return editor.getSession().getValue();
}

function showCode(code) {
    var result = document.getElementById("result");
    result.innerText = code;
    return false;
}

function clearEditMarkers() {
    editor.getSession().setAnnotations([]);
    var markers = editor.getSession().getMarkers();
    for (var idx in markers) {
    	editor.getSession().removeMarker(idx);
    }
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
