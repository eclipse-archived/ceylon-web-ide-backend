package com.redhat.ceylon.js.repl;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.redhat.ceylon.compiler.js.DocVisitor;
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
        String resp = json.encode(docs);
        response.setContentLength(resp.length());
        response.getWriter().print(resp);
    }

    /** Retrieves the code corresponding to the specified filename, compiles it and returns the compiled js along with documentation and source. */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String key = req.getParameter("key");
        Map<String, Object> example = examples.get(key);
        if (example == null) {
            synchronized (this) {
                if (example == null) {
                    String path = String.format("/examples/%s.ceylon", key);
                    InputStream ins = req.getServletContext().getResourceAsStream(path);
                    StringBuilder sb = new StringBuilder();
                    byte[] buf = new byte[256];
                    int read = 0;
                    while ((read = ins.read(buf)) > 0) {
                        sb.append(new String(buf, 0, read, "UTF-8"));
                    }
                    String src = sb.toString();
                    sb.insert(0, "void run_script(){\n");
                    sb.append('}');
                    try {
                        //Run the typechecker
                        TypeChecker typeChecker = new TypeCheckerBuilder()
                                .addSrcDirectory(new ScriptFile(sb.toString()))
                                .getTypeChecker();
                        typeChecker.process();
                        example = compile(typeChecker);
                        example.put("src", src);
                        examples.put(key, example);
                    } catch (RuntimeException ex) {
                        resp.setStatus(500);
                        sb = new StringBuilder();
                        json.encodeList(Collections.singletonList((Object)String.format("Service error: %s", ex.getMessage())), sb);
                        resp.setContentLength(sb.length());
                        resp.getWriter().print(sb.toString());
                    }
                }
            }
        }
        if (example != null) {
            sendResponse(example, resp);
        }
    }

    /** Compiles the posted code and returns the compiled js along with documentation. */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String script = request.getParameter("ceylon");
            ScriptFile src = new ScriptFile(script);
            //Run the typechecker
            TypeChecker typeChecker = new TypeCheckerBuilder()
                    .addSrcDirectory(src)
                    .getTypeChecker();
            typeChecker.process();
            sendResponse(compile(typeChecker), response);
        } catch (RuntimeException ex) {
            response.setStatus(500);
            StringBuilder sb = new StringBuilder();
            json.encodeList(Collections.singletonList((Object)String.format("Service error: %s", ex.getMessage())), sb);
            response.setContentLength(sb.length());
            response.getWriter().print(sb.toString());
        }
    }
}
