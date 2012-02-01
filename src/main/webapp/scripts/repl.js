
var helloWorld = 'print("Hello World");';
var forTen = 'for (Integer i in 1..10) {\n\
	print(i);\n\
}';

require.config({
    baseUrl: "scripts/modules",
    waitSeconds: 15
});

require(["ceylon/language/0.1/ceylon.language"],
    function(mod) {
		console.log("Ceylon language module loaded OK")
		mod.print = printOutput;
		console.log("ceylon.language.print() patched OK")
    }
);

function remoteTranslate(src, successHandler) {
	var timeoutHandle;
	
	function errorHandler() {
		alert("error");
	};
	
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
				errorHandler();
			}
		}
	};
	
	timeoutHandle = setTimeout(errorHandler, 10000);
	
	xhr.send("ceylon=" + escape(src));
};

var oldcode;

function translate(onTranslation) {
    var ceylon = document.getElementById("ceylon");
    var code = "class Ceylon_Script_Runner() {" + ceylon.value + "}";
    if (code != oldcode) {
    	oldcode = code;
        remoteTranslate(code, function(translatedcode) {
        	showCode(translatedcode);
            try {
	            globalEval(translatedcode);
	            if (onTranslation) {
	            	onTranslation();
	            }
            } catch(err) {
            	printError("Translated code could not be parsed:");
            	printError("--- " + err);
            }
        });
    } else {
    	onTranslation();
    }
}

function run() {
	clearOutput();
	translate(afterTranslate);
}

function afterTranslate() {
	printSystem("// Script start at " + (new Date()));
    try {
		Ceylon_Script_Runner();
    } catch(err) {
    	printError("Runtime error:");
    	printError("--- " + err);
    }
	printSystem("// Script end at " + (new Date()));
}

function editCode(code) {
	var editor = document.getElementById("ceylon");
    editor.value = code;
    return false;
}

function showCode(code) {
	var result = document.getElementById("result");
    result.innerText = code;
    return false;
}

function clearOutput() {
	var output = document.getElementById("output");
	output.innerHTML = "";
}

function printOutput(txt) {
	var output = document.getElementById("output");
	output.innerHTML = output.innerHTML + escapeHtml(txt) + "<br>";
}

function printSystem(txt) {
	var output = document.getElementById("output");
	output.innerHTML = output.innerHTML + "<span class='system'>" + txt + "</span><br>";
}

function printError(txt) {
	var output = document.getElementById("output");
	output.innerHTML = output.innerHTML + "<span class='error'>" + txt + "</span><br>";
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