package com.redhat.ceylon.js.repl;

import java.io.IOException;
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

@WebServlet("/hoverdoc")
public class DocServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private final SimpleJsonEncoder json = new SimpleJsonEncoder();

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
            DocVisitor dv = new DocVisitor();
            for (PhasedUnit pu: typeChecker.getPhasedUnits().getPhasedUnits()) {
                pu.getCompilationUnit().visit(dv);
            }
            Map<String, Object> docs = new HashMap<String, Object>(2);
            docs.put("docs", dv.getDocs());
            docs.put("refs", dv.getLocations());
            String resp = json.encode(docs);
            response.setContentLength(resp.length());
            response.getWriter().print(resp);
        } catch (Exception ex) {
            response.setStatus(500);
            StringBuilder sb = new StringBuilder();
            json.encodeList(Collections.singletonList((Object)String.format("Service error: %s", ex.getMessage())), sb);
            response.setContentLength(sb.length());
            response.getWriter().print(sb.toString());
        }
    }
}
