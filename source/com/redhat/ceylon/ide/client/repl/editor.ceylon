"Represents an instance of a CodeMirror editor."
shared dynamic Editor {
    shared formal variable String ceylonId;
    shared formal variable String ceylonName;
    shared formal variable String? ceylonSavedName;
    shared formal variable String? ceylonSavedSource;
    shared formal variable Boolean ceylonPreviewUpdate;
    shared formal void clearGutter(String name);
    shared formal void focus();
    shared formal void setValue(String txt);
    shared formal String getValue();
    shared formal void setOption(String opt, dynamic val);
    shared formal void on(String event, void action());
    shared formal void markText(dynamic arg1, dynamic arg2, dynamic arg3);
    shared formal void addLineClass(Integer arg1, String arg2, String arg3);
    shared formal Integer lineCount();
    shared formal void setCursor(Integer cursor);
    shared formal dynamic getCursor();
    shared formal dynamic cursorCoords(Boolean flag);
    shared formal void refresh();
    shared formal void execCommand(String cmd);
}

shared variable dynamic markers=null;

"Clears all error markers and hover docs."
shared void clearEditMarkers() {
    dynamic {
        dynamic editors = getEditors();
        jQuery.each(editors, void(Integer index, Editor editor) {
            editor.clearGutter("CodeMirror-error-gutter");
            dynamic tab = getEditorTab(editor.ceylonId);
            tab.removeClass("warning");
            tab.removeClass("error");
        });
        if (markers exists) {
            for (m in markers) {
                m.clear();
            }
        }
        //This is a bug in the compiler
        //should be markers=dynamic[1]
        setMarkers(dynamic[1]);
        markers.shift();
    }
}

shared void focusSelectedEditor() {
    dynamic {
        if (exists id = selectedTabId(),
                exists editor = getEditor(id),
                !isMobile) {
            editor.focus();
        }
    }
}

shared void doReset() {
    clearOutput();
    clearEditMarkers();
    focusSelectedEditor();
}

shared dynamic createTab(dynamic newid, String name, String template) {
    dynamic {
        w2ui["editortabs"].add(dynamic[ id=newid; caption=name; ]);
        dynamic tabTemplate = jQuery("#``template``");
        dynamic newTabContent = tabTemplate.clone();
        newTabContent[0].id = newid;
        jQuery("#editorspane").append(newTabContent);
        return newTabContent;
    }
}

shared String helpViewId = "webide_help";

shared void createHelpView() {
    dynamic {
        createTab(helpViewId, "Help", "help-template");
        tabCloseable(helpViewId, void() => deleteHelpView());
        selectTab(helpViewId);
    }
}

shared void deleteHelpView() {
    dynamic {
        jQuery("#``helpViewId``").remove();
        deleteTab(helpViewId);
    }
}

shared dynamic openHelpView() {
    dynamic {
        if (!w2ui["editortabs"].get(helpViewId) exists) {
            createHelpView();
        }
        selectTab(helpViewId);
        dynamic x = jQuery("#``helpViewId``");
        return x[0];
    }
}

shared dynamic getEditorTab(dynamic id) {
    dynamic {
        return jQuery("#tabs_editortabs_tab_" + id);    
    }
}

shared Editor? getEditor(String? id) {
    dynamic {
        dynamic codemirrordiv = jQuery("#``id else "null"`` > div");
        if (codemirrordiv.length == 1) {
            dynamic cm0=codemirrordiv[0];
            if (cm0.\iCodeMirror exists) {
                return cm0.\iCodeMirror;
            }
        }
    }
    return null;
}

shared String getEditorCode(String id, Boolean noWrap) {
    dynamic {
        if (exists editor = getEditor(id)) {
            value src = editor.getValue();
            value name = editor.ceylonName;
            if (name.endsWith(".ceylon") && (name != "module.ceylon") && !noWrap) {
                return wrapCode(src, false);
            } else {
                return src;
            }
        }
    }
    return "";
}

