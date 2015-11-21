shared void addExample(String setName, String key, String title) {
    dynamic {
        jQuery("#examples_``setName``").append(
            "<li id=\"example_``setName``_``key`` class=\"news_entry\"><a href=\"#\" onClick=\"return handleEditExample('``setName``', '``key``')\">``title``</a></li>");
    }
}

shared void addExamplesContainer() {
    dynamic {
        jQuery("#sidebarblock > div").append("<div id=\"examplesdiv\"></div>");
    }
}
shared void addExamplesSet(Object setName, String title) {
    dynamic {
        jQuery("#examplesdiv").append("<h3 id=\"exampleshdr_``setName``\">``title``</h3>");
        jQuery("#examplesdiv").append("<ol id=\"examples_``setName``\"></ol>");
    }
}
shared void clearExampleSets() {
    dynamic {
        jQuery("#examplesdiv").empty();
    }
}
shared void addExamples() {
    clearExampleSets();
    addExamplesSet("ex", "Try out a sample:");
    addExample("ex", "hello_world", "Hello World");
    addExample("ex", "basics", "Basics");
    addExample("ex", "null_and_union", "Null values and union types");
    addExample("ex", "conditions", "Conditions and assertions");
    addExample("ex", "classes_and_functions", "Classes and functions 1");
    addExample("ex", "interfaces", "Interfaces and mixin inheritance");
    addExample("ex", "classes_and_functions2", "Classes and functions 2");
    addExample("ex", "collections", "Collections and sequence comprehensions");
    addExample("ex", "named_arguments", "Named argument syntax");
    addExample("ex", "generics", "Type parameters");
    addExample("ex", "switch1", "Enumerations and the switch statement");
    addExample("ex", "interop", "Interoperability");
    addExample("ex", "request", "Interoperability 2");
    addExample("ex", "dynints", "Dynamic interfaces");
    addExample("ex", "operators", "Operator polymorphism");
    addExample("ex", "metamodel", "Type-safe Metamodel");
    addExample("ex", "game_of_life", "Game of Life");
    addExample("ex", "importtest1", "Local Import");
    addExample("ex", "importtest2", "Module Import");
}

"Retrieves the specified example from the editor, along with its hover docs."
shared void editExample(String setName, String key) {
    // Retrieve code
    live_tc.pause();
    dynamic {
        jQuery.ajax("hoverdoc?key=``key``", dynamic[
            cache=true;
            dataType="json";
            timeout=20000;
            beforeSend=startSpinner;
            complete=stopSpinner;
            contentType="application/x-www-form-urlencoded; charset=UTF-8";
            success=void(dynamic json, dynamic status, dynamic xhr) {
                doReset();
                selectedExample = key;
                selectedGist = null;
                markExampleSelected(setName, key);
                setEditorSourcesFromGist(json.files);
                live_tc.now();
            };
            error=void(dynamic xhr, dynamic status, dynamic err) {
                printError("Error retrieving example '" + key + "': " + (err else status));
                live_tc.ready();
            };
        ]);
    }
}

shared void markExampleSelected(Object setName, Object key) {
    clearListSelectState();
    dynamic {
        jQuery("#sidebar #examples_``setName`` li#example_``setName``_``key``").addClass("selected");
    }
}

shared void addUserGistsContainer() {
    dynamic {
        jQuery("#sidebarblock > div").append("<div id=\"yrcodediv\"><h3 id=\"yrcodehdr\" class=\"invis\">Your code:</h3>");
        jQuery("#sidebarblock > div").append("<ol id=\"yrcode\" class=\"invis\"></ol>");
        jQuery("#sidebarblock > div").append("<a id=\"yrcodemore\" class=\"invis\" href=\"#\" onClick=\"\">more...</a></div>");
    }
}
                                                                                                                                                                              
shared Boolean isGitHubConnected() {
    dynamic {
        return jQuery.cookie("githubauth") exists;
    }
}

"Retrieves the specified code from GitHub"
shared void editGist(String key) {
    dynamic {
        void onSuccess(dynamic gist) {
            selectGist(gist);
            setEditorSourcesFromGist(gist.data.files);
            live_tc.now();
        }
        void onError(dynamic xhr, Integer status, dynamic err) {
            printError("Error retrieving Gist '" + key + "': " + (err else status));
            live_tc.ready();
        }
        // Retrieve code
        live_tc.pause();
        github.gist(key).fetch(dynamic [
            success= onSuccess;
            error=onError;
        ]);
    }
}
