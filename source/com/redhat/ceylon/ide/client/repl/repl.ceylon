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
                l1=(code.startsWith(wrappedTag)) then wrappedTag.size else 0,
                l2=(code.spanFrom(l1).startsWith(codePrefix)) then codePrefix.size else 0
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
        if (exists run = safeOutputRef("run")) {
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
        if (exists p = safeOutputRef("printOutputLine")) {
            p(txt);
        }
    }
}

shared void printOutput(String txt) {
    dynamic {
        if (exists p = safeOutputRef("printOutput")) {
            p(txt);
        }
    }
}

shared void printSystem(String txt, String? loc=null) {
    dynamic {
        if (exists p = safeOutputRef("printSystem")) {
            p(txt, loc);
        }
    }
}

shared void printError(String txt, String? loc=null) {
    dynamic {
        if (exists p = safeOutputRef("printError")) {
            p(txt, loc);
        }
    }
}

shared void printWarning(String txt, dynamic loc) {
    dynamic {
        if (exists p = safeOutputRef("printWarning")) {
            p(txt, loc);
        }
    }
}

shared void clearOutput() {
    dynamic {
        if (exists p = safeOutputRef("clearOutput")) {
            p();
        }
    }
}

shared void scrollOutput() {
    dynamic {
        if (exists scroll = safeOutputRef("scrollOutput")) {
            scroll();
        }
    }
}

shared Boolean hasLangModOutput() {
    dynamic {
        if (exists hasOutput = safeOutputRef("hasLangModOutput")) {
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

shared void resetOutput(void onReady()) {
    dynamic {
        window.outputReady = void() {
            window.outputReady = null;
            onReady();
        };
        if (exists loc = safeOutputRef("location")) {
            loc.reload();
        }
    }
}

"Wraps the contents of the editor in an object and sends it to the server for compilation.
 On response, executes the script if compilation was OK, otherwise shows errors.
 In any case it sets the hover docs if available."
shared void doTranslateCode(dynamic files, void onTranslation()) {
    dynamic {
        transok = false;
    
        void onSuccess(dynamic json, dynamic status, dynamic xhr) {
            live_tc.done();
            String? translatedcode = json.code;
            if (exists translatedcode) {
                markCompiled(files);
                try {
                    jQuery("#result").text(translatedcode);
                    loadModuleAsString(translatedcode, onTranslation);
                } catch(Throwable err) {
                    printError("Translated code could not be parsed:");
                    printError("--- ``err``");
                }
            }
            //errors?
            dynamic errs = json.errors;
            if (errs && !jQuery.isEmptyObject(errs)) {
                showErrors(errs, !translatedcode exists);
            }
        }
        void onError(dynamic xhr, dynamic status, dynamic err) {
            live_tc.done();
            transok = false;
            printError("An error occurred while compiling your code:");
            printError("--- ``err else status``");
        }
        jQuery.ajax("translate", dynamic[
            cache=false; type="POST";
            dataType="json";
            timeout=20000;
            beforeSend=startSpinner;
            complete=stopSpinner;
            success=onSuccess;
            error=onError;
            contentType="application/json; charset=utf-8";
            data=\iJSON.stringify(dynamic[files=files;]);
        ]);
    }
}

shared void loadModuleAsString(String src, void func()) {
    dynamic {
        if (exists load = repl.safeOutputRef("loadModuleAsString")) {
            startSpinner();
            load(src, void() {
                transok = true;
                func();
                stopSpinner();
            }, void(String when, String err) {
                transok = false;
                stopSpinner();
                if (when == "parsing") {
                    repl.printError("Translated code could not be parsed:");
                } else if (when == "running") {
                    repl.printError("Error running code:");
                } else if (when == "require") {
                    repl.printError("Error loading external modules:");
                } else {
                    repl.printError("Unknown error:");
                }
                repl.printError("--- ``err``");
            });
        }
    }
}

