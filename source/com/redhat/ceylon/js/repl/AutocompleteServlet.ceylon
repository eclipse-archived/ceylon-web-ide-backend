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

import java.lang {
    NumberFormatException
}

import javax.servlet.http {
    HttpServlet,
    HttpServletRequest,
    HttpServletResponse
}
import javax.servlet.annotation {
    webServlet
}

webServlet { urlPatterns = ["/assist"]; }
shared class AutocompleteServlet() extends HttpServlet() {

    shared actual void doPost(
            HttpServletRequest request, 
            HttpServletResponse response) {
        value stream = request.inputStream;
        try {
            value json = readAll(stream);
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
            sendMapResponse(
                JsonObject {
                    "opts" -> 
                            Autocompleter {
                                file = file;
                                row = row;
                                col = col;
                                checker = typeChecker;
                            }
                            .completions
                }, 
                response);
        }
        catch (NumberFormatException ex) {
            response.setStatus(500,"");
            sendListResponse(
                JsonArray {
                    "Current location wasn't provided"
                }, 
                response);
        }
        catch (ex) {
            response.setStatus(500,"");
            sendListResponse(
                JsonArray {
                    "Service error: ``ex.message``"
                }, 
                response);
        }
        finally {
            stream.close();
        }
    }
}
