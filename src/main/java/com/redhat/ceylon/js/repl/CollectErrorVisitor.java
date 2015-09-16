/*
 * Copyright Red Hat Inc. and/or its affiliates and other contributors
 * as indicated by the authors tag. All rights reserved.
 *
 * This copyrighted material is made available to anyone wishing to use,
 * modify, copy, or redistribute it subject to the terms and conditions
 * of the GNU General Public License version 2.
 * 
 * This particular file is subject to the "Classpath" exception as provided in the 
 * LICENSE file that accompanied this code.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT A
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License,
 * along with this distribution; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA  02110-1301, USA.
 */
package com.redhat.ceylon.js.repl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.analyzer.UsageWarning;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnit;
import com.redhat.ceylon.compiler.typechecker.parser.RecognitionError;
import com.redhat.ceylon.compiler.typechecker.tree.AnalysisMessage;
import com.redhat.ceylon.compiler.typechecker.tree.Message;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.compiler.typechecker.tree.TreeUtil;
import com.redhat.ceylon.compiler.typechecker.tree.Visitor;
import com.redhat.ceylon.js.util.DocUtils;

public class CollectErrorVisitor extends Visitor {
    private TypeChecker typeChecker;
    private List<PositionedMessage> analMsgs;
    private List<PositionedMessage> recogErrors;
    private Map<String, Object> errors;
    private int errCnt;
    private int warnCnt;
    
    public static class PositionedMessage {
        public Node node;
        public Message message;
        
        PositionedMessage(Node that, RecognitionError err) {
            node = that;
            message = err;
        }
        
        PositionedMessage(AnalysisMessage msg) {
            node = msg.getTreeNode();
            message = msg;
        }
    }
    
    public CollectErrorVisitor(TypeChecker typeChecker) {
        super();
        this.typeChecker = typeChecker;
    }
    
    @Override
    public void visitAny(Node that) {
        for (Message message : that.getErrors()){
            if (message instanceof AnalysisMessage) {
                analMsgs.add(new PositionedMessage((AnalysisMessage)message));
            } else if (message instanceof RecognitionError) {
                recogErrors.add(new PositionedMessage(that, (RecognitionError)message));
            }
        }
        super.visitAny(that);
    }

    private List<PositionedMessage> collect() {
        if (analMsgs == null) {
            analMsgs = new ArrayList<PositionedMessage>();
            recogErrors = new ArrayList<PositionedMessage>();
            for (PhasedUnit pu : typeChecker.getPhasedUnits().getPhasedUnits()) {
                visitAny(pu.getCompilationUnit());
            }
        }
        return (!recogErrors.isEmpty()) ? recogErrors : analMsgs;
    }

    @SuppressWarnings("unchecked")
    private void addError(PositionedMessage msg) {
        Node node = TreeUtil.getIdentifyingNode(msg.node);
        String fileName = (node.getUnit() != null) ? node.getUnit().getFilename() : "unknown";
        
        List<Map<String, Object>> unitErrors = (List<Map<String, Object>>)errors.get(fileName);
        if (unitErrors == null) {
            unitErrors = new ArrayList<Map<String, Object>>();
            errors.put(fileName, unitErrors);
        }
        Map<String, Object> encoded = encodeError(node, msg.message);
        unitErrors.add(encoded);
    }
    
    private Map<String, Object> encodeError(Node node, Message err) {
        final Map<String, Object> errmsg = new HashMap<String, Object>(4);
        errmsg.put("msg", err.getMessage());
        errmsg.put("code", err.getCode());
//        int line = err.getLine();
//        int position = -1;
//        if(err instanceof AnalysisMessage){
//            if(node != null && node.getToken() != null)
//                position = node.getToken().getCharPositionInLine();
//        }else if(err instanceof RecognitionError){
//            position = ((RecognitionError) err).getCharacterInLine();
//        }
        if (err instanceof AnalysisMessage) {
            AnalysisMessage msg = (AnalysisMessage)err;
            errmsg.putAll(DocUtils.locationToMap(msg.getTreeNode().getLocation(), true));
            if (err instanceof UsageWarning) {
                warnCnt++;
            } else {
                errCnt++;
            }
        } else if (err instanceof RecognitionError) {
            RecognitionError rec = (RecognitionError)err;
            String pos = String.format("%d:%d", rec.getLine(), rec.getCharacterInLine());
            errmsg.putAll(DocUtils.locationToMap(pos, true));
            errCnt++;
        }
        if (err instanceof UsageWarning) {
            errmsg.put("tp", "w");
        } else {
            errmsg.put("tp", "e");
        }
        return errmsg;
    }

    private void createJson() {
        if (errors == null) {
            errors = new LinkedHashMap<String, Object>();
            for (PositionedMessage pm : collect()) {
                addError(pm);
            }
            if (!recogErrors.isEmpty()) {
                warnCnt = 0;
                errCnt = recogErrors.size();
            }
        }
    }
    
    public Map<String, Object> json() {
        createJson();
        return errors;
    }
    
    public int errors() {
        createJson();
        return errCnt;
    }
    
    public int warnings() {
        createJson();
        return warnCnt;
    }
}