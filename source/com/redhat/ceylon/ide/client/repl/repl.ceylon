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

shared String wrapCode(String code, Boolean noTag) =>
    if (advancedMode)
    then code
    else if (noTag)
    then codePrefix + code + codePostfix
    else wrappedTag + codePrefix + code + codePostfix;

shared String unwrapCode(String code, Boolean allowMissingTag) =>
    if (isWrapped(code, allowMissingTag)) then
        let (
            l1=(code.startsWith(wrappedTag)) then wrappedTag.size else 0,
            l2=(code.spanFrom(l1).startsWith(codePrefix)) then codePrefix.size else 0
        ) code.span(l1+l2, code.size - codePostfix.size)
    else code;

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
            String? translatedcode = json.code exists then json.code else null;
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
        if (exists load = safeOutputRef("loadModuleAsString")) {
            startSpinner();
            load(src, void() {
                transok = true;
                func();
                stopSpinner();
            }, void(String when, String err) {
                transok = false;
                stopSpinner();
                if (when == "parsing") {
                    printError("Translated code could not be parsed:");
                } else if (when == "running") {
                    printError("Error running code:");
                } else if (when == "require") {
                    printError("Error loading external modules:");
                } else {
                    printError("Unknown error:");
                }
                printError("--- ``err``");
            });
        }
    }
}

"This function checks for dirty editors and will run `func()`
 immediately if non of them are. Otherwise it will show a
 question to the user asking if they want to discard the 
 changes. When affirmative `func()` will be run or 'negative()'
 otherwise. Can have an optional list of editor ids to check
 for dirty state (by default all editors are checked)."
shared void checkForChangesAndRun(void func(), Anything()? negative, dynamic edids) {
    dynamic {
        if (stopFunction exists) {
            w2alert("Program is running, stop it first before doing anything else", "Program Running", negative);
        } else if (isAnyEditorDirty(edids)) {
            dynamic conf = w2confirm("This will discard any changes! Are you sure you want to continue?");
            conf.yes(func);
            if (negative exists) {
                conf.no(negative);
            }
        } else {
            func();
        }
    }
}

"Retrieves the specified example from the editor, along with its hover docs."
shared void editSource(String src) {
    doReset();
    dynamic {
        selectedExample = null;
        selectedGist = null;
        dynamic files = createFilesFromCode(src);
        setEditorSourcesFromGist(files);
    }
    clearListSelectState();
    live_tc.now();
}

shared void onDocumentReady(){
    dynamic {
        if (uriparams?.usrlow exists) {
            // With "usrlow" set the user's gists will be shown
            // at the bottom of the sidebar instead of the top
            addExamplesContainer();
            addUserGistsContainer();
        } else {
            addUserGistsContainer();
            addExamplesContainer();
        }
        variable Boolean noDefault = false;
        if (uriparams?.src exists) {
            // Code is directly in URL
            String code = decodeURIComponent(uriparams.src);
            setTimeout(void() => editSource(code), 1);
            noDefault = true;
        } else if (uriparams?.sample exists) {
            // Retrieve code from the given sample id
            editExample("ex", uriparams.sample);
            noDefault = true;
        } else if (uriparams?.gist exists) {
            // Retrieve code from the given sample id
            editGist(uriparams?.gist);
            noDefault = true;
        } else {
            if (!uriparams?.set exists) {
                startSpinner();
                runCode("""print("Ceylon ``language.version`` \"``language.versionName``\"");""");
                stopSpinner();
            }
        }
        if (uriparams?.set exists) {
            handleSelectSet(uriparams.set, noDefault);
        } else {
            // This is the default set of examples stored in our
            // special "ceylonwebide" GitHub account
            handleSelectSet("6e03a3db46854ff825e9", noDefault);
        }
        listUserGists();
    }
}

"Creates the proper 'files' element necessary for compilation,
 autocomplete and documentation handling"
shared dynamic getCompilerFiles() {
    dynamic {
        dynamic files = dynamic[];
        dynamic editors = getEditors();
        jQuery.each(editors, void(Integer index, Editor editor) {
            if (compilerAccepts(editor.ceylonName)) {
                dynamic content = dynamic[
                    content=getEditorCode(editor.ceylonId, false);
                ];
                setObjectProperty(files, editor.ceylonName, content);
            }
        });
        return files;
    }
}