shared void setEditorCode(String id, String src, Boolean noUnwrap) {
    dynamic {
        if (src != getEditorCode(id, false)) {
            if (exists editor = getEditor(id)) {
                value name = editor.ceylonName;
                variable value s2 = src;
                if (name.endsWith(".ceylon") && (name != "module.ceylon") && !noUnwrap) {
                    if (isWrapped(src, false)) {
                        s2 = unwrapCode(src, false);
                    }
                }
                editor.setValue(s2);
                if (!noUnwrap) {
                    editor.ceylonSavedSource = s2;
                }
            }
        }
    }
}

"Creates a new editor with the given name and source"
shared Editor addSourceEditor(String name, String src) {
    value editor = createEditor(name);
    setEditorCode(editor.ceylonId, src, false);
    return editor;
}

"This will mark the first and final lines of the editor read-only"
shared void markWrapperReadOnly(String id) {
    if (exists editor = getEditor(id)) {
        dynamic {
            // First line
            dynamic opts1 = dynamic [ readOnly=true; inclusiveLeft=true; inclusiveRight=false; atomic=true; ];
            editor.markText(dynamic[line=0;ch=0;], dynamic[line=1;ch=0;], opts1);
        }
        editor.addLineClass(0, "background", "cm-locked");
        dynamic {
            // Last line
            dynamic opts2 = dynamic [ readOnly=true; inclusiveLeft=false; inclusiveRight=true; atomic=true; ];
            editor.markText(dynamic[line=editor.lineCount() - 1;ch=0;],
                dynamic[line=editor.lineCount();ch=0;], opts2);
        }
        editor.addLineClass(editor.lineCount() - 1, "background", "cm-locked");
    }
}

shared dynamic editorMode(String name) {
    if (name.endsWith(".ceylon")) {
        return "text/x-ceylon";
    } else if (name.endsWith(".js")) {
        return "javascript";
    } else if (name.endsWith(".json")) {
        dynamic {
            return dynamic[name="javascript"; json=true;];
        }
    } else if (name.endsWith(".md")) {
        return "markdown";
    } else {
        dynamic {
            return \iundefined;
        }
    }
}

"Autocompletion support"
shared void complete(Editor editor) {
    dynamic {
        dynamic cursor = editor.getCursor();
        dynamic files = getCompilerFiles();
        live_tc.pause();
        jQuery.ajax("assist", dynamic[
            cache=false; type="POST";
            dataType="json";
            timeout=20000;
            beforeSend=startSpinner;
            success=void(dynamic json, dynamic status, dynamic xhr) {
                stopSpinner();
                live_tc.ready();
                dynamic codeMirrorAutocomplete() =>
                        dynamic[ list=json.opts;from=cursor;to=cursor;];
                \iCodeMirror.autocomplete(editor, codeMirrorAutocomplete);
            };
            error=void(dynamic xhr, dynamic status, dynamic err) {
                live_tc.ready();
                printError("An error occurred while retrieving completions for your code:");
                printError("--- ``err else status``");
            };
            contentType="application/json; charset=UTF-8";
            data=\iJSON.stringify(dynamic[
                files=files;
                f=editor.ceylonName;
                r=cursor.line + (advancedMode then 1 else 3);
                c=cursor.ch;
            ]);
        ]);
    }
}

shared void createMarkdownView(String editorId) {
    if (exists editor = getEditor(editorId)) {
        value name = editor.ceylonName.span(0, editor.ceylonName.size - 3);
        dynamic {
            createTab("preview_" + editorId, "``name`` <i class='fa fa-eye'></i>", "preview-template");
        }
        updateMarkdownView(editorId);
    }
}

shared void updateMarkdownView(String editorId) {
    if (exists editor = getEditor(editorId)) {
        value src = getEditorCode(editorId, true);
        dynamic {
            dynamic mdHtml = marked(src);
            jQuery("#preview_" + editorId + " > div").html(mdHtml);
        }
        editor.ceylonPreviewUpdate = false;
    }
}

