package com.redhat.ceylon.js.util;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import com.github.rjeschke.txtmark.Configuration;
import com.github.rjeschke.txtmark.Processor;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.model.Annotation;
import com.redhat.ceylon.compiler.typechecker.model.Declaration;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.js.repl.AutocompleteVisitor;
import com.redhat.ceylon.js.repl.ScriptFile;

/** Hover docs utilities.
 * 
 * @author Enrique Zamudio
 */
public class DocUtils {

    public static final Configuration MD_CONF = Configuration.builder().forceExtentedProfile().setEncoding("UTF-8").build();

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

    public static Declaration findDeclaration(final TypeChecker typeChecker, final int row, final int col) {
        //Run the typechecker
        typeChecker.process();
        //Find the node at the specified position
        final AutocompleteVisitor visitor = new AutocompleteVisitor(row, col, typeChecker);
        final Node node = visitor.findNode(AutocompleteVisitor.SCRIPT_VAL);
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
        if (false){//d.getUnit().getPackage().getModule().getNameAsString().equals("ceylon.language")) {
            json.put("url", "http://fuckthis/");
        } else {
            String doc = null;
            //Only return doc for declarations that are not part of the language module
            for (Annotation ann : d.getAnnotations()) {
                if ("doc".equals(ann.getName()) && !ann.getPositionalArguments().isEmpty()) {
                    doc = ann.getPositionalArguments().get(0);
                    if (doc.charAt(0) == '"' && doc.charAt(doc.length()-1) == '"') {
                        doc = doc.substring(1, doc.length()-1);
                    }
                    json.put("doc", Processor.process(doc, MD_CONF));
                }
            }
        }
        return json;
    }

}
