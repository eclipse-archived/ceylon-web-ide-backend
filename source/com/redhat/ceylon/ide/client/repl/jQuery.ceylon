shared variable dynamic jQuery=0;

"Dynamic interface for jQuery"
shared dynamic JQuery {
	shared formal Boolean isEmptyObject(dynamic obj);
	shared formal String cookie(String name);
}

shared dynamic Event {
	shared formal String target;
}

shared void clearListSelectState() {
    dynamic {
        jQuery("#sidebar li").removeClass("selected");
    }
}

"Returns the number of Ceylon files that are available
 (this includes module descriptors)"
shared Integer countCeylonFiles() {
    variable value cnt = 0;
    dynamic {
        jQuery.each(getEditors(), void(Integer index, Editor editor) {
            if (editor.ceylonName.endsWith(".ceylon")) {
                cnt++;
            }
        });
    }
    return cnt;
}

