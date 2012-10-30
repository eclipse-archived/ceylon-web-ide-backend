package com.redhat.ceylon.js.repl;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnit;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnits;
import com.redhat.ceylon.compiler.typechecker.model.Annotation;
import com.redhat.ceylon.compiler.typechecker.model.Class;
import com.redhat.ceylon.compiler.typechecker.model.ClassOrInterface;
import com.redhat.ceylon.compiler.typechecker.model.Declaration;
import com.redhat.ceylon.compiler.typechecker.model.DeclarationWithProximity;
import com.redhat.ceylon.compiler.typechecker.model.Getter;
import com.redhat.ceylon.compiler.typechecker.model.Method;
import com.redhat.ceylon.compiler.typechecker.model.Parameter;
import com.redhat.ceylon.compiler.typechecker.model.ParameterList;
import com.redhat.ceylon.compiler.typechecker.model.ProducedType;
import com.redhat.ceylon.compiler.typechecker.model.Setter;
import com.redhat.ceylon.compiler.typechecker.model.TypeParameter;
import com.redhat.ceylon.compiler.typechecker.model.TypedDeclaration;
import com.redhat.ceylon.compiler.typechecker.model.Value;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.compiler.typechecker.tree.Tree.Identifier;
import com.redhat.ceylon.compiler.typechecker.tree.Tree.QualifiedMemberExpression;
import com.redhat.ceylon.compiler.typechecker.tree.Visitor;

/** A visitor that can return a list of suggestions given a location on the AST.
 * 
 * @author Enrique Zamudio
 */
public class AutocompleteVisitor extends Visitor {

    private final int row;
    private final int col;
    private final TypeChecker checker;
    private String text;
    private Node node;
    private int pass;

    /** Create a new instance that will look for suggestions for the node at the specified location. */
    public AutocompleteVisitor(int row, int col, TypeChecker tc) {
        this.row = row;
        this.col = col;
        checker = tc;
    }

    public int getRow() { return row; }
    public int getColumn() { return col; }

    public Node findNode(AutocompleteUnitValidator callback) {
        //First pass, to find the identifier
        pass = 1;
        for (PhasedUnit pu : checker.getPhasedUnits().getPhasedUnits()) {
            if (callback.processUnit(pu)) {
                pu.getCompilationUnit().visit(this);
            }
        }
        //Second pass, to find its parent
        if (node != null) {
            pass = 2;
            for (PhasedUnit pu : checker.getPhasedUnits().getPhasedUnits()) {
                if (callback.processUnit(pu)) {
                    pu.getCompilationUnit().visit(this);
                }
            }
        }
        return node;
    }

    public Node findNode() {
        return findNode(new DefaultAutocompleteUnitValidator());
    }

    /** Checks if the identifier contains the location we're interested in. */
    @Override
    public void visit(Identifier that) {
        if (pass == 1 && that.getToken().getLine() == row) {
            final int col0 = that.getToken().getCharPositionInLine();
            final int col1 = Math.max(col0+that.getText().length()-1, col0);
            if (col >= col0 && col <= col1) {
                node = that;
                text = node.getText();
            }
        }
        super.visit(that);
    }

    @Override
    public void visitAny(Node that) {
        if (pass == 2 && node != null) {
            for (Node n : that.getChildren()) {
                if (n.getChildren().contains(node)) {
                    node = n;
                    pass = 3;
                    break;
                }
            }
        }
        super.visitAny(that);
    }

    /** Returns the node containing the specified location, if any. */
    public Node getNodeAtLocation() {
        return node;
    }
    /** Returns the text belonging to the node at the specified location. */
    public String getTextAtLocation() {
        return text;
    }

    /** Looks for matching declarations in the specified phased unit, recursively navigating through its dependent units. */
    private void addCompletions(Map<String, DeclarationWithProximity> comps, Set<PhasedUnit> units,
            Set<com.redhat.ceylon.compiler.typechecker.model.Package> packs, PhasedUnit pu) {
        if (!packs.contains(pu.getPackage())) {
            Map<String, DeclarationWithProximity> c2 = pu.getPackage().getMatchingDeclarations(node.getUnit(), text, 100);
            comps.putAll(c2);
            packs.add(pu.getPackage());
        }
        if (!units.contains(pu)) {
            Map<String, DeclarationWithProximity> c2 = node.getScope().getMatchingDeclarations(pu.getUnit(), text, 100);
            comps.putAll(c2);
            units.add(pu);
        }
        /* COMMENTING OUT until I figure out if I really need to do this and how to get the units by name/path
         * for (String sub : pu.getUnit().getDependentsOf()) {
            addCompletions(comps, units, packs, sub);
        }*/
    }

    /** Looks for declarations matching the node's text and returns them as strings. */
    public JSONArray getCompletions() {
        Map<String, DeclarationWithProximity> comps = new HashMap<String, DeclarationWithProximity>();
        if (node != null) {
            HashSet<PhasedUnit> units = new HashSet<PhasedUnit>();
            HashSet<com.redhat.ceylon.compiler.typechecker.model.Package> packs = new HashSet<com.redhat.ceylon.compiler.typechecker.model.Package>();
            if (node instanceof QualifiedMemberExpression) {
                QualifiedMemberExpression exp = (QualifiedMemberExpression)node;
                ProducedType type = exp.getPrimary().getTypeModel();
                Map<String, DeclarationWithProximity> c2 = type.getDeclaration().getMatchingMemberDeclarations(text, 0);
                comps.putAll(c2);
            } else {
                for (PhasedUnits pus : checker.getPhasedUnitsOfDependencies()) {
                    for (PhasedUnit pu : pus.getPhasedUnits()) {
                        addCompletions(comps, units, packs, pu);
                    }
                }
            }
        }
        return translateCompletions(comps);
    }

    private JSONArray translateCompletions(
            Map<String, DeclarationWithProximity> comps) {
        JSONArray completions = new JSONArray();
        for(Map.Entry<String, DeclarationWithProximity> entry : comps.entrySet()){
            completions.add(translateCompletion(entry.getValue()));
        }
        return completions;
    }

    private JSONObject translateCompletion(DeclarationWithProximity value) {
        JSONObject completion = new JSONObject();
        translateCompletion(completion, value.getDeclaration());
        completion.put("help", getDoc(value.getDeclaration()));
        return completion;
    }

    private final static String KEYWORD = "<span class='cm-atom'>";
    private final static String VARIABLE = "<span class='cm-variable'>";
    private final static String TYPE = "<span class='cm-classname'>";
    private final static String END = "</span>";
    
    private void translateCompletion(JSONObject completion,
            Declaration declaration) {
        StringBuilder insert = new StringBuilder();
        StringBuilder display = new StringBuilder();
        int move;
        if(declaration instanceof Method){
            Method m = (Method)declaration;
            insert.append(m.getName());
            display.append(VARIABLE).append(m.getName()).append(END);
            addTypeParameters(display, insert, m.getTypeParameters());
            addParameterLists(display, insert, m.getParameterLists());
            display.append(" : ").append(type(m.getType()));
            if(m.getContainer() instanceof ClassOrInterface){
                display.append(" - ").append(TYPE).append(((ClassOrInterface)m.getContainer()).getName()).append(END);
            }
            move = m.getName().length() + 1;
        }else if(declaration instanceof Class){
            Class c = (Class)declaration;
            insert.append(c.getName());
            display.append(TYPE).append(c.getName()).append(END);
            addParameterLists(display, insert, c.getParameterLists());
            move = c.getName().length() + 1;
        }else if(declaration instanceof Value || declaration instanceof Getter || declaration instanceof Setter){
            insert.append(declaration.getName());
            display.append(declaration.getName());
            display.append(" : ").append(type(((TypedDeclaration)declaration).getType()));
            move = declaration.getName().length();
        }else{
            insert.append(declaration.getName());
            display.append(declaration.getName());
            move = declaration.getName().length();
        }
        completion.put("insert", insert.toString());
        completion.put("display", display.toString());
        completion.put("move", move);
    }

    private void addTypeParameters(StringBuilder display, StringBuilder insert,
            List<TypeParameter> typeParameters) {
        if(!typeParameters.isEmpty()){
            display.append("<");
            boolean once = true;
            for(TypeParameter param : typeParameters){
                if(once)
                    once = false;
                else{
                    display.append(", ");
                }
                display.append(TYPE).append(param.getName()).append(END);
            }
            
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
                display.append(TYPE).append(type(param.getType())).append(END);
                display.append(" ").append(VARIABLE).append(param.getName()).append(END);
                insert.append(param.getName());
            }
            insert.append(")");
            display.append(")");
        }
    }

    private String type(ProducedType type) {
        return type.getProducedTypeName();
    }

    private String getDoc(Declaration declaration) {
        for (Annotation ann : declaration.getAnnotations()) {
            if ("doc".equals(ann.getName()) && !ann.getPositionalArguments().isEmpty()) {
                String doc = ann.getPositionalArguments().get(0);
                if (doc.charAt(0) == '"' && doc.charAt(doc.length()-1) == '"') {
                    doc = doc.substring(1, doc.length()-1);
                }
                return doc;
            }
        }
        return "";
    }

    /** Callbacks can implement this to tell the visitor if a unit should be processed or not. */
    public interface AutocompleteUnitValidator {
        public boolean processUnit(PhasedUnit pu);
    }

    private class DefaultAutocompleteUnitValidator implements AutocompleteUnitValidator {
        @Override
        public boolean processUnit(PhasedUnit pu) {
            return true;
        }
    }
}
