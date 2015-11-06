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