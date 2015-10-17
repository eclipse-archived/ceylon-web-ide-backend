package com.redhat.ceylon.js.repl.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.github.rjeschke.txtmark.Configuration;
import com.github.rjeschke.txtmark.Processor;
import com.github.rjeschke.txtmark.SpanEmitter;
import com.redhat.ceylon.common.Versions;
import com.redhat.ceylon.model.typechecker.model.Annotation;
import com.redhat.ceylon.model.typechecker.model.Class;
import com.redhat.ceylon.model.typechecker.model.ClassOrInterface;
import com.redhat.ceylon.model.typechecker.model.Declaration;
import com.redhat.ceylon.model.typechecker.model.Function;
import com.redhat.ceylon.model.typechecker.model.FunctionOrValue;
import com.redhat.ceylon.model.typechecker.model.Functional;
import com.redhat.ceylon.model.typechecker.model.Generic;
import com.redhat.ceylon.model.typechecker.model.Interface;
import com.redhat.ceylon.model.typechecker.model.ModelUtil;
import com.redhat.ceylon.model.typechecker.model.Package;
import com.redhat.ceylon.model.typechecker.model.Parameter;
import com.redhat.ceylon.model.typechecker.model.ParameterList;
import com.redhat.ceylon.model.typechecker.model.Scope;
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

    public static final String KEYWORD = "<span class='cm-keyword'>";
    public static final String VARIABLE = "<span class='cm-variable'>";
    public static final String TYPE = "<span class='cm-variable-3'>";
    public static final String ANNOTATION = "<span class='cm-annotation'>";
    public static final String END = "</span>";
    
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

//    /** Transforms the reference map into a list of locations in a format that CodeMirror can understand. */
//    public static List<Map<ceylon.language.String,Object>> referenceMapToList(Map<ceylon.language.String, Integer> refs) {
//        List<Map<ceylon.language.String,Object>> rval = new ArrayList<Map<ceylon.language.String,Object>>(refs.size());
//        for (Map.Entry<ceylon.language.String, Integer> entry : refs.entrySet()) {
//            Map<ceylon.language.String,Object> ref = locationToMap(entry.getKey(), false);
//            ref.put(ceylon.language.String.instance("ref"), entry.getValue());
//            rval.add(ref);
//        }
//        return rval;
//    }

//    /** Transforms a location of form "r:c-r:c" or just "r:c" into a map that CodeMirror can understand.
//     * @param location A string in the form "r:c-r:c" or "r:c".
//     * @param forceEnd if location is only r:c and this flag is true, the same position is used for the 'end' property. */
//    public static Map<ceylon.language.String,Object> locationToMap(ceylon.language.String location, boolean forceEnd) {
//        String[] parts = location.value.split("-");
//        final Map<ceylon.language.String,Object> locs = 
//                new HashMap<ceylon.language.String, Object>(3);
//        locs.put(ceylon.language.String.instance("from"), encodePosition(parts[0]));
//        if (parts.length == 2) {
//            locs.put(ceylon.language.String.instance("to"), encodePosition(parts[1]));
//        } else if (forceEnd) {
//            locs.put(ceylon.language.String.instance("to"), locs.get("from"));
//        }
//        return locs;
//    }
//
//    public static Map<String,Object> encodePosition(String pos) {
//        String[] rc = pos.split(":");
//        final Map<String,Object> m = new HashMap<String, Object>(2);
//        if (rc.length == 2) {
//            m.put("line", Integer.parseInt(rc[0], 10));
//            m.put("ch", Integer.parseInt(rc[1], 10));
//        }
//        return m;
//    }

    public static Map<ceylon.language.String,ceylon.language.String> getDocs(final Declaration d) {
        final Map<ceylon.language.String,ceylon.language.String> json = 
                new HashMap<ceylon.language.String, ceylon.language.String>(1);
        if (d!=null) {
            json.put(ceylon.language.String.instance("name"), 
                    ceylon.language.String.instance(d.getQualifiedNameString()));
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
                } else if (d.getContainer() instanceof ClassOrInterface 
                        && ((Declaration)d.getContainer()).isToplevel()) {
                    sb.append(((Declaration)d.getContainer()).getName()).append(".type.html");
                    sb.append("#").append(d.getName());
                }
                //json.put("url", sb.toString());
            }
            if (!json.containsKey("url")) {
                json.put(ceylon.language.String.instance("doc"), 
                        ceylon.language.String.instance(
                                getSignature(d) + 
                                getExtraInfo(d) + 
                                getDoc(d) + 
                                getParameterInfo(d)));
            }
        }
        return json;
    }

    public static String getDoc(Declaration declaration) {
        if (declaration==null) {
            return "";
        }
        StringBuilder result = new StringBuilder();
        for (Annotation ann : declaration.getAnnotations()) {
            if ("doc".equals(ann.getName()) && !ann.getPositionalArguments().isEmpty()) {
                String doc = ann.getPositionalArguments().get(0);
                if (doc.charAt(0) == '"' && doc.charAt(doc.length()-1) == '"') {
                    doc = doc.substring(1, doc.length()-1);
                }
                result.append(Processor.process(doc, DocUtils.MD_CONF));
                break;
            }
        }
        if (result.length()==0) {
            Declaration refined = declaration.getRefinedDeclaration();
            if (refined!=declaration) {
                result.append("<ul><li>Refines <code class='cm-s-ceylon'>")
                    .append(TYPE)
                    .append(((Declaration) refined.getContainer()).getName())
                    .append(END)
                    .append('.')
                    .append(VARIABLE)
                    .append(refined.getName())
                    .append(END)
                    .append("</code></ul>")
                    .append(getDoc(refined));
            }
        }
        return result.toString();
    }

    public static String getParameterInfo(Declaration declaration) {
        StringBuilder result = new StringBuilder();
        for (Annotation ann : declaration.getAnnotations()) {
            List<String> positionalArguments = ann.getPositionalArguments();
            if ("see".equals(ann.getName()) && !positionalArguments.isEmpty()) {
                result.append("<p>See ");
                boolean first = true;
                for (String name: positionalArguments) {
                    if (first) {
                        first = false;
                    }
                    else {
                        result.append(", ");
                    }
                    result.append("<code>").append(name).append("</code>");
                }
                result.append(".</p>");
            }
        }
        if (declaration instanceof TypedDeclaration) {
            result.append("<ul><li>Returns <code class='cm-s-ceylon'>")
                .append(TYPE)
                .append(escape(((TypedDeclaration) declaration).getType()))
                .append(END)
                .append("</code></ul>");
        }
        for (Annotation ann : declaration.getAnnotations()) {
            List<String> positionalArguments = ann.getPositionalArguments();
            if ("throws".equals(ann.getName()) && !positionalArguments.isEmpty()) {
                String type = positionalArguments.get(0);
                result.append("<ul><li>Throws <code class='cm-s-ceylon'>")
                    .append(TYPE).append(type).append(END).append("</code>");
                if (positionalArguments.size()>1) {
                    result.append("<p>");
                    String doc = positionalArguments.get(1);
                    if (doc.charAt(0) == '"' && doc.charAt(doc.length()-1) == '"') {
                        doc = doc.substring(1, doc.length()-1);
                    }
                    result.append(Processor.process(doc, DocUtils.MD_CONF));
                    result.append("</p>");
                }
                result.append("</ul>");
            }
        }
        if (declaration instanceof Functional) {
            Functional fun = (Functional) declaration;
            result.append("<ul>");
            for(ParameterList parameterList : fun.getParameterLists()){
                for(Parameter param : parameterList.getParameters()){
                    FunctionOrValue model = param.getModel();
                    result.append("<li><p>Accepts ")
                        .append(getSignatureInternal(model))
                        .append(".</p>")
                        .append(getDoc(model));
                }
            }
            result.append("</ul>");
        }
        return result.toString();
    }

    public static String getSignature(Declaration declaration) {
        return "<pre>" + getSignatureInternal(declaration) + "</pre>";
    }

    private static String getSignatureInternal(Declaration declaration) {
        StringBuilder result = new StringBuilder();
        result.append("<code class='cm-s-ceylon'>");
        if (ModelUtil.isConstructor(declaration)) {
            result.append(KEYWORD).append("new").append(END);
        }
        else if (declaration instanceof Function &&
                ((Function) declaration).isDeclaredVoid()) {
            result.append(KEYWORD).append("void").append(END);
        }
        else if (declaration instanceof TypedDeclaration) {
            Type type = ((TypedDeclaration) declaration).getType();
            if (type!=null) {
                result.append(TYPE).append(escape(type)).append(END);
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
            if (declaration.isAnnotation()) {
                result.append(ANNOTATION).append(declaration.getName()).append(END);
            }
            else {
                result.append(VARIABLE).append(declaration.getName()).append(END);
            }
        }
        if (declaration instanceof Generic) {
            Generic g = (Generic) declaration;
            List<TypeParameter> typeParameters = g.getTypeParameters();
            if(!typeParameters.isEmpty()){
                result.append("&lt;");
                boolean once = true;
                for(TypeParameter param : typeParameters){
                    if(once)
                        once = false;
                    else{
                        result.append(", ");
                    }
                    result.append(TYPE).append(param.getName()).append(END);
                }
                result.append("&gt;");
            }
        }
        appendParameters(declaration, result);
        result.append("</code>");
        return result.toString();
    }

    public static String getExtraInfo(Declaration declaration) {
        StringBuilder result = new StringBuilder();
        Scope container = declaration.getContainer();
        if (container instanceof Package) {
            if (container.getQualifiedNameString()!=null) {
                result.append("<p>Member of package <code class='cm-s-ceylon'>")
                    .append(container.getQualifiedNameString())
                    .append("</code>.</p>");
            }
        }
        else if (declaration.isClassOrInterfaceMember()) {
            Declaration dec = (Declaration) container;
            result.append("<p>Member of <code class='cm-s-ceylon'>")
                .append(TYPE)
                .append(dec.getName())
                .append(END)
                .append("</code>.</p>");
        }
        if (declaration instanceof Class) {
            TypeDeclaration td = (TypeDeclaration) declaration;
            if (td.getExtendedType()!=null) {
                result.append("<ul><li>Extends <code class='cm-s-ceylon'>")
                    .append(TYPE)
                    .append(escape(td.getExtendedType()))
                    .append(END)
                    .append("</code>.</ul>");
            }
        }
        if (declaration instanceof ClassOrInterface ||
                declaration instanceof TypeParameter) {
            TypeDeclaration td = (TypeDeclaration) declaration;
            if (!td.getSatisfiedTypes().isEmpty()) {
                result.append("<ul><li>Satisfies <code class='cm-s-ceylon'>");
                boolean first = true;
                for (Type type: td.getSatisfiedTypes()) {
                    if (first) {
                        first = false;
                    }
                    else {
                        result.append(" & ");
                    }
                    result.append(TYPE).append(escape(type)).append(END);
                }
                result.append("</code>.</ul>");
            }
        }
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
                    if (param.isDeclaredVoid()) {
                        result.append(KEYWORD)
                            .append("void")
                            .append(END);   
                    }
                    else if (type!=null) {
                        if (param.isSequenced()) {
                            type = declaration.getUnit().getIteratedType(type);
                        }
                        result.append(TYPE)
                            .append(escape(type))
                            .append(END);
                        if (param.isSequenced()) {
                            result.append(param.isAtLeastOne() ? "+" : "*");
                        }
                    }
                    result.append(" ")
                        .append(VARIABLE)
                        .append(param.getName())
                        .append(END);
                    appendParameters(param.getModel(), result);
                }
                result.append(")");
            }
        }
    }

    public static String escape(Type type) {
        return type.asString()
                .replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;");
    }

}
