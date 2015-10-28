import ceylon.interop.java {
    CeylonIterable
}
import ceylon.json {
    parse,
    JsonObject=Object,
    JsonArray=Array
}
import ceylon.net.http.server {
    Request,
    Response
}

import com.redhat.ceylon.compiler.js {
    DocVisitor
}

void autocomplete(Request request, Response response) {
    try {
        value json = request.read();
        assert (is JsonObject result = parse(json),
                is String file = result["f"],
                is Integer row = result["r"],
                is Integer col = result["c"]);
        value typeChecker 
                = newTypeChecker(createScriptSource(result));
        typeChecker.process();
        value docVisitor = DocVisitor();
        value phasedUnits 
                = typeChecker.phasedUnits.phasedUnits;
        for (pu in CeylonIterable(phasedUnits)) {
            pu.compilationUnit.visit(docVisitor);
        }
        value autocompleter 
                = Autocompleter {
            file = file;
            row = row;
            col = col;
            checker = typeChecker;
        };
        sendJsonResponse(response, 
            JsonObject {
                "opts" -> autocompleter.completions
            });
    }
    catch (ex) {
        response.responseStatus = 500;
        sendJsonResponse(response, 
            JsonArray {
                "Service error: ``ex.message``"
            });
    }
}