shared void fetchDoc() {
    variable value done = false;
    dynamic {
        dynamic files = getCompilerFiles();
        void close() {
            if (!done) {
                done = true;
                jQuery("body").unbind("keydown", close);
                jQuery("body").unbind("click", close);
                help.parentNode.removeChild(help);
            }
        }
        if (exists editor = getEditor(selectedTabId())) {
            void docHandler(dynamic json, dynamic status, dynamic xhr) {
                live_tc.ready();
                if (json && json.name) {
                    if (json.doc) {
                        dynamic pos = editor.cursorCoords(true);
                        help = document.createElement("div");
                        help.className = "help infront";
                        help.innerHTML = json.doc;
                        help.style.left = "``pos.left``px";
                        help.style.top = "``pos.bottom``px";
                        document.body.appendChild(help);
                        jQuery("body").keydown(close);
                        jQuery("body").click(close);
                        closePopups = close;
                        help.focus();
                    }
                }
            }
            dynamic cursor = editor.getCursor();
            live_tc.pause();
            jQuery.ajax("hoverdoc", dynamic[
                cache=false;
                type="POST";
                dataType="json";
                timeout=20000;
                beforeSend=startSpinner;
                complete=stopSpinner;
                success=docHandler;
                error=void(dynamic xhr, dynamic status, dynamic err) {
                    live_tc.ready();
                    printError("An error occurred while retrieving documentation for your code:");
                    printError("--- ``err else status``");
                };
                contentType="application/json; charset=UTF-8";
                data=\iJSON.stringify(dynamic[
                    files=files; f=editor.ceylonName;
                    r=cursor.line + (advancedMode then 1 else 3);
                    c=cursor.ch-1;
                ]);
            ]);
        }
    }
}

"Deletes all editors"
shared void deleteEditors() {
    dynamic {
        jQuery("#editorspane").empty();
        dynamic tabs = w2ui.editortabs.tabs;
        // WARNING: do NOT change this to $.each(tabs, ...) !
        jQuery(tabs).each(void(Integer index, dynamic item) =>
            w2ui.editortabs.remove(item.id));
        live_tc.done();
    }
}

"Sets the code for the editor(s) from the given object"
shared void setEditorSourcesFromGist(dynamic files) {
    variable value cnt = 0;
    variable value hasModule = false;
    variable value hasWrapped = false;
    dynamic {
        fileDeleted = false;
        deleteEditors();
        variable String? firstFile = null;
        variable String? firstCeylonFile = null;
        variable String? firstEditModeFile = null;
        variable String? readme = null;
        jQuery.each(files, void(String index, dynamic item) {
            if (editorAccepts(index)) {
                if (!firstFile exists) {
                    firstFile = index;
                }
                if (!firstEditModeFile exists && editorMode(index) exists) {
                    firstEditModeFile = index;
                }
                if (!firstCeylonFile exists
                    && index.endsWith(".ceylon")
                        && (index != "module.ceylon")) {
                    firstCeylonFile = index;
                }
                if (index.endsWith(".ceylon")) {
                    cnt++;
                }
                if (index.endsWith(".ceylon")
                    && (index != "module.ceylon")
                        && isWrapped(item.content, false)) {
                    hasWrapped = true;
                }
                if (index == "README.md") {
                    readme = index;
                }
                value neweditor = addSourceEditor(index, item.content);
                if (index == "module.ceylon") {
                    hasModule = true;
                    if (isWrappedModule(item.content)) {
                        markWrapperReadOnly(neweditor.ceylonId);
                    }
                } else if (index.endsWith(".md")) {
                    createMarkdownView(neweditor.ceylonId);
                }
            }
        });
        if (!hasModule && (cnt > 1 || cnt == 1 && !hasWrapped)) {
            newModuleFile();
        }
        String? selectFile =
                if (readme exists) then readme
                else if (firstCeylonFile exists) then firstCeylonFile
                else if (firstEditModeFile exists) then firstEditModeFile
                else firstFile;
        if (exists selectFile) {
            dynamic tabid = let (edid = editorId(selectFile))
                if (selectFile.endsWith(".md")) then
                "preview_" + edid
                else edid;
            selectTab(tabid);
        }
        clearEditorDirtyStates();
        updateMenuState();
        updateAdvancedState();
        live_tc.ready();
    }
}

