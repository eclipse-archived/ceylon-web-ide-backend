package com.redhat.ceylon.js.repl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import com.github.rjeschke.txtmark.Processor;
import com.redhat.ceylon.compiler.js.AutocompleteVisitor;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnit;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnits;
import com.redhat.ceylon.model.typechecker.model.Annotation;
import com.redhat.ceylon.model.typechecker.model.Class;
import com.redhat.ceylon.model.typechecker.model.ClassOrInterface;
import com.redhat.ceylon.model.typechecker.model.Declaration;
import com.redhat.ceylon.model.typechecker.model.DeclarationWithProximity;
import com.redhat.ceylon.model.typechecker.model.Function;
import com.redhat.ceylon.model.typechecker.model.Parameter;
import com.redhat.ceylon.model.typechecker.model.ParameterList;
import com.redhat.ceylon.model.typechecker.model.Type;
import com.redhat.ceylon.model.typechecker.model.Setter;
import com.redhat.ceylon.model.typechecker.model.TypeParameter;
import com.redhat.ceylon.model.typechecker.model.TypedDeclaration;
import com.redhat.ceylon.model.typechecker.model.Value;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.compiler.typechecker.tree.Tree.QualifiedMemberExpression;
import com.redhat.ceylon.js.util.DocUtils;

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

    /** Looks for declarations matching the node's text and returns them as strings. */
    public List<Map<String,Object>> getCompletionsAsMap() {
        Map<String, DeclarationWithProximity> comps = new HashMap<String, DeclarationWithProximity>();
        if (getNodeAtLocation() != null) {
            HashSet<PhasedUnit> units = new HashSet<PhasedUnit>();
            HashSet<com.redhat.ceylon.model.typechecker.model.Package> packs = new HashSet<>();
            if (getNodeAtLocation() instanceof QualifiedMemberExpression) {
                QualifiedMemberExpression exp = (QualifiedMemberExpression)getNodeAtLocation();
                Type type = exp.getPrimary().getTypeModel();
                Map<String, DeclarationWithProximity> c2 = type.getDeclaration().getMatchingMemberDeclarations(
                        getNodeAtLocation().getUnit(), null, getTextAtLocation(), 0);
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

    private List<Map<String,Object>> translateCompletions(
            Map<String, DeclarationWithProximity> comps) {
        List<Map<String,Object>> completions = new ArrayList<Map<String,Object>>(comps.size());
        for(Map.Entry<String, DeclarationWithProximity> entry : comps.entrySet()){
            final Map<String,Object> completion = translateCompletion(entry.getValue());
            if (!completions.contains(completion)) {
                completions.add(completion);
            }
        }
        return completions;
    }

    private Map<String,Object> translateCompletion(DeclarationWithProximity value) {
        Map<String,Object> completion = new HashMap<String, Object>(4);
        translateCompletion(completion, value.getDeclaration());
        completion.put("help", Processor.process(getDoc(value.getDeclaration()), DocUtils.MD_CONF));
        return completion;
    }

    private final static String KEYWORD = "<span class='cm-atom'>";
    private final static String VARIABLE = "<span class='cm-variable'>";
    private final static String TYPE = "<span class='cm-classname'>";
    private final static String END = "</span>";
    
    private void translateCompletion(Map<String,Object> completion,
            Declaration declaration) {
        StringBuilder insert = new StringBuilder();
        StringBuilder display = new StringBuilder();
        int move;
        if(declaration instanceof Function){
            Function m = (Function)declaration;
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
        }else if(declaration instanceof Value || declaration instanceof Setter){
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

    private String type(Type type) {
        return type.asQualifiedString();
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

}