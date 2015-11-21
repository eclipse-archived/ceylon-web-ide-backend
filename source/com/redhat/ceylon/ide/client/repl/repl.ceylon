shared variable Integer spinCount = 0;

shared String wrappedTag = "//$webrun_wrapped
                            ";
shared String codePrefix = "shared void run() {
                            ";
shared String codePostfix = "
                             }";
shared String modulePrefix = "module web_ide_script \"1.0.0\" {
                              ";
shared String modulePostfix = "
                               }";
shared String defaultImportSrc = "``modulePrefix``    // Add module imports here``modulePostfix``";

"Wraps the contents of the editors in an object and sends it to the server
 for compilation. On response, executes the script if compilation was OK,
 otherwise shows errors. In any case it sets the hover docs if available."
shared void translate(dynamic onTranslation) {
    dynamic {
        dynamic files = getCompilerFiles();
        if (!jQuery.isEmptyObject(files)) {
            if (shouldCompile(files)) {
                clearEditMarkers();
                translateCode(files, onTranslation);
            } else {
                if (onTranslation) {
                    onTranslation();
                }
            }
        }
    }
}

"This should be called when from the onDocumentReady event"
shared void setupLiveTypechecker() {
    if (live_tc.shouldTypecheck()) {
        print("typechecking...");
        live_tc.pause();
        dynamic {
            jQuery.ajax("translate", dynamic[
                cache=false;
                type="POST";
                dataType="json";
                timeout=5000;
                success=void(dynamic json, String status, Object xhr) {
                    live_tc.done();
                    clearEditMarkers();
                    dynamic errs = json.errors;
                    if (errs && !jQuery.isEmptyObject(errs)) {
                        showErrors(errs, false);
                    }
                };
                error = () => live_tc.done();
                contentType="application/json; charset=UTF-8";
                data=JSON.stringify(dynamic[
                    tc=1;
                    files=getCompilerFiles();
                ]);
            ]);
        }
    }
}

shared String wrapCode(String code, Boolean noTag) {
    dynamic {
        if (isFullScript(code) == false) {
            if (noTag) {
                return codePrefix + code + codePostfix;
            } else {
                return wrappedTag + codePrefix + code + codePostfix;
            }
        } else {
            return code;
        }
    }
}

shared String unwrapCode(String code, Boolean allowMissingTag) {
    dynamic {
        if (isWrapped(code, allowMissingTag)) {
            return let (
                l1=(code.startsWith(repl.wrappedTag())) then repl.wrappedTag().size else 0,
                l2=(code.spanFrom(l1).startsWith(repl.codePrefix())) then repl.codePrefix().length else 0
            ) code.span(l1+l2, code.size - codePostfix.size);
        } else {
            return code;
        }
    }
}

shared Boolean isWrappedModule(String code) =>
    code.startsWith(modulePrefix) && code.endsWith(modulePostfix);

shared dynamic safeOutputRef(String memberName) {
    dynamic {
        try {
            dynamic outputFrame = jQuery("#outputframe");
            dynamic outputwin = outputFrame[0].contentWindow;
            return outputwin[memberName];
        } catch(e) {
            // Catch and ignore domain errors
            return null;
        }
    }
}
                                        
shared void clearLangModOutputState() {
    dynamic {
        if (exists clear = safeOutputRef("clearLangModOutputState")) {
            clear();
        }
    }
}

shared void executeCode() {
    dynamic {
        if (exists run = repl.safeOutputRef("run")) {
            run();
        } else {
            printError("Entry point 'run()' not found!");
            printError("When advanced mode is active your code should contain a method like:");
            printError("");
            printError("shared void run() {");
            printError("    // Your program starts here");
            printError("}");
        }
    }
}

shared void printOutputLine(String txt) {
    dynamic {
        if (exists p = repl.safeOutputRef("printOutputLine")) {
            p(txt);
        }
    }
}

shared void printOutput(String txt) {
    dynamic {
        if (exists p = repl.safeOutputRef("printOutput")) {
            p(txt);
        }
    }
}

shared void printSystem(String txt, String? loc=null) {
    dynamic {
        if (exists p = repl.safeOutputRef("printSystem")) {
            p(txt, loc);
        }
    }
}

shared void printError(String txt, String? loc=null) {
    dynamic {
        if (exists p = repl.safeOutputRef("printError")) {
            p(txt, loc);
        }
    }
}

shared void printWarning(String txt, dynamic loc) {
    dynamic {
        if (exists p = repl.safeOutputRef("printWarning")) {
            p(txt, loc);
        }
    }
}

shared void clearOutput() {
    dynamic {
        if (exists p = repl.safeOutputRef("clearOutput")) {
            p();
        }
    }
}

shared void scrollOutput() {
    dynamic {
        if (exists scroll = repl.safeOutputRef("scrollOutput")) {
            scroll();
        }
    }
}

shared Boolean hasLangModOutput() {
    dynamic {
        if (exists hasOutput = repl.safeOutputRef("hasLangModOutput")) {
            return hasOutput();
        }
    }
    return false;
}

"This function is called if compilation runs OK"
shared void afterTranslate() {
    Boolean ok;
    dynamic {
        ok = transok;
    }
    if (ok) {
        clearLangModOutputState();
        //printSystem("// Script start at " + (new Date()));
        try {
            executeCode();
        } catch(Throwable err) {
            printError("Runtime error:");
            dynamic {
                dynamic ex=err;
                printError("--- " + ex);
            }
        }
        if (!hasLangModOutput()) {
            printSystem("Script ended with no output");
        }
        scrollOutput();
    }
}

