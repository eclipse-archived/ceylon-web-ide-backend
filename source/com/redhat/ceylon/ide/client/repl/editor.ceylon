"Clears all error markers and hover docs."
shared void clearEditMarkers() {
    dynamic {
        dynamic editors = getEditors();
        jQuery.each(editors, void(Integer index, dynamic editor) {
            editor.clearGutter("CodeMirror-error-gutter");
            dynamic tab = getEditorTab(editor.ceylonId);
            tab.removeClass("warning");
            tab.removeClass("error");
        });
        markers.each((dynamic e)=>e.clear());
        markers=dynamic[1];
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

shared dynamic getEditor(String? id) {
    dynamic {
        dynamic codemirrordiv = jQuery("#" + (id else "null") + " > div");
        if (codemirrordiv.length == 1) {
            dynamic cm0=codemirrordiv[0];
            return cm0.\iCodeMirror;
        }
        return null;
    }
}

shared String getEditorCode(dynamic id, Boolean noWrap) {
    dynamic {
        dynamic editor = getEditor(id);
        String src = editor.getValue();
        String name = editor.ceylonName;
        if (name.endsWith(".ceylon") && (name != "module.ceylon") && !noWrap) {
            return wrapCode(src, false);
        } else {
            return src;
        }
    }
}

shared void setEditorCode(dynamic id, String src, Boolean noUnwrap) {
    dynamic {
        if (src != getEditorCode(id, false)) {
            dynamic editor = getEditor(id);
            dynamic name = editor.ceylonName;
            variable value s2 = src;
            if (name.endsWith(".ceylon") && (name != "module.ceylon") && !noUnwrap) {
                if (isWrapped(src)) {
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

"Creates a new editor with the given name and source"
shared dynamic addSourceEditor(String name, String src) {
    dynamic {
        dynamic editor = createEditor(name);
        setEditorCode(editor.ceylonId, src, false);
        return editor;
    }
}

"This will mark the first and final lines of the editor read-only"
shared void markWrapperReadOnly(dynamic id) {
    dynamic {
        dynamic editor = getEditor(id);
        // First line
        dynamic opts1 = dynamic [ readOnly=true; inclusiveLeft=true; inclusiveRight=false; atomic=true; ];
        editor.markText(dynamic[line=0;ch=0;], dynamic[line=1;ch=0;], opts1);
        editor.addLineClass(0, "background", "cm-locked");
        // Last line
        dynamic opts2 = dynamic [ readOnly=true; inclusiveLeft=false; inclusiveRight=true; atomic=true; ];
        editor.markText(dynamic[line=editor.lineCount() - 1;ch=0;],
            dynamic[line=editor.lineCount();ch=0;], opts2);
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
shared void complete(dynamic editor) {
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
                r=cursor.line + (isAdvancedModeActive() then 1 else 3);
                c=cursor.ch;
            ]);
        ]);
    }
}

shared void createMarkdownView(dynamic editorId) {
    dynamic {
        dynamic editor = getEditor(editorId);
        String name = editor.ceylonName.substring(0, editor.ceylonName.length - 3);
        createTab("preview_" + editorId, "``name`` <i class='fa fa-eye'></i>", "preview-template");
        updateMarkdownView(editorId);
    }
}

shared void updateMarkdownView(dynamic editorId) {
    dynamic {
        dynamic editor = getEditor(editorId);
        String src = getEditorCode(editorId, true);
        dynamic mdHtml = marked(src);
        jQuery("#preview_" + editorId + " > div").html(mdHtml);
        editor.ceylonPreviewUpdate = false;
    }
}

shared void fetchDoc(dynamic cm) {
    variable value done = false;
    dynamic {
        dynamic files = getCompilerFiles();
        void close() {
            if (done)  {
                return;
            }
            done = true;
            jQuery("body").unbind("keydown", close);
            jQuery("body").unbind("click", close);
            help.parentNode.removeChild(help);
        }
        dynamic editor = getEditor(selectedTabId());
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
                files=files; f=editor.ceylonName; r=cursor.line + (isAdvancedModeActive() then 1 else 3); c=cursor.ch-1;]);
        ]);
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
                        && isWrapped(item.content)) {
                    hasWrapped = true;
                }
                if (index == "README.md") {
                    readme = index;
                }
                dynamic neweditor = addSourceEditor(index, item.content);
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
        dynamic editor = getEditor(id);
        if (editor exists) {
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

        variable String? caption = getEditor(id).ceylonName;
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
    dynamic {
        dynamic editor = getEditor(id);
        editor.ceylonSavedName = editor.ceylonName;
        editor.ceylonSavedSource = editor.getValue();
        updateEditorDirtyState(editor.ceylonId);
    }
}

shared void clearEditorDirtyStates() {
    dynamic {
        jQuery.each(getEditors(), void(Integer index, dynamic editor) {
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
    dynamic {
        dynamic editor = getEditor(id);
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
