import ceylon.collection {
    ArrayList
}
import ceylon.interop.java {
    CeylonIterable
}
import ceylon.json {
    JsonObject=Object,
    JsonArray=Array
}

import com.redhat.ceylon.compiler.typechecker {
    TypeChecker
}
import com.redhat.ceylon.compiler.typechecker.analyzer {
    UsageWarning
}
import com.redhat.ceylon.compiler.typechecker.parser {
    RecognitionError
}
import com.redhat.ceylon.compiler.typechecker.tree {
    AnalysisMessage,
    CustomTree,
    Message,
    Node,
    Tree,
    TreeUtil,
    Visitor
}
import com.redhat.ceylon.js.repl.util {
    DocUtils {
        ...
    }
}

class PositionedMessage {
    shared Node node;
    shared Message message;
    
    shared new fromParser(Node that, RecognitionError err) {
        node = that;
        message = err;
    }
    
    shared new fromTypechecker(AnalysisMessage msg) {
        node = msg.treeNode;
        message = msg;
    }
}

class CollectErrorVisitor(TypeChecker typeChecker) 
        extends Visitor() {
    
    //TODO: this is a broken copy of Nodes.getIdentifyingNode() 
    Node identifyingNode(Node node) {
        switch (node)
        case (is Tree.Declaration) {
            if (exists id = node.identifier, 
                    id.token exists) {
                return id;
            }
            else {
                return node;
            }
        }
        case (is Tree.NamedArgument) {
            if (exists id = node.identifier, 
                    id.token exists) {
                return id;
            }
            else {
                return node;
            }
        }
        case (is Tree.Import) {
            return node.importPath;
        }
        case (is Tree.ImportModule) {
            return node.importPath;
        }
        case (is Tree.ModuleDescriptor) {
            return node.importPath;
        }
        case (is Tree.PackageDescriptor) {
            return node.importPath;
        }
        case (is Tree.SimpleType) {
            return node.identifier;
        }
        case (is Tree.StaticMemberOrTypeExpression) {
            return node.identifier;
        }
        case (is CustomTree.ExtendedTypeExpression) {
            return node.type.identifier;
        }
        case (is Tree.ImportMemberOrType) {
            return node.identifier;
        }
        case (is Tree.InitializerParameter) {
            return node.identifier;
        }
        case (is Tree.MemberLiteral) {
            return node.identifier;
        }
        case (is Tree.TypeLiteral) {
            if (is Tree.SimpleType type = node.type) {
                return type.identifier;
            }
            else {
                return node;
            }
        }
        else {
            return node;
        }
    }
    
    value analMsgs = ArrayList<PositionedMessage>();
    value recogErrors = ArrayList<PositionedMessage>();
    value errorsByFile = JsonObject();
    variable Integer errCnt = 0;
    variable Integer warnCnt = 0;
    
    shared actual void visitAny(Node that) {
        for (message in CeylonIterable(that.errors)) {
            if (is AnalysisMessage message) {
                analMsgs.add(PositionedMessage.fromTypechecker(message));
            } else if (is RecognitionError message) {
                recogErrors.add(PositionedMessage.fromParser(that, message));
            }
        }
        
        super.visitAny(that);
    }
    
    void addError(PositionedMessage msg) {
        Node node = TreeUtil.getIdentifyingNode(msg.node);
        String fileName = node.unit?.filename else "unknown";
        JsonArray unitErrors;
        if (is JsonArray list = errorsByFile.get(fileName)) {
            unitErrors = list;
        }
        else {
            unitErrors = JsonArray();
            errorsByFile.put(fileName, unitErrors);
        }
        unitErrors.add(encodeError(node, msg.message));
    }
    
    JsonObject encodeError(Node node, Message err) {
        value errmsg = JsonObject {
            "msg" -> err.message,
            "code" -> err.code
        };
        if (is AnalysisMessage err) {
            value errNode = identifyingNode(err.treeNode);
            errmsg.putAll(locationToMap(errNode.location));
            if (is UsageWarning err) {
                warnCnt++;
            }
            else {
                errCnt++;
            }
        }
        else if (is RecognitionError err) {
            errmsg.putAll(locationToMap(
                "``err.line``:``err.characterInLine``"));
            errCnt++;
        }
        
        if (is UsageWarning err) {
            errmsg.put("tp", "w");
        }
        else {
            errmsg.put("tp", "e");
        }
        return errmsg;
    }
    
    shared void process() {
        value phasedUnits 
                = typeChecker.phasedUnits.phasedUnits;
        for (phasedUnit in CeylonIterable(phasedUnits)) {
            visitAny(phasedUnit.compilationUnit);
        }
        value list 
                = recogErrors.empty 
                then analMsgs 
                else recogErrors;
        for (pm in list) {
            addError(pm);
        }
        if (!recogErrors.empty) {
            warnCnt = 0;
            errCnt = recogErrors.size;
        }
    }
    
    shared JsonObject json => errorsByFile;
    shared Integer errors => errCnt;
    shared Integer warnings => warnCnt;
}

JsonObject locationToMap(String location, Boolean forceEnd=true) {
    value parts = location.split('-'.equals).sequence();
    value locs = JsonObject {};
    if (exists from = parts[0]) {
        locs.put("from", encodePosition(from));
        if (exists to = parts[1]) {
            locs.put("to", encodePosition(to));
        }
        else if (forceEnd) {
            locs.put("to", locs["from"]);
        }
    }
    return locs;
}

JsonObject encodePosition(String pos) {
    value rc = pos.split(':'.equals).sequence();
    value result = JsonObject {};
    if (exists line = rc[0], exists ch = rc[1]) {
        result.put("line", parseInteger(line));
        result.put("ch", parseInteger(ch));
    }
    return result;
}
