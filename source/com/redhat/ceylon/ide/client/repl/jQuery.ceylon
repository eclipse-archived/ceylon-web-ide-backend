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

