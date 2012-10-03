package com.redhat.ceylon.js.repl;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.CharArrayWriter;
import java.io.UnsupportedEncodingException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.redhat.ceylon.compiler.SimpleJsonEncoder;
import com.redhat.ceylon.compiler.js.DocVisitor;
import com.redhat.ceylon.compiler.loader.JsModuleManagerFactory;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.TypeCheckerBuilder;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnit;
import com.redhat.ceylon.js.util.DocUtils;

@WebServlet("/hoverdoc")
public class DocServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private final SimpleJsonEncoder json = new SimpleJsonEncoder();
    //Here we cache the code for the examples, so that it's only compiled the first time someone asks for it.
    private HashMap<String, Map<String, Object>> examples = new HashMap<String, Map<String,Object>>();
    public static final JsModuleManagerFactory MMF = new JsModuleManagerFactory();
    private static ScriptFile exampleModuleFile = null;

    @Override
    public void init(ServletConfig config) throws ServletException {
        try {
            long t0 = System.currentTimeMillis();
            System.err.println("Loading and compiling all examples...");
            exampleModuleFile = new ScriptFile("module.ceylon", getFileContent(config.getServletContext(), "module"));
            long t1 = System.currentTimeMillis();
            System.err.println("Module file loaded in " + (t1-t0) + " millis");
            t0 = System.currentTimeMillis();
            for (String path : config.getServletContext().getResourcePaths("/examples")) {
                if (path.endsWith(".ceylon") && !path.equals("/examples/module.ceylon")) {
                    path = path.substring(10, path.length()-7);
                    System.err.println("Loading example " + path);
                    loadExample(config.getServletContext(), path);
                }
            }
            t1 = System.currentTimeMillis();
            System.err.println("Examples loaded and compiled in " + (t1-t0) + " millis");
        } catch (IOException ex) {
            throw new ServletException("Cannot load module.ceylon for examples", ex);
        }
    }

    /** Documents the code already processed by the typechecker.
     * @param tc The typechecker that has already processed the source code.
     * @param src The Ceylon source, in its original form (without wrapping in a function).
     * @return A map with the docs found for tokens in the code and the positions for said docs. */
    private Map<String, Object> compile(TypeChecker tc) {
        //Retrieve docs
        DocVisitor dv = new DocVisitor();
        for (PhasedUnit pu: tc.getPhasedUnits().getPhasedUnits()) {
            pu.getCompilationUnit().visit(dv);
        }
        //Send as JSON
        Map<String, Object> docs = new HashMap<String, Object>(2);
        docs.put("docs", dv.getDocs());
        docs.put("refs", DocUtils.referenceMapToList(dv.getLocations()));
        return docs;
    }

    private void sendResponse(Map<String, Object> docs, HttpServletResponse response) throws IOException {
        CharArrayWriter swriter = new CharArrayWriter(8192);
        json.encode(docs, swriter);
        String resp = swriter.toString();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        //Unicode chars cause problems with length so we have to count bytes here
        response.setContentLength(resp.getBytes().length);
        response.getWriter().print(resp);
        response.getWriter().flush();
    }

    private Map<String, Object> loadExample(ServletContext cxt, String key) throws IOException {
        Map<String, Object> example = examples.get(key);
        if (example == null) {
            synchronized (examples) {
                if (example == null) {
                    String src = getFileContent(cxt, key);
                    String wrappedSrc = new StringBuilder(
                        "import browser { ... } import browser.dom { ... } void run_script(){\n")
                        .append(src).append("\n}").toString();
                    //Run the typechecker
                    TypeChecker typeChecker = new TypeCheckerBuilder()
                        .addSrcDirectory(new ScriptFile("ROOT",
                            new ScriptFile("web_ide_script", exampleModuleFile,
                                new ScriptFile("SCRIPT.ceylon", wrappedSrc))
                            )
                        )
                        .moduleManagerFactory(MMF)
                        .getTypeChecker();
                    typeChecker.process();
                    example = compile(typeChecker);
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
            sendResponse(loadExample(req.getServletContext(), key), resp);
        } catch (RuntimeException ex) {
            resp.setStatus(500);
            CharArrayWriter error = new CharArrayWriter(1024);
            json.encodeList(Collections.singletonList((Object)String.format("Service error: %s", ex.getMessage())), error);
            final String enc = error.toString();
            resp.setContentLength(enc.length());
            resp.getWriter().print(enc);
        }
    }

    /** Compiles the posted code and returns the compiled js along with documentation. */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String script = request.getParameter("ceylon");
            String module = request.getParameter("module");
            ScriptFile src = new ScriptFile("ROOT",
                    new ScriptFile("web_ide_script",
                            new ScriptFile("SCRIPT.ceylon", script),
                            new ScriptFile("module.ceylon", module)
                    )
            );
            //Run the typechecker
            TypeChecker typeChecker = new TypeCheckerBuilder()
                    .addSrcDirectory(src)
                    .moduleManagerFactory(MMF)
                    .getTypeChecker();
            typeChecker.process();
            sendResponse(compile(typeChecker), response);
        } catch (RuntimeException ex) {
            response.setStatus(500);
            CharArrayWriter sb = new CharArrayWriter(512);
            json.encodeList(Collections.singletonList((Object)String.format("Service error: %s", ex.getMessage())), sb);
            final String enc = sb.toString();
            response.setContentLength(enc.length());
            response.getWriter().print(enc);
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
