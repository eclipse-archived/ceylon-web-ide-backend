/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Apache License, Version 2.0 which is available at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: Apache-2.0 
 ********************************************************************************/
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
    TreeUtil {
        getIdentifyingNode
    },
    Visitor
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
    
    void addError(PositionedMessage message) {
        value node = getIdentifyingNode(message.node);
        value fileName = node.unit.filename;
        JsonArray unitErrors;
        if (is JsonArray list = errorsByFile[fileName]) {
            unitErrors = list;
        }
        else {
            unitErrors = JsonArray();
            errorsByFile.put(fileName, unitErrors);
        }
        unitErrors.add(encodeError(node, message.message));
    }
    
    JsonObject encodeError(Node node, Message message) {
        value error = JsonObject {
            "msg" -> message.message,
            "code" -> message.code
        };
        if (is AnalysisMessage message) {
            value errNode = identifyingNode(message.treeNode);
            error.putAll(location(errNode.location));
            if (is UsageWarning message) {
                warnCnt++;
            }
            else {
                errCnt++;
            }
        }
        else if (is RecognitionError message) {
            error.putAll(location(
                "``message.line``:``message.characterInLine``"));
            errCnt++;
        }
        
        if (is UsageWarning message) {
            error.put("tp", "w");
        }
        else {
            error.put("tp", "e");
        }
        return error;
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
        for (message in list) {
            addError(message);
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

JsonObject location(String location, Boolean forceEnd=true) {
    value parts = [*location.split('-'.equals)];
    value result = JsonObject {};
    value from = parts[0];
    result.put("from", position(from));
    if (exists to = parts[1]) {
        result.put("to", position(to));
    }
    else if (forceEnd) {
        result.put("to", result["from"]);
    }
    return result;
}

JsonObject position(String pos) {
    value bits = [*pos.split(':'.equals)];
    value result = JsonObject {};
    if (exists ln = parseInteger(bits[0])) {
        result.put("line", ln);
    }
    if (exists ch = parseInteger(bits[1] else "")) {
        result.put("ch", ch);
    }
    return result;
}
