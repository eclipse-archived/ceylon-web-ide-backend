var examples={};

require.config({
    baseUrl: "scripts/modules",
    waitSeconds: 15
});

var spin;
var waitSpin;

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

function remoteTranslate(src, successHandler, errorHandler) {
    var timeoutHandle;
    
    if (!errorHandler) {
        errorHandler = function(err) {
            alert("error: " + err);
        };
    }
    
    var url = "translate";
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            clearTimeout(timeoutHandle);
            if (xhr.status == 200) {
                successHandler(xhr.responseText);
            } else {
                errorHandler(xhr.responseText);
            }
        }
    };
    
    timeoutHandle = setTimeout(errorHandler, 10000);
    
    xhr.send("ceylon=" + encodeURIComponent(src));
};

var oldcode, transok;

function translate(onTranslation) {
    var code = "void run_script() {\n" + getEditCode() + "}";
    if (code != oldcode) {
        clearOutput();
        clearEditMarkers();
        oldcode = code;
        transok = false;
        remoteTranslate(code, function(translatedcode) {
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
        }, function(errcodes) {
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
        });
    } else {
        onTranslation();
    }
    document.getElementById('submit').disabled=false;
    waitSpin.stop();
    editor.focus();
}

function run() {
    document.getElementById('submit').disabled=true;
    waitSpin = spin.spin(document.getElementById('primary-content'));
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
    if (!examples[key]) {
        //Retrieve code
        var timeoutHandle;
        var errorHandler=function(err){
            alert("error: " + err);
        };
        var url = "examples/"+key+".ceylon";
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                clearTimeout(timeoutHandle);
                if (xhr.status == 200) {
                    examples[key]=xhr.responseText;
                    editCode(key);
                } else {
                    errorHandler(xhr.responseText);
                }
            }
        };
        timeoutHandle = setTimeout(errorHandler, 10000);
        xhr.send(null);
        waitSpin = spin.spin(document.getElementById('primary-content'));
        return false;
    } else {
        spin.stop();
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
