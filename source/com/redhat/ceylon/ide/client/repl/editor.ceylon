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

shared dynamic getEditor(dynamic id) {
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
                    s2 = repl.unwrapCode(src);
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

