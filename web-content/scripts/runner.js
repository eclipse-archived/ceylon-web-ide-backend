//"use strict";

// The Ceylon version to use for the user code we'll be running
var ceylonVersion = "1.3.3";

var langMod = 'ceylon/language/' + ceylonVersion + '/ceylon.language-' + ceylonVersion;

require.config({
    baseUrl: "modules",
    waitSeconds: 15,
    map: {
        '*': {
            'ceylon/language/1.2.0/ceylon.language-1.2.0': langMod,
            'ceylon/language/1.2.1/ceylon.language-1.2.1': langMod,
            'ceylon/language/1.2.2/ceylon.language-1.2.2': langMod,
            'ceylon/language/1.3.0/ceylon.language-1.3.0': langMod,
            'ceylon/language/1.3.1/ceylon.language-1.3.1': langMod,
            'ceylon/language/1.3.2/ceylon.language-1.3.2': langMod
        }
    }
});

if (document.domain.endsWith(".ceylon-lang.org")) {
    document.domain = "ceylon-lang.org";
}

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

var ceylonLang = "ceylon/language/" + ceylonVersion + "/ceylon.language-" + ceylonVersion;
require([ceylonLang],
    function(clang) {
        console && console.log("ceylon.language module loaded");
        clang.$_process().write = function (txt) {
            clprinted=true;
            printOutput(txt.string);
        };
        clang.$_process().writeLine = function (txt) {
            clprinted=true;
            printOutputLine(txt.string);
        };
        console && console.log("ceylon.language::print() patched");
        var outputReady = window.parent.outputReady;
        if (outputReady) outputReady();
    }
);

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

// Basic HTML escaping.
function escapeHtml(html) {
  return (''+html)
         .replace(/&/g, '&amp;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;');
}

function highlight(txt) {
    return escapeHtml(txt).replace(/'[^']+'/g, 
         function (m) { return "<code>" + m.substring(1,m.length-1) + "</code>"; });
}

function createMessagesTable() {
    if (!document.getElementById("messages")) {
        var output = document.getElementById("output");
        output.innerHTML = "<table><tbody id='messages'/></table>";
    }
}

function printSystem(txt, loc) {
    createMessagesTable();
    var output = document.getElementById("messages");
    output.innerHTML = output.innerHTML 
        + "<tr><td colspan='4' class='jsc_msg'>"
        + txt + "</td></tr>";
}

function printWarning(txt, loc) {
    createMessagesTable();
    var output = document.getElementById("messages");
    output.innerHTML = output.innerHTML 
        + "<tr><td><img src='images/warning.gif' alt='warning'/>&nbsp;</td><td>" 
        + loc + "</td><td> &mdash; </td><td class='jsc_warn'>" 
        + highlight(txt) + "</td></tr>";
}

function printError(txt, loc) {
    createMessagesTable();
    var output = document.getElementById("messages");
    output.innerHTML = output.innerHTML 
        + "<tr><td><img src='images/error.gif' alt='error'/>&nbsp;</td><td>" 
        + loc + "</td><td> &mdash; </td><td class='jsc_error'>" 
        + highlight(txt) + "</td></tr>";
}

function scrollOutput() {
    window.scrollTo(0, 9999999);
}

// Take a string containing the translated code for a Ceylon 
// module, extracts the meta data and parses it to get at the 
// dependencies and then pre-loads those dependencies using 
// rewritten paths that RequireJS will understand. It will 
// then evaluate the actual sources and finally execute the 
// "func()" that was passed. Quite a bit of jumping through 
// hoops to get this all to work
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
    var ok = false;
    try {
        globalEval(src);
        ok = true;
    } catch (ex) {
        if (err) {
            err("parsing", ex);
        }
    }
    try {
        if (ok && func) {
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
    if (name.substring(0, 4) == "npm:") {
        name = name.substring(4);
    }
    var version = dep.substring(p + 1);
    var path = name.replace(/\./g, "/");
    return path + "/" + version + "/" + name + "-" + version;
}

function openCanvasWindow() {
    return window.parent.openCanvasWindow();
}

function setOnStop(func) {
    window.parent.setOnStop(func);
}