shared Editor newFile(String name) {
    Editor neweditor;
    dynamic {
        if (!isAdvancedModeActive() && name.endsWith(".ceylon") && countCeylonFiles() >= 1) {
            // We switch to advanced mode
            applyAdvanced();
            if (name == "module.ceylon",
                exists moded = getEditor(editorId("module.ceylon"))) {
                // The switch to advanced mode will have created
                // this editor already, we just select it
                neweditor = moded;
            } else {
                // We still need to create the new file
                neweditor = createEditor(name);
            }
        } else {
            neweditor = createEditor(name);
        }
        if (name.endsWith(".md")) {
            createMarkdownView(neweditor.ceylonId);
        }
        selectTab(neweditor.ceylonId);
        updateEditorDirtyState(neweditor.ceylonId);
        updateMenuState();
        updateAdvancedState();
    }
    return neweditor;
}

"Creates the proper \"files\" element necessary for creating and
 updating Gists using the contents of the current editor(s)"
shared dynamic getGistFiles() {
    dynamic {
        dynamic files = dynamic[];
        dynamic editors = getEditors();
        jQuery.each(editors, void(Integer index, Editor editor) {
            dynamic content = dynamic[
                content=getEditorCode(editor.ceylonId, false);
            ];
            if (isEditorRenamed(editor.ceylonId)) {
                content.filename = editor.ceylonName;
                setObjectProperty(files, editor.ceylonSavedName, content);
            } else {
                setObjectProperty(files, editor.ceylonName, content);
            }
        });
        // See if we need to delete any files
        if (selectedGist exists) {
            jQuery.each(selectedGist.data.files, void(Integer index, dynamic item) {
                if (!getEditor(editorId(index)) exists) {
                    setObjectProperty(files, index, null);
                }
            });
        }
        return files;
    }
}

shared Boolean isWrapped(String code, Boolean allowMissingTag) =>
    code.startsWith(wrappedTag + codePrefix)
            || allowMissingTag && code.startsWith(codePrefix);

shared Boolean isCodeUnwrappable() {
    variable value canUnwrap = true;
    value cnt = countCeylonFiles();
    dynamic {
        dynamic editors = getEditors();
        jQuery.each(editors, void(Integer index, Editor editor) {
            if (editor.ceylonName.endsWith(".ceylon")
                && editor.ceylonName != "module.ceylon") {
                canUnwrap = canUnwrap && isWrapped(editor.getValue(), true);
            }
        });
    }
    return canUnwrap && cnt <= 2;
}

shared String? selectedTabId() {
    dynamic {
        // First test is because w2ui keeps returning the previous
        // active state when all tabs have been deleted
        return (w2ui["editortabs"].tabs.length > 0) then w2ui["editortabs"].active else null;
    }
}

shared variable Callable<Anything,[]>? stopFunction = null;

"A way to stop running scripts (that support it!)"
shared void stop() {
    if (exists stopfunc = stopFunction) {
        try {
            stopfunc();
        } catch(Throwable e) {}
        stopFunction = null;
        dynamic {
            buttonEnable("run", true);
            buttonEnable("stop", false);
        }
        scrollOutput();
    }
}

shared Editor newModuleFile() {
    value neweditor = addSourceEditor("module.ceylon", defaultImportSrc);
    markWrapperReadOnly(neweditor.ceylonId);
    updateEditorDirtyState(neweditor.ceylonId);
    return neweditor;
}

"Deletes a file"
shared void deleteFile(String id) {
    dynamic {
        fileDeleted = true;
        // Remove the editor
        dynamic div = getEditorDiv(id);
        if (div.length > 0) {
            div.remove();
            deleteTab(id);
            dynamic previewDiv = getPreviewDiv(id);
            if (previewDiv != null && previewDiv.length > 0) {
                previewDiv.remove();
                deleteTab("preview_``id``");
            }
        }
    }
}

shared void handleAdvanced(Event event) {
    if (advancedMode) {
        void yes() {
            dynamic {
                buttonSetIcon("advanced", "fa fa-square-o");
            }
            undoAdvanced();
        }
        void no() {
            dynamic {
                buttonCheck("advanced", true);
            }
            advancedMode=true;
        }
        dynamic {
            checkForChangesAndRun(yes, no, ["module.ceylon"]);
        }
    } else {
        dynamic {
            buttonSetIcon("advanced", "fa fa-check-square-o");
        }
        applyAdvanced();
    }
}

