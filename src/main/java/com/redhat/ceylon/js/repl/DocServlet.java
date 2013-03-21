package com.redhat.ceylon.js.repl;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

import com.github.rjeschke.txtmark.Configuration;
import com.github.rjeschke.txtmark.Processor;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.model.Annotation;
import com.redhat.ceylon.compiler.typechecker.model.Declaration;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.js.util.CompilerUtils;
import com.redhat.ceylon.js.util.ServletUtils;

@WebServlet("/hoverdoc")
public class DocServlet extends HttpServlet {

    static final Configuration MD_CONF = Configuration.builder().forceExtentedProfile().setEncoding("UTF-8").build();

    private static final long serialVersionUID = 1L;
    //Here we cache the code for the examples, so that it's only compiled the first time someone asks for it.
    private HashMap<String, JSONObject> examples = new HashMap<String, JSONObject>();

    @Override
    public void init(ServletConfig config) throws ServletException {
        try {
            System.err.println("Loading and compiling all examples...");
            final long t0 = System.currentTimeMillis();
            for (String path : config.getServletContext().getResourcePaths("/examples")) {
                if (path.endsWith(".ceylon") && !path.equals("/examples/module.ceylon")) {
                    path = path.substring(10, path.length()-7);
                    System.err.println("Loading example " + path);
                    loadExample(config.getServletContext(), path);
                }
            }
            final long t1 = System.currentTimeMillis();
            System.err.println("Examples loaded and compiled in " + (t1-t0) + " millis");
        } catch (IOException ex) {
            throw new ServletException("Cannot load module.ceylon for examples", ex);
        }
    }

    private JSONObject loadExample(ServletContext cxt, String key) throws IOException {
        JSONObject example = examples.get(key);
        if (example == null) {
            synchronized (examples) {
                if (example == null) {
                    String src = getFileContent(cxt, key);
                    example = new JSONObject();
                    example.put("src", src);
                    examples.put(key, example);
                }
            }
        }
        return example;
    }

    /** Retrieves the code corresponding to the specified filename, compiles it and returns the compiled js along with documentation and source. */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String key = req.getParameter("key");
        try {
            ServletUtils.sendResponse(loadExample(req.getServletContext(), key), resp);
        } catch (RuntimeException ex) {
            resp.setStatus(500);
            JSONArray error = new JSONArray();
            error.add(String.format("Service error: %s", ex.getMessage()));
            ServletUtils.sendResponse(error, resp);
        }
    }

    /** Compiles the posted code and returns the compiled js along with documentation. */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            final String script = request.getParameter("ceylon");
            final int row = Integer.parseInt(request.getParameter("r"));
            final int col = Integer.parseInt(request.getParameter("c"));
            final ScriptFile src = CompilerUtils.createScriptSource(script);
            //Run the typechecker
            final TypeChecker typeChecker = CompilerUtils.getTypeChecker(request.getServletContext(), src);
            typeChecker.process();
            final AutocompleteVisitor visitor = new AutocompleteVisitor(row, col, typeChecker);
            final Node node = visitor.findNode(AutocompleteVisitor.SCRIPT_VAL);
            Declaration decl = null;
            String doc = null;
            if (node != null) {
                try {
                    try {
                        Method m = node.getClass().getMethod("getDeclaration");
                        Object d = m.invoke(node);
                        if (d instanceof Declaration) {
                            decl = (Declaration)d;
                        }
                    } catch (NoSuchMethodException ex) {
                        try {
                            Method m = node.getClass().getMethod("getDeclarationModel");
                            Object d = m.invoke(node);
                            if (d instanceof Declaration) {
                                decl = (Declaration)d;
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
            JSONObject json = new JSONObject();
            if (decl != null) {
                json.put("name", decl.getQualifiedNameString());
                if (false){//decl.getQualifiedNameString().startsWith("ceylon.language::")) {
                    if (decl instanceof com.redhat.ceylon.compiler.typechecker.model.Class
                            || decl instanceof com.redhat.ceylon.compiler.typechecker.model.ClassAlias) {
                        json.put("type", "class");
                    } else if (decl instanceof com.redhat.ceylon.compiler.typechecker.model.Interface
                            || decl instanceof com.redhat.ceylon.compiler.typechecker.model.InterfaceAlias) {
                        json.put("type", "interface");
                    }
                } else {
                    //Only return doc for declarations that are not part of the language module
                    for (Annotation ann : decl.getAnnotations()) {
                        if ("doc".equals(ann.getName()) && !ann.getPositionalArguments().isEmpty()) {
                            doc = ann.getPositionalArguments().get(0);
                            if (doc.charAt(0) == '"' && doc.charAt(doc.length()-1) == '"') {
                                doc = doc.substring(1, doc.length()-1);
                            }
                            json.put("doc", Processor.process(doc, MD_CONF));
                        }
                    }
                }
            }
            ServletUtils.sendResponse(json, response);
        } catch (RuntimeException ex) {
            response.setStatus(500);
            JSONArray sb = new JSONArray();
            sb.add(String.format("Service error: %s", ex.getMessage()));
            ServletUtils.sendResponse(sb, response);
        }
    }

    private String getFileContent(ServletContext ctx, String key) throws UnsupportedEncodingException, IOException {
        String path = String.format("/examples/%s.ceylon", key);
        InputStreamReader reader = null;
        try {
            reader = new InputStreamReader(ctx.getResourceAsStream(path), "UTF-8");
            StringBuilder sb = new StringBuilder();
            char[] buf = new char[8192];
            int read = 0;
            while ((read = reader.read(buf)) > 0) {
                sb.append(buf, 0, read);
            }
            return sb.toString();
        } finally {
            if (reader != null) { reader.close(); }
        }
    }
}
