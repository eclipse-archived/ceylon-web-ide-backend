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
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnit;
import com.redhat.ceylon.js.util.CompilerUtils;
import com.redhat.ceylon.js.util.ServletUtils;

@WebServlet("/assist")
public class AutocompleteServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /** Receives a block of Ceylon code and a location, and returns a list of the possible completions for the token
     * at said location. The following keys must be present in the request:
     * ceylon - The Ceylon code to analyze
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
            final int locRow = Integer.parseInt(req.getParameter("r"));
            final int locCol = Integer.parseInt(req.getParameter("c"));
            final ScriptFile src = CompilerUtils.createScriptSource(script);
            //Run the typechecker
            TypeChecker typeChecker = CompilerUtils.getTypeChecker(req.getServletContext(), src);
            typeChecker.process();
            //Get the docs
            final DocVisitor doccer = new DocVisitor();
            for (PhasedUnit pu: typeChecker.getPhasedUnits().getPhasedUnits()) {
                pu.getCompilationUnit().visit(doccer);
            }
            final Map<String,Object> jsr = new HashMap<String, Object>(1);
            //Now get the suggestions for node at the specified location
            //So of course first we have to find said node
            final Autocompleter assistant = new Autocompleter(locRow, locCol, typeChecker);
            assistant.findNode(Autocompleter.SCRIPT_VAL);
            jsr.put("opts", assistant.getCompletions());
            ServletUtils.sendResponse(jsr, resp);
        } catch (NumberFormatException ex) {
            resp.setStatus(500);
            ServletUtils.sendResponse(Collections.singletonList("Current location wasn't provided."), resp);
        } catch (Exception ex) {
            resp.setStatus(500);
            ServletUtils.sendResponse(Collections.singletonList(
                    String.format("Service error: %s", ex.getMessage())), resp);
        }
    }

}
