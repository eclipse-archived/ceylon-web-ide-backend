import ceylon.interop.java {
    CeylonIterable,
    CeylonMap
}
import ceylon.json {
    parse,
    JsonObject=Object,
    JsonArray=Array
}

import com.redhat.ceylon.compiler.typechecker {
    TypeChecker
}
import com.redhat.ceylon.compiler.typechecker.tree {
    Tree
}
import com.redhat.ceylon.ide.web.util {
    DocUtils {
        getDocs
    }
}
import com.redhat.ceylon.model.typechecker.model {
    Declaration
}

import javax.servlet {
    ServletContext
}
import javax.servlet.annotation {
    webServlet
}
import javax.servlet.http {
    HttpServlet,
    HttpServletRequest,
    HttpServletResponse
}

webServlet { urlPatterns = ["/hoverdoc"]; }
shared class DocServlet() extends HttpServlet() {

    shared actual void doPost(
            HttpServletRequest request, 
            HttpServletResponse response) {
        try {
            value json = readAll(request.inputStream);
            assert (is JsonObject result = parse(json));
            assert (is String file = result["f"],
                    is Integer row = result["r"],
                    is Integer col = result["c"]);
            sendMapResponse(response,
                documentation(findDeclaration {
                    file = file;
                    row = row;
                    col = col;
                    typeChecker = getTypeChecker {
                        context = request.servletContext;
                        scriptFile = createScriptSource(result);
                    };
                }));
        }
        catch (ex) {
            response.setStatus(500, "");
            sendListResponse(response, 
                JsonArray {
                    "Service error: ``ex.message``"
                });
        }
    }
    
    shared actual void doGet(
            HttpServletRequest request, 
            HttpServletResponse response) {
        try {
            sendMapResponse(response, JsonObject {
                "files" -> files {
                    context = request.servletContext;
                    key = request.getParameter("key");
                }
            });
        }
        catch (ex) {
            response.status = 500;
            sendListResponse(response, 
                JsonArray {
                    "Service error:``ex.message``"
                });
        }
    }
    
    JsonObject documentation(Declaration? declaration) 
            => JsonObject(CeylonMap(getDocs(declaration)));
    
    Declaration? findDeclaration(TypeChecker typeChecker, 
            String file, Integer row, Integer col) {
        typeChecker.process();
        if (exists [node, _] = 
                Autocompleter {
                    file = file;
                    row = row;
                    col = col;
                    checker = typeChecker;
                }
                .selectedNode) {
            switch (node)
            case (is Tree.StaticMemberOrTypeExpression) {
                return node.declaration;
            }
            case (is Tree.SimpleType) {
                return node.declarationModel;
            }
            case (is Tree.Declaration) {
                return node.declarationModel;
            }
            case (is Tree.NamedArgument) {
                return node.parameter.model;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    
    JsonObject files(ServletContext context, String key) {
        value files = JsonObject();
        String respath = "/examples/" + key;
        value sourcePath = respath + ".ceylon";
        if (context.getResource(sourcePath) exists) {
            files.put(*file {
                context = context;
                path = respath + ".ceylon";
            });
        }
        else {
            value paths = context.getResourcePaths(respath);
            for (path in CeylonIterable(paths)) {
                if (path.endsWith(".ceylon")) {
                    files.put(*file {
                        context = context;
                        path = path.string;
                    });
                }
            }
        }
        return files;
    }
    
    [String, JsonObject] file(
            ServletContext context, String path) {
        value filename = 
                if (exists loc = path.lastOccurrence('/')) 
                then path[loc + 1...] else path;
        value stream = context.getResourceAsStream(path);
        value content = readAll(stream);
        return [
            filename, 
            JsonObject {
                "filename" -> filename,
                "content" -> content,
                "size" -> content.size,
                "type" -> "text/plain",
                "language" -> "Ceylon"
            }
        ];
    }
}
