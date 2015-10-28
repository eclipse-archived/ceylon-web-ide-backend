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
import com.redhat.ceylon.model.typechecker.model {
    Declaration
}

void hover(Request request, Response response) {
    try {
        value json = request.read();
        assert (is JsonObject result = parse(json));
        assert (is String file = result["f"],
                is Integer row = result["r"],
                is Integer col = result["c"]);
        sendJsonResponse(response,
            getDocs(findDeclaration {
                file = file;
                row = row;
                col = col;
                typeChecker = newTypeChecker(createScriptSource(result));
            }));
    }
    catch (ex) {
        response.responseStatus = 500;
        sendJsonResponse(response, 
            JsonArray {
                "Service error: ``ex.message``"
            });
    }
}

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
