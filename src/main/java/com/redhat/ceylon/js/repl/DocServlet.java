package com.redhat.ceylon.js.repl;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.model.Declaration;
import com.redhat.ceylon.js.util.CompilerUtils;
import com.redhat.ceylon.js.util.DocUtils;
import com.redhat.ceylon.js.util.ServletUtils;

@WebServlet("/hoverdoc")
public class DocServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    //Here we cache the code for the examples, so that it's only compiled the first time someone asks for it.
    private HashMap<String, Map<String,Object>> examples = new HashMap<String, Map<String,Object>>();

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

    private Map<String,Object> loadExample(ServletContext cxt, String key) throws IOException {
        Map<String,Object> example = examples.get(key);
        if (example == null) {
            synchronized (examples) {
                if (example == null) {
                    String src = getFileContent(cxt, key);
                    example = new HashMap<String, Object>(2);
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
            List<String> error = new ArrayList<String>(1);
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
            Declaration decl = DocUtils.findDeclaration(
                    CompilerUtils.getTypeChecker(request.getServletContext(), src), row, col);
            final Map<String,Object> docs = decl == null ? new HashMap<String, Object>() : DocUtils.getDocs(decl);
            ServletUtils.sendResponse(docs, response);
        } catch (RuntimeException ex) {
            response.setStatus(500);
            ServletUtils.sendResponse(Collections.singletonList(
                    String.format("Service error: %s", ex.getMessage())), response);
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