shared void selectTab(String id) {
    dynamic {
        w2ui.editortabs.select(id);
        jQuery("#editorspane > div").addClass("invis");
        getEditorDiv(id).removeClass("invis");
        updateMenuState();
        // If it's an editor set the focus to it
        if (exists editor = getEditor(id)) {
            editor.refresh();
            if (!isMobile) {
                editor.focus();
            }
        }
        // If it's a preview check if it needs to be refreshed
        if (id.startsWith("preview_")) {
            value editorId = id.spanFrom(8);
            if (exists e2 = getEditor(editorId), e2.ceylonPreviewUpdate) {
                updateMarkdownView(editorId);
            }
        }
    }
}

shared void updateEditorDirtyState(String id) {
    dynamic {
        // Setting the tab state resets any classes we might
        // have added, so we store their states
        dynamic tab = getEditorTab(id);
        Boolean hasErr = tab.hasClass("error");
        Boolean hasWrn = tab.hasClass("warning");

        variable String? caption = getEditor(id)?.ceylonName;
        if (selectedGist exists && isEditorRenamed(id)) {
            caption = "[``caption else NULL``]";
        }
        if (isEditorDirty(id)) {
            caption = "*``caption else NULL``";
        }
        w2ui.editortabs.set(id, dynamic[ caption=caption; ]);
        
        // We now restore any classes that we found earlier
        if (hasErr) {
            tab.addClass("error");
        }
        if (hasWrn) {
            tab.addClass("warning");
        }
    }
}

shared void clearEditorDirtyState(String id) {
    if (exists editor = getEditor(id)) {
        editor.ceylonSavedName = editor.ceylonName;
        editor.ceylonSavedSource = editor.getValue();
        updateEditorDirtyState(editor.ceylonId);
    }
}

shared void clearEditorDirtyStates() {
    dynamic {
        jQuery.each(getEditors(), void(Integer index, Editor editor) {
            editor.ceylonSavedName = editor.ceylonName;
            editor.ceylonSavedSource = editor.getValue();
            updateEditorDirtyState(editor.ceylonId);
        });
        updateMenuState();
        updateAdvancedState();
        fileDeleted = false;
    }
}

shared Boolean isEditorDirty(String id) {
    if (exists editor = getEditor(id)) {
        dynamic {
            //Must be dynamic because it can be undefined
            dynamic src = editor.getValue();
            dynamic oldsrc = editor.ceylonSavedSource;
            if (exists src) {
                if (exists oldsrc) {
                    return src != oldsrc;
                }
                return true;
            }
            return !oldsrc exists;
        }
    }
    return false;
}

variable Callable<Anything,[]>? closePopups = null;

shared Editor createEditor(String name) {
    value newid = editorId(name);
    Editor e;
    dynamic {
        createTab(newid, name, "editor-template");
        dynamic div00 = jQuery("#" + newid);
        dynamic div = div00[0];
        dynamic editor = \iCodeMirror(div, dynamic[
            mode=editorMode(name);
            theme="ceylon";
            gutters=dynamic["CodeMirror-error-gutter", "CodeMirror-gutter"];
            lineNumbers=true;
            indentUnit=4;
            matchBrackets=true;
            styleActiveLine=true;
            autoCloseBrackets=true;
            //highlightSelectionMatches: true,
        ]);
        dynamic extraKeys=dynamic[];
        setObjectProperty(extraKeys, "Ctrl-S", handleSaveAll);
        setObjectProperty(extraKeys, "Cmd-S", handleSaveAll);
        setObjectProperty(extraKeys, "Ctrl-D", fetchDoc);
        setObjectProperty(extraKeys, "Cmd-D", fetchDoc);
        setObjectProperty(extraKeys, "Ctrl-Space", void() => complete(editor));
        setObjectProperty(extraKeys, "Cmd-.", void() => complete(editor));
        editor.setOption("extraKeys", extraKeys);
        editor.ceylonId = newid;
        editor.ceylonName = name;
        editor.on("focus", void() {
            // Hack to make sure that clicking in the editor correctly
            // closes all popups and deselects their associated buttons
            jQuery().w2overlay();
            buttonCheck("menu", false);
            buttonCheck("connected", false);
            if (exists cp=closePopups) {
                cp();
            }
            closePopups = null;
        });
        editor.on("change", void() {
            updateEditorDirtyState(editor.ceylonId);
            updateMenuState();
            updateAdvancedState();
            live_tc.postpone();
            editor.ceylonPreviewUpdate = true;
        });
        editor.on("cursorActivity", void() {
            if (exists cp=closePopups) {
                cp();
            }
            closePopups = null;
        });
        editor.on("update", void() =>
            updateEditorSize(editor.ceylonId));
        editor.ceylonSavedName=null;
        editor.ceylonSavedSource=null;
        editor.ceylonPreviewUpdate=true;
        e = editor;
    }
    return e;
}

