package com.redhat.ceylon.js.repl;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
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
import com.redhat.ceylon.js.util.SimpleJsonEncoder;

@WebServlet("assist")
public class AutocompleteServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private SimpleJsonEncoder json = new SimpleJsonEncoder();

    /** Receives a block of Ceylon code and a location, and returns a list of the possible completions for the token
     * at said location. The following keys must be present in the request:
     * ceylon - The Ceylon code to analyze
     * module - The code for the module.ceylon file
     * row  - The row where the token to complete is located
     * col  - The column where the token to complete is located
     *
     * The response is a JSON object with the following keys:
     * opts - A list of strings, with the completion options.
     * code_docs - a list of the doc descriptions
     * code_refs - a list of maps, each map contains keys "ref" with the index of the doc in the code_docs list,
     *             "from" and "to" with the location of the token corresponding to that doc.
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        try {
            String script = req.getParameter("ceylon");
            String module = req.getParameter("module");
            ScriptFile src = new ScriptFile("ROOT",
                    new ScriptFile("web_ide_script",
                            new ScriptFile("SCRIPT.ceylon", script),
                            new ScriptFile("module.ceylon", module)
                    )
            );
            //Run the typechecker
            TypeChecker typeChecker = new TypeCheckerBuilder()
                    .addSrcDirectory(src)
                    .getTypeChecker();
            typeChecker.process();
            //Get the docs
            final DocVisitor doccer = new DocVisitor();
            for (PhasedUnit pu: typeChecker.getPhasedUnits().getPhasedUnits()) {
                pu.getCompilationUnit().visit(doccer);
            }
            final Map<String, Object> jsr = new HashMap<String, Object>();
            jsr.put("code_docs", doccer.getDocs());
            jsr.put("code_refs", DocUtils.referenceMapToList(doccer.getLocations()));
            jsr.put("opts", Arrays.asList("method1(Integer,String)", "method2()", "methodref", "blabla"));
            String enc = json.encode(jsr);
            resp.setContentLength(enc.length());
            resp.getWriter().print(enc);
        } catch (Exception ex) {
            resp.setStatus(500);
            StringBuilder sb = new StringBuilder();
            json.encodeList(Collections.singletonList((Object)String.format("Service error: %s", ex.getMessage())), sb);
            resp.setContentLength(sb.length());
            resp.getWriter().print(sb.toString());
        }
        resp.getWriter().flush();
    }

}
