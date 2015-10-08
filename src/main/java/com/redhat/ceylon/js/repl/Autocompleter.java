package com.redhat.ceylon.js.repl;

import static com.redhat.ceylon.js.util.DocUtils.getDoc;
import static com.redhat.ceylon.js.util.DocUtils.getSignature;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.github.rjeschke.txtmark.Processor;
import com.redhat.ceylon.compiler.js.AutocompleteVisitor;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnit;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.compiler.typechecker.tree.Tree;
import com.redhat.ceylon.js.util.DocUtils;
import com.redhat.ceylon.model.typechecker.model.Class;
import com.redhat.ceylon.model.typechecker.model.Declaration;
import com.redhat.ceylon.model.typechecker.model.DeclarationWithProximity;
import com.redhat.ceylon.model.typechecker.model.Function;
import com.redhat.ceylon.model.typechecker.model.Functional;
import com.redhat.ceylon.model.typechecker.model.Parameter;
import com.redhat.ceylon.model.typechecker.model.ParameterList;
import com.redhat.ceylon.model.typechecker.model.Scope;
import com.redhat.ceylon.model.typechecker.model.Setter;
import com.redhat.ceylon.model.typechecker.model.Type;
import com.redhat.ceylon.model.typechecker.model.TypeDeclaration;
import com.redhat.ceylon.model.typechecker.model.TypeParameter;
import com.redhat.ceylon.model.typechecker.model.Unit;
import com.redhat.ceylon.model.typechecker.model.Value;

/** A visitor that can return a list of suggestions given a location on the AST.
 * 
 * @author Enrique Zamudio
 */
public class Autocompleter extends AutocompleteVisitor {
    private String file;
    
    /** Create a new instance that will look for suggestions for the node at the specified location. */
    public Autocompleter(String file, int row, int col, TypeChecker tc) {
        super(row, col, tc);
        this.file = file;
    }

    public Node findNode() {
        return findNode(new AutocompleteUnitValidator() {
            @Override
            public boolean processUnit(PhasedUnit pu) {
                return file.equals(pu.getUnitFile().getName());
            }
        });
    }

    /** Looks for declarations matching the node's text and returns them as strings. 
     * 
     *  Note that this method is just a very poor-quality reimplementation of the
     *  method IdeCompletionManager.getProposals(). (We should find some way to share
     *  that code.)
     *  
     * */
    public List<Map<String,Object>> getCompletionsAsMap() {
        Node node = getNodeAtLocation();
        if (node != null) {
            Unit unit = node.getUnit();
            Map<String, DeclarationWithProximity> completions;
            String prefix = getTextAtLocation();
            Scope scope = node.getScope();
            if (node instanceof Tree.QualifiedMemberOrTypeExpression) {
                Tree.QualifiedMemberOrTypeExpression exp = 
                        (Tree.QualifiedMemberOrTypeExpression) node;
                Tree.Primary p = exp.getPrimary();
                if (exp.getStaticMethodReference()) {
                    Tree.StaticMemberOrTypeExpression smte = 
                            (Tree.StaticMemberOrTypeExpression) p;
                    TypeDeclaration td = 
                            (TypeDeclaration) 
                                smte.getDeclaration();
                    completions = 
                            td.getMatchingMemberDeclarations(
                                    unit, scope, prefix, 0);
                }
                else {
                    completions = 
                            p.getTypeModel()
                            .getDeclaration()
                            .getMatchingMemberDeclarations(
                                    unit, scope, prefix, 0);
                }
            }
            else if (node instanceof Tree.BaseMemberOrTypeExpression) {
                Tree.BaseMemberOrTypeExpression exp = 
                        (Tree.BaseMemberOrTypeExpression) node;
                completions = 
                        exp.getScope()
                        .getMatchingDeclarations(
                                unit, prefix, 0);
            }
            else if (node instanceof Tree.BaseType) {
                Tree.BaseType exp = 
                        (Tree.BaseType) node;
                completions = 
                        exp.getScope()
                        .getMatchingDeclarations(
                                unit, prefix, 0);
            }
            else if (node instanceof Tree.QualifiedType) {
                Tree.QualifiedType exp = 
                        (Tree.QualifiedType) node;
                completions = 
                        exp.getOuterType()
                        .getTypeModel()
                        .getDeclaration()
                        .getMatchingMemberDeclarations(
                                unit, scope, prefix, 0);
            }
            else if (node instanceof Tree.Variable) {
                Tree.Variable exp = 
                        (Tree.Variable) node;
                completions = exp.getScope()
                        .getMatchingDeclarations(
                                unit, 
                                prefix, 0);
            }
            else {
                return Collections.emptyList();
            }
            return translateCompletions(completions);
        }
        else {
            return Collections.emptyList(); 
        }
    }

