
var sample_helloWorld = 'print("Hello World");';
var sample_forTen = 'for (i in 1..10) {\n\
    print(i);\n\
}';
var sample_stringInterp='String interp = " interpolation ";\n\
String s2 = "to START and END with";\n\
String s3 = "siht ekil ,";\n\
print("String" interp.uppercased " needs "\n\
      s2.lowercased " by string literals"\n\
      s3.reversed "");';
var sample_null1='void printIf1(String? s) {\n\
    if (exists s) {\n\
        print(s);\n\
    } else {\n\
        print("Nothing to print.");\n\
    }\n\
}\n\
String? s1 = null;\n\
String? s2 = "I do exist";\n\
printIf1(s1);\n\
printIf1(s2);\n\
print(s1 else "Nothing here...");\n\
print(s2 else "Nothing here...");';
var sample_null2='void greet(String? name) {\n\
    print("Hello, " name ? "World" "!");\n\
}\n\
void shout(String? name) {\n\
    greet(name?.uppercased);\n\
}\n\
greet(null);\n\
greet("yourself");\n\
shout(null);\n\
shout("yourself");';
var sample_defparms='void greet(String name="World") {\n\
    print("Hello, " name "!");\n\
}\n\
void shout(String? name) {\n\
    greet( (name ? "world" ).uppercased);\n\
}\n\
greet();\n\
greet("yourself");\n\
shout(null);\n\
shout("yourself");';

require.config({
    baseUrl: "scripts/modules",
    waitSeconds: 15
});

require(["ceylon/language/0.1/ceylon.language"],
    function(mod) {
        console && console.log("Ceylon language module loaded OK");
        mod.print = printOutput;
        console && console.log("ceylon.language.print() patched OK");
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
    var code = "void run_script() {" + getEditCode() + "}";
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
                printError("--- " + err.msg);
                annotations[idx] = {
                	row:err.start.line-1,
                	column:1,
                	text:err.msg,
                	type:"error"
                }
                var markerId = editor.getSession().addMarker(new AceRange(err.start.line-1, err.start.pos, err.end.line-1, err.end.pos+1), "editerror", "text");
            }
            editor.getSession().setAnnotations(annotations);
        });
    } else {
        onTranslation();
    }
    editor.focus();
}

function run() {
    translate(afterTranslate);
}

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

function editCode(code) {
    editor.getSession().setValue(code);
    return false;
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
