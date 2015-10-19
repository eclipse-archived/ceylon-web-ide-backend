import ceylon.interop.java {
    CeylonIterable
}
import ceylon.json {
    parse,
    JsonObject=Object,
    JsonArray=Array
}

import com.redhat.ceylon.compiler.js {
    DocVisitor
}

import javax.servlet.annotation {
    webServlet
}
import javax.servlet.http {
    HttpServlet,
    HttpServletRequest,
    HttpServletResponse
}

webServlet { urlPatterns = ["/assist"]; }
shared class AutocompleteServlet() extends HttpServlet() {

    shared actual void doPost(
            HttpServletRequest request, 
            HttpServletResponse response) {
        try {
            value json = readAll(request.inputStream);
            assert (is JsonObject result = parse(json),
                    is String file = result["f"],
                    is Integer row = result["r"],
                    is Integer col = result["c"]);
            value typeChecker = 
                    getTypeChecker {
                        context = request.servletContext;
                        scriptFile = createScriptSource(result);
                    };
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
            sendMapResponse(response, 
                JsonObject {
                    "opts" -> autocompleter.completions
                });
        }
        catch (ex) {
            response.setStatus(500,"");
            sendListResponse(response, 
                JsonArray {
                    "Service error: ``ex.message``"
                });
        }
    }
}
