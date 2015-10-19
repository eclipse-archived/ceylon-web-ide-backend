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
import com.redhat.ceylon.js.repl.util {
    DocUtils {
        getDocs
    }
}
import com.redhat.ceylon.model.typechecker.model {
    Declaration
}

import java.io {
    InputStreamReader
}
import java.lang {
    CharArray,
    StringBuilder
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
        value stream = request.inputStream;
        try {
            value json = readAll(stream);
            assert (is JsonObject result = parse(json));
            assert (is String file = result["f"],
                    is Integer row = result["r"],
                    is Integer col = result["c"]);
            value typeChecker
                    = getTypeChecker {
                        context = request.servletContext;
                        scriptFile = createScriptSource(result);
                    };
            value declaration 
                    = findDeclaration {
                        typeChecker = typeChecker;
                        file = file;
                        row = row;
                        col = col;
                    };
            sendMapResponse(
                documentation(declaration), 
                response);
        }
        catch (Exception ex) {
            response.setStatus(500, "");
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
    
    shared actual void doGet(
            HttpServletRequest request, 
            HttpServletResponse response) {
        try {
            sendMapResponse(
                getExampleHash {
                    context = request.servletContext;
                    key = request.getParameter("key");
                }, 
                response);
        }
        catch (Exception ex) {
            response.setStatus(500, "");
            sendListResponse(
                JsonArray {
                    "Service error:``ex.message``"
                }, 
                response);
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
    
    JsonObject getExampleHash(
            ServletContext context, String key) 
            => JsonObject {
                "files" -> getFilesHash(context, key)
            };
    
    JsonObject getFilesHash(
            ServletContext context, String key) {
        value files = JsonObject();
        String respath = "/examples/" + key;
        value sourcePath = respath + ".ceylon";
        if (context.getResource(sourcePath) exists) {
            files.put(*getFileHash {
                context = context;
                path = respath + ".ceylon";
            });
        }
        else {
            value paths = context.getResourcePaths(respath);
            for (path in CeylonIterable(paths)) {
                if (path.endsWith(".ceylon")) {
                    files.put(*getFileHash {
                        context = context;
                        path = path.string;
                    });
                }
            }
        }
        return files;
    }
    
    [String, JsonObject] getFileHash(
            ServletContext context, String path) {
        value filename = 
                if (exists loc = path.lastOccurrence('/')) 
                then path[loc + 1...] else path;
        value stream = context.getResourceAsStream(path);
        try {
            value reader = InputStreamReader(stream, "UTF-8");
            value builder = StringBuilder();
            value buffer = CharArray(8192);
            variable Integer read;
            variable Integer total = 0;
            while ((read = reader.read(buffer)) > 0) {
                builder.append(buffer, 0, read);
                total += read;
            }
            
            return [
                filename, 
                JsonObject {
                    "filename" -> filename,
                    "content" -> builder.string,
                    "size" -> total,
                    "type" -> "text/plain",
                    "language" -> "Ceylon"
                }
            ];
        }
        finally {
            stream.close();
        }
    }
}