shared String canvasId = "webide_canvas";

shared void createCanvas() {
    dynamic {
        dynamic elem = createTab(canvasId, "Canvas", "canvas-template");
        elem[0].ceylonCanvas = (elem.find("canvas"))[0];
        tabCloseable(canvasId, void() {
            stop();
            jQuery("#``canvasId``").remove();
            deleteTab(canvasId);
        });
    }
    selectTab(canvasId);
}

"Delete a tab (not the content pane! Remove that first)"
shared void deleteTab(String id) {
    dynamic {
        // Remove the tab
        dynamic index = w2ui["editortabs"].get(id, true);
        w2ui["editortabs"].remove(id);
        // Select a new tab
        dynamic editors = getEditors();
        Integer cnt = editors.length;
        if (cnt > 0) {
            Integer newindex = (index < cnt) then index else cnt - 1;
            String newid = editors[newindex].ceylonId;
            selectTab(newid);
        } else {
            updateMenuState();
        }
        updateAdvancedState();
    }
}

shared variable Boolean advancedMode = false;

shared void applyAdvanced() {
    advancedMode = true;
    dynamic {
        dynamic editors = getEditors();
        jQuery.each(editors, void (Integer index, Editor editor) {
            if (editor.ceylonName.endsWith(".ceylon")) {
                editor.execCommand("selectAll");
                editor.execCommand("indentMore");
                value src = wrapCode(getEditorCode(editor.ceylonId, true), true);
                setEditorCode(editor.ceylonId, src, true);
            }
        });
    }
    newModuleFile();
    live_tc.ready();
    dynamic {
        updateMenuState();
        // Need to put this in a timeout or the update
        // of the button conflicts with the w2 framework
        window.setTimeout(updateAdvancedState, 1);
    }
}

shared void updateAdvancedState() {
    value cnt = countCeylonFiles();
    advancedMode = (cnt > 1) || (cnt == 1) && isCodeUnwrappable();
    dynamic {
        buttonCheck("advanced", advancedMode);
        buttonEnable("advanced", !advancedMode || ((cnt == 1) || (cnt == 2)) && isCodeUnwrappable());
    }
}

shared void undoAdvanced() {
    advancedMode = false;
    dynamic {
        dynamic tmp = fileDeleted;
        deleteFile(editorId("module.ceylon"));
        fileDeleted = tmp;
        dynamic editors = getEditors();
        jQuery.each(editors, void (Integer index, Editor editor) {
            if (editor.ceylonName.endsWith(".ceylon")) {
                value src = unwrapCode(getEditorCode(editor.ceylonId, true), true);
                setEditorCode(editor.ceylonId, src, true);
                editor.execCommand("selectAll");
                editor.execCommand("indentLess");
                editor.setCursor(0);
            }
        });
        updateMenuState();
        // Need to put this in a timeout or the update
        // of the button conflicts with the w2 framework
        window.setTimeout(updateAdvancedState, 1);
    }
}


shared String editorId(String name) =>
        "editor_" + name.replace(".", "_");

shared Boolean editorAccepts(String name) {
    dynamic {
        return editorMode(name) exists || name.endsWith(".txt");
    }
}