    private List<Map<String,Object>> translateCompletions(
            Map<String, DeclarationWithProximity> comps) {
        List<Map<String,Object>> completions = 
                new ArrayList<Map<String,Object>>(comps.size());
        for(Map.Entry<String, DeclarationWithProximity> entry : comps.entrySet()){
            translateCompletion(entry.getValue(), completions);
        }
        return completions;
    }

    private void translateCompletion(DeclarationWithProximity value,
            List<Map<String,Object>> completions) {
        Declaration declaration = value.getDeclaration();
        if (declaration instanceof TypeDeclaration ||
                !(declaration instanceof Functional)) {
            Map<String,Object> completion = translateCompletion(declaration, false);
            if (!completions.contains(completion)) {
                completions.add(completion);
            }
        }
        if (declaration instanceof Functional) {
            Map<String,Object> completion = translateCompletion(declaration, true);
            if (!completions.contains(completion)) {
                completions.add(completion);
            }
        }
    }

    public final static String KEYWORD = "<span class='cm-keyword'>";
    public final static String VARIABLE = "<span class='cm-variable'>";
    public final static String TYPE = "<span class='cm-variable-3'>";
    public final static String END = "</span>";
    
    private Map<String,Object> translateCompletion(Declaration declaration, boolean withArgs) {
        Map<String,Object> completion = new HashMap<String, Object>(4);
        StringBuilder insert = new StringBuilder();
        StringBuilder display = new StringBuilder();
//        int move;
        if(declaration instanceof Function){
            Function m = (Function)declaration;
            insert.append(m.getName());
            display.append(VARIABLE).append(m.getName()).append(END);
            if (withArgs) {
                addParameterLists(display, insert, m.getParameterLists());
            }
            else {
                addTypeParameters(display, insert, m.getTypeParameters());
            }
            /*Type type = m.getType();
            if (type!=null) {
                display.append(" \u220a ").append(type.asString());
            }*/
            /*if(m.getContainer() instanceof ClassOrInterface){
                display.append(" - ").append(TYPE).append(((ClassOrInterface)m.getContainer()).getName()).append(END);
            }*/
//            move = m.getName().length() + 1;
        }else if(declaration instanceof Class){
            Class c = (Class)declaration;
            insert.append(c.getName());
            display.append(TYPE).append(c.getName()).append(END);
            if (withArgs) {
                addParameterLists(display, insert, c.getParameterLists());
            }
            else {
                addTypeParameters(display, insert, c.getTypeParameters());
            }
//            move = c.getName().length() + 1;
        }else if(declaration instanceof Value || declaration instanceof Setter){
            insert.append(declaration.getName());
            display.append(VARIABLE).append(declaration.getName()).append(END);
            /*Type type = ((TypedDeclaration) declaration).getType();
            if (type!=null) {
                display.append(" \u220a ").append(type.asString());
            }*/
//            move = declaration.getName().length();
        }else if(declaration instanceof TypeDeclaration){
            insert.append(declaration.getName());
            display.append(TYPE).append(declaration.getName()).append(END);
            if (!withArgs) {
                TypeDeclaration td = (TypeDeclaration) declaration;
                addTypeParameters(display, insert, td.getTypeParameters());
            }
//            move = declaration.getName().length();
        }else{
            insert.append(declaration.getName());
            display.append(declaration.getName());
//            move = declaration.getName().length();
        }
        completion.put("insert", insert.toString());
        completion.put("display", display.toString());
//        completion.put("move", move);
        completion.put("help", getSignature(declaration) + Processor.process(getDoc(declaration), DocUtils.MD_CONF));
        return completion;
    }

    private void addTypeParameters(StringBuilder display, StringBuilder insert,
            List<TypeParameter> typeParameters) {
        if(!typeParameters.isEmpty()){
            insert.append("<");
            display.append("<");
            boolean once = true;
            for(TypeParameter param : typeParameters){
                if(once)
                    once = false;
                else{
                    insert.append(", ");
                    display.append(", ");
                }
                insert.append(param.getName());
                display.append(TYPE).append(param.getName()).append(END);
            }
            insert.append(">");
            display.append(">");
        }
    }

    private void addParameterLists(StringBuilder display, StringBuilder insert,
            List<ParameterList> parameterLists) {
        for(ParameterList parameterList : parameterLists){
            insert.append("(");
            display.append("(");
            boolean once = true;
            for(Parameter param : parameterList.getParameters()){
                if(once)
                    once = false;
                else{
                    insert.append(", ");
                    display.append(", ");
                }
                Type type = param.getType();
                if (type!=null) {
                    display.append(TYPE).append(type.asString()).append(END);
                }
                display.append(" ").append(VARIABLE).append(param.getName()).append(END);
                DocUtils.appendParameters(param.getModel(), display);
                insert.append(param.getName());
            }
            insert.append(")");
            display.append(")");
        }
    }

}