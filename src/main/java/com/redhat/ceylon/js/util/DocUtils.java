package com.redhat.ceylon.js.util;

import static com.redhat.ceylon.js.repl.Autocompleter.END;
import static com.redhat.ceylon.js.repl.Autocompleter.KEYWORD;
import static com.redhat.ceylon.js.repl.Autocompleter.TYPE;
import static com.redhat.ceylon.js.repl.Autocompleter.VARIABLE;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.github.rjeschke.txtmark.Configuration;
import com.github.rjeschke.txtmark.Processor;
import com.github.rjeschke.txtmark.SpanEmitter;
import com.redhat.ceylon.common.Versions;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.js.repl.Autocompleter;
import com.redhat.ceylon.model.typechecker.model.Annotation;
import com.redhat.ceylon.model.typechecker.model.Class;
import com.redhat.ceylon.model.typechecker.model.ClassOrInterface;
import com.redhat.ceylon.model.typechecker.model.Declaration;
import com.redhat.ceylon.model.typechecker.model.Functional;
import com.redhat.ceylon.model.typechecker.model.Generic;
import com.redhat.ceylon.model.typechecker.model.Interface;
import com.redhat.ceylon.model.typechecker.model.ModelUtil;
import com.redhat.ceylon.model.typechecker.model.Parameter;
import com.redhat.ceylon.model.typechecker.model.ParameterList;
import com.redhat.ceylon.model.typechecker.model.Type;
import com.redhat.ceylon.model.typechecker.model.TypeAlias;
import com.redhat.ceylon.model.typechecker.model.TypeDeclaration;
import com.redhat.ceylon.model.typechecker.model.TypeParameter;
import com.redhat.ceylon.model.typechecker.model.TypedDeclaration;
import com.redhat.ceylon.model.typechecker.model.Value;

/** Hover docs utilities.
 * 
 * @author Enrique Zamudio
 */
public class DocUtils {

    public static final Configuration MD_CONF = 
            Configuration.builder()
                .forceExtentedProfile()
                .setEncoding("UTF-8")
                .setSpecialLinkEmitter(new SpanEmitter() {
                    @Override
                    public void emitSpan(StringBuilder out, String content) {
                        int bar = content.indexOf('|');
                        if (bar>0) {
                            out.append(content.substring(0, bar));
                        }
                        else {
                            out.append("<code>").append(content).append("</code>");
                        }
                    }
                }).build();

    /** Transforms the reference map into a list of locations in a format that CodeMirror can understand. */
    public static List<Map<String,Object>> referenceMapToList(Map<String, Integer> refs) {
        List<Map<String,Object>> rval = new ArrayList<Map<String,Object>>(refs.size());
        for (Map.Entry<String, Integer> entry : refs.entrySet()) {
            Map<String,Object> ref = locationToMap(entry.getKey(), false);
            ref.put("ref", entry.getValue());
            rval.add(ref);
        }
        return rval;
    }

    /** Transforms a location of form "r:c-r:c" or just "r:c" into a map that CodeMirror can understand.
     * @param location A string in the form "r:c-r:c" or "r:c".
     * @param forceEnd if location is only r:c and this flag is true, the same position is used for the 'end' property. */
    public static Map<String,Object> locationToMap(String location, boolean forceEnd) {
        String[] parts = location.split("-");
        final Map<String,Object> locs = new HashMap<String, Object>(3);
        locs.put("from", encodePosition(parts[0]));
        if (parts.length == 2) {
            locs.put("to", encodePosition(parts[1]));
        } else if (forceEnd) {
            locs.put("to", locs.get("from"));
        }
        return locs;
    }

    public static Map<String,Object> encodePosition(String pos) {
        String[] rc = pos.split(":");
        final Map<String,Object> m = new HashMap<String, Object>(2);
        if (rc.length == 2) {
            m.put("line", Integer.parseInt(rc[0], 10));
            m.put("ch", Integer.parseInt(rc[1], 10));
        }
        return m;
    }

    public static Declaration findDeclaration(final TypeChecker typeChecker, final String file, final int row, final int col) {
        //Run the typechecker
        typeChecker.process();
        //Find the node at the specified position
        final Autocompleter visitor = new Autocompleter(file, row, col, typeChecker);
        final Node node = visitor.findNode();
        if (node != null) {
            //Return its declaration
            try {
                try {
                    Method m = node.getClass().getMethod("getDeclaration");
                    Object d = m.invoke(node);
                    if (d instanceof Declaration) {
                        return (Declaration)d;
                    }
                } catch (NoSuchMethodException ex) {
                    try {
                        Method m = node.getClass().getMethod("getDeclarationModel");
                        Object d = m.invoke(node);
                        if (d instanceof Declaration) {
                            return (Declaration)d;
                        }
                    } catch (NoSuchMethodException e1) {
                        //no hubo nada
                    }
                }
            } catch (IllegalAccessException e) {
                //nothing
            } catch (InvocationTargetException e) {
                //nothing
            }
        }
        return null;
    }

    public static Map<String,Object> getDocs(final Declaration d) {
        final Map<String,Object> json = new HashMap<String, Object>(1);
        json.put("name", d.getQualifiedNameString());
        if (d.getUnit().getPackage().getModule().getNameAsString().equals("ceylon.language")) {
            StringBuilder sb = new StringBuilder("http://modules.ceylon-lang.org/repo/1/");
            sb.append(d.getUnit().getPackage().getNameAsString().replaceAll("\\.", "/")).append('/');
            sb.append(Versions.CEYLON_VERSION_NUMBER).append("/module-doc/");
            if (d.isToplevel()) {
                if (d instanceof ClassOrInterface) {
                    sb.append(d.getName()).append(".type.html");
                } else if (d instanceof com.redhat.ceylon.model.typechecker.model.Function) {
                    sb.append("index.html#").append(d.getName());
                } else if (d instanceof Value) {
                    sb.append(d.getName()).append(".object.html");
                }
            } else if (d.getContainer() instanceof ClassOrInterface && ((Declaration)d.getContainer()).isToplevel()) {
                sb.append(((Declaration)d.getContainer()).getName()).append(".type.html");
                sb.append("#").append(d.getName());
            }
            //json.put("url", sb.toString());
        }
        if (!json.containsKey("url")) {
            json.put("doc", getSignature(d) + 
                    Processor.process(getDoc(d), MD_CONF));
        }
        return json;
    }

    public static String getDoc(Declaration declaration) {
        for (Annotation ann : declaration.getAnnotations()) {
            if ("doc".equals(ann.getName()) && !ann.getPositionalArguments().isEmpty()) {
                String doc = ann.getPositionalArguments().get(0);
                if (doc.charAt(0) == '"' && doc.charAt(doc.length()-1) == '"') {
                    doc = doc.substring(1, doc.length()-1);
                }
                return doc;
            }
        }
        Declaration refined = declaration.getRefinedDeclaration();
        if (refined!=declaration) {
            return getDoc(refined);
        }
        return "";
    }

    public static String getSignature(Declaration declaration) {
        StringBuilder result = new StringBuilder();
        result.append("<pre><code class='cm-s-ceylon'>");
        if (ModelUtil.isConstructor(declaration)) {
            result.append(KEYWORD).append("new").append(END);
        }
        else if (declaration instanceof TypedDeclaration) {
            Type type = ((TypedDeclaration) declaration).getType();
            if (type!=null) {
                result.append(TYPE).append(type.asString()).append(END);
            }
        }
        else if (declaration instanceof Class) {
            result.append(KEYWORD).append("class").append(END);
        }
        else if (declaration instanceof Interface) {
            result.append(KEYWORD).append("interface").append(END);
        }
        else if (declaration instanceof TypeParameter) {
            result.append(KEYWORD).append("given").append(END);
        }
        else if (declaration instanceof TypeAlias) {
            result.append(KEYWORD).append("alias").append(END);
        }
        result.append(' ');
        /*if (declaration.isClassOrInterfaceMember()) {
            ClassOrInterface container = (ClassOrInterface) declaration.getContainer();
            result.append(TYPE).append(container.getName()).append(END).append('.');
        }*/
        if (declaration instanceof TypeDeclaration) {
            result.append(TYPE).append(declaration.getName()).append(END);
        }
        else if (declaration instanceof TypedDeclaration) {
            result.append(VARIABLE).append(declaration.getName()).append(END);
        }
        if (declaration instanceof Generic) {
            Generic g = (Generic) declaration;
            List<TypeParameter> typeParameters = g.getTypeParameters();
            if(!typeParameters.isEmpty()){
                result.append("<");
                boolean once = true;
                for(TypeParameter param : typeParameters){
                    if(once)
                        once = false;
                    else{
                        result.append(", ");
                    }
                    result.append(TYPE).append(param.getName()).append(END);
                }
                result.append(">");
            }
        }
        appendParameters(declaration, result);
        result.append("</code></pre>");
        return result.toString();
    }

    public static void appendParameters(Declaration declaration, StringBuilder result) {
        if (declaration instanceof Functional) {
            Functional fun = (Functional) declaration;
            for(ParameterList parameterList : fun.getParameterLists()){
                result.append("(");
                boolean once = true;
                for(Parameter param : parameterList.getParameters()){
                    if(once)
                        once = false;
                    else{
                        result.append(", ");
                    }
                    Type type = param.getType();
                    if (type!=null) {
                        result.append(TYPE).append(type.asString()).append(END);
                    }
                    result.append(" ").append(VARIABLE).append(param.getName()).append(END);
                    appendParameters(param.getModel(), result);
                }
                result.append(")");
            }
        }
    }

}
