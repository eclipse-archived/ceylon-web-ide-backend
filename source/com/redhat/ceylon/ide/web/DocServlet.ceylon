import ceylon.interop.java {
    CeylonMap
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

shared class DocServlet() {

    shared void doPost(Request request, Response response) {
        try {
            assert (exists json = request.parameter("json"));
            assert (is JsonObject result = parse(json));
            assert (is String file = result["f"],
                    is Integer row = result["r"],
                    is Integer col = result["c"]);
            sendMapResponse(response,
                documentation(findDeclaration {
                    file = file;
                    row = row;
                    col = col;
                    typeChecker = newTypeChecker(createScriptSource(result));
                }));
        }
        catch (ex) {
            response.responseStatus = 500;
            sendListResponse(response, 
                JsonArray {
                    "Service error: ``ex.message``"
                });
        }
    }
    
    shared void doGet(Request request, Response response) {
        try {
            assert (exists key = request.parameter("key"));
            sendMapResponse(response, JsonObject {
                "files" -> files(key)
            });
        }
        catch (ex) {
            response.responseStatus = 500;
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
    
    JsonObject files(String key) {
        value files = JsonObject();
        String respath = "examples/" + key;
        value sourcePath = respath + ".ceylon";
        if (`module`.resourceByPath(sourcePath) exists) {
            files.put(*file {
                path = respath + ".ceylon";
            });
        }
        else {
            //value paths = 
            //        `module`.getResourcePaths(respath);
            //for (path in CeylonIterable(paths)) {
            //    if (path.endsWith(".ceylon")) {
            //        files.put(*file(path));
            //    }
            //}
        }
        return files;
    }
    
    [String, JsonObject] file(String path) {
        value filename = 
                if (exists loc = path.lastOccurrence('/')) 
                then path[loc + 1...] else path;
        assert (exists file = `module`.resourceByPath(path));
        value content = file.textContent("UTF-8");
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
