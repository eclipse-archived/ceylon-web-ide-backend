//"use strict";

var clprinted = false;

if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function(prefix, position) {
        position = position || 0;
        return this.indexOf(prefix, position) === position;
    }
}

if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

var pagepath = window.location.pathname;
if (!pagepath.endsWith("/")) {
    var p = pagepath.lastIndexOf("/");
    pagepath = pagepath.substring(0, p + 1);
}

var ceylonVersion = "1.2.0";
var ceylonLang = "ceylon/language/" + ceylonVersion + "/ceylon.language-" + ceylonVersion;
var ceylonCollection = "ceylon/collection/" + ceylonVersion + "/ceylon.collection-" + ceylonVersion;
var paths = {
    "jquery" : pagepath + "scripts/jquery-1.11.1.min",
    "github" : pagepath + "scripts/github"
};
paths[ceylonLang] = pagepath + "scripts/modules/" + ceylonLang;
paths[ceylonCollection] = pagepath + "scripts/modules/" + ceylonCollection;
paths[ceylonLang + "-model"] = pagepath + "scripts/modules/" + ceylonLang + "-model";
paths[ceylonCollection + "-model"] = pagepath + "scripts/modules/" + ceylonCollection + "-model";

require.config({
    baseUrl: "http://modules.ceylon-lang.org/repo/1",
    paths : paths,
    waitSeconds: 15
});

require([ceylonLang, ceylonCollection, "github"],
    function(clang) {
        console && console.log("Ceylon language module loaded OK");
        clang.$_process().write = langModWrite;
        clang.$_process().writeLine = langModWriteLine;
        console && console.log("ceylon.language.print() patched OK");
        if (window.parent.outputReady) {
            window.parent.outputReady();
        }
    }
);

function langModWrite(txt) {
    clprinted=true;
    printOutput(txt.string);
}

function langModWriteLine(txt) {
    clprinted=true;
    printOutputLine(txt.string);
}

function clearLangModOutputState() {
    clprinted = false;
}

function hasLangModOutput() {
    return clprinted;
}

function clearOutput() {
    var output = document.getElementById("output");
    output.innerHTML = "";
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
    output.innerHTML = output.innerHTML + "<span class='jsc_msg'><li>" + escapeHtml(txt) + "</span><br>";
}

function printWarning(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + "<span class='jsc_warn'><li>" + escapeHtml(txt) + "</span><br>";
}

function printError(txt) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML + "<span class='jsc_error'><li>" + escapeHtml(txt) + "</span><br>";
}

function scrollOutput() {
    window.scrollTo(0, 9999999);
}

// Basic HTML escaping.
function escapeHtml(html) {
  return (''+html).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Take a string containing the translated code for a Ceylon module,
// extracts the meta data and parses it to get at the dependencies
// and then pre-loads those dependencies using rewritten paths that
// RequireJS will understand. It will then evaluate the actual
// sources and finally execute the "func()" that was passed.
// Quite a bit of jumping through hoops to get this all to work
function loadModuleAsString(src, func, err) {
    delete window.ex$;
    delete window._CTM$;
    delete window.$CCMM$;
    var lines = src.split("\n");
    var metadata = lines[1];
    try {
        globalEval(metadata);
    } catch (ex) {
        if (err) {
            err("parsing", ex);
        }
    }
    if (window.$CCMM$) {
        var deps = window.$CCMM$()["$mod-deps"];
        if (deps) {
            var newdeps = rewriteDependencies(deps);
            if (newdeps.length > 0) {
                require(newdeps, function() {
                    evalAndRun(src, func, err);
                }, function(error) {
                    if (err) {
                        err("require", error);
                    }
                });
                return;
            }
        }
    }
    evalAndRun(src, func, err);
}

function evalAndRun(src, func, err) {
    try {
        globalEval(src);
    } catch (ex) {
        if (err) {
            err("parsing", ex);
        }
    }
    try {
        if (func) {
            func();
        }
    } catch (ex) {
        err("running", ex);
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

function openCanvasWindow() {
    return window.parent.openCanvasWindow();
}

function setOnStop(func) {
    window.parent.setOnStop(func);
}
