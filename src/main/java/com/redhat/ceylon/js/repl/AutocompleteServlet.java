package com.redhat.ceylon.js.repl;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

import com.redhat.ceylon.compiler.js.DocVisitor;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnit;
import com.redhat.ceylon.js.repl.AutocompleteVisitor.AutocompleteUnitValidator;
import com.redhat.ceylon.js.util.CompilerUtils;
import com.redhat.ceylon.js.util.DocUtils;

@WebServlet("/assist")
public class AutocompleteServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /** Receives a block of Ceylon code and a location, and returns a list of the possible completions for the token
     * at said location. The following keys must be present in the request:
     * ceylon - The Ceylon code to analyze
     * module - The code for the module.ceylon file
     * r  - The row where the token to complete is located
     * c  - The column where the token to complete is located
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
            int locRow = Integer.parseInt(req.getParameter("r"));
            int locCol = Integer.parseInt(req.getParameter("c"));
            ScriptFile src = new ScriptFile("ROOT",
                    new ScriptFile("web_ide_script",
                            new ScriptFile("SCRIPT.ceylon", script),
                            new ScriptFile("module.ceylon", module)
                    )
            );
            //Run the typechecker
            TypeChecker typeChecker = CompilerUtils.getTypeChecker(req.getServletContext(), src);
            typeChecker.process();
            //Get the docs
            final DocVisitor doccer = new DocVisitor();
            for (PhasedUnit pu: typeChecker.getPhasedUnits().getPhasedUnits()) {
                pu.getCompilationUnit().visit(doccer);
            }
            final JSONObject jsr = new JSONObject();
            jsr.put("code_docs", doccer.getDocs());
            jsr.put("code_refs", DocUtils.referenceMapToList(doccer.getLocations()));
            //Now get the suggestions for node at the specified location
            //So of course first we have to find said node
            final AutocompleteVisitor assistant = new AutocompleteVisitor(locRow, locCol, typeChecker);
            assistant.findNode(new AutocompleteUnitValidator() {
                @Override
                public boolean processUnit(PhasedUnit pu) {
                    return "SCRIPT.ceylon".equals(pu.getUnitFile().getName());
                }
            });
            jsr.put("opts", assistant.getCompletions());
            final String enc = jsr.toJSONString();
            resp.setContentLength(enc.length());
            resp.getWriter().print(enc);
        } catch (NumberFormatException ex) {
            resp.setStatus(500);
            final JSONArray errs = new JSONArray();
            errs.add("Current location wasn't provided.");
            final String enc = errs.toJSONString();
            resp.setContentLength(enc.length());
            resp.getWriter().print(enc);
        } catch (Exception ex) {
            resp.setStatus(500);
            final JSONArray sb = new JSONArray();
            sb.add(String.format("Service error: %s", ex.getMessage()));
            final String enc = sb.toJSONString();
            resp.setContentLength(enc.length());
            resp.getWriter().print(enc);
        }
        resp.getWriter().flush();
    }

}
