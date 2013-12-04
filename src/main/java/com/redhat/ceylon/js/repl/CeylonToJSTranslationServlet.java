package com.redhat.ceylon.js.repl;

import java.io.CharArrayWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.Collection;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

import com.redhat.ceylon.compiler.Options;
import com.redhat.ceylon.compiler.js.JsCompiler;
import com.redhat.ceylon.compiler.js.JsOutput;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.analyzer.UsageWarning;
import com.redhat.ceylon.compiler.typechecker.model.Module;
import com.redhat.ceylon.compiler.typechecker.parser.RecognitionError;
import com.redhat.ceylon.compiler.typechecker.tree.AnalysisMessage;
import com.redhat.ceylon.compiler.typechecker.tree.Message;
import com.redhat.ceylon.js.util.CompilerUtils;
import com.redhat.ceylon.js.util.DocUtils;
import com.redhat.ceylon.js.util.ServletUtils;

/**
 * Servlet implementation class CeylonToJSTranslationServlet
 */
@WebServlet("/translate")
public class CeylonToJSTranslationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private final Options opts = new Options().indent(false).comment(false).modulify(false).addSrc(".");

	/** Compiles Ceylon code and returns the resulting Javascript, along with its hover help docs.
	 * Expects the following keys:
	 * ceylon - The Ceylon code to compile
	 * Returns a JSON object with the following keys:
	 * code_docs - a list of the doc descriptions
	 * code_refs - a list of maps, each map contains keys "ref" with the index of the doc in the code_docs list,
	 *             "from" and "to" with the location of the token corresponding to that doc.
	 * code - The javascript code compiled from the Ceylon code.
	 * errors - A list of errors, each error is a map with the keys "msg", "code",
	 *          "from" and optionally "to" (for the error location).
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    try {
    	    String script = request.getParameter("ceylon");
    	    final ScriptFile src = CompilerUtils.createScriptSource(script);

    	    TypeChecker typeChecker = CompilerUtils.getTypeChecker(request.getServletContext(), src);
            typeChecker.process();
            
            final CharArrayWriter out = new CharArrayWriter(script.length()*2);
            out.write("var exports={};");
            //Run the compiler, if typechecker returns no errors.
            Collection<Message> messages = null;
            if (typeChecker.getErrors() == 0) {
                JsCompiler compiler = new JsCompiler(typeChecker, opts) {
                    //Override the inner output class to use the in-memory writer
                    class JsMemoryOutput extends JsOutput {
                        JsMemoryOutput(Module m) throws IOException { super(m, "UTF-8"); }
                        @Override protected Writer getWriter() { return out; }
                    }
                    @Override
                    protected JsOutput newJsOutput(Module m) throws IOException {
                        return new JsMemoryOutput(m);
                    }
                    //Override this to avoid generating artifacts
                    protected void finish() throws IOException {
                        out.flush();
                        out.close();
                    }
                }.stopOnErrors(true);
                //Don't rely on result flag, check errors instead
                compiler.generate();
                //Put errors in this list
                messages = compiler.listErrors();
            } else {
                messages = new CollectErrorVisitor(typeChecker).listErrors();
            }
            
            // Collect any errors
            JSONArray errs = new JSONArray();
            for (Message err : messages) {
                if (!(err instanceof UsageWarning)) {
                    Map<String, Object> encoded = encodeError(err);
                    if (!errs.contains(encoded)) {
                        errs.add(encodeError(err));
                    }
                }
            }
            
            final JSONObject resp = new JSONObject();
            if (errs.isEmpty()) {
                resp.put("code", out.toString());
            } else {
                //Print out errors
                resp.put("errors", errs);
            }
            ServletUtils.sendResponse(resp, response);
	    } catch (Exception ex) {
            response.setStatus(500);
            String msg = ex.getMessage();
            if (msg == null) {
                msg = ex.getClass().getName();
            }
            ex.printStackTrace(System.out);
            JSONArray errs = new JSONArray();
            errs.add(String.format("Service error: %s", msg));
            ServletUtils.sendResponse(errs, response);
	    }
	}

    private JSONObject encodeError(Message err) {
        JSONObject errmsg = new JSONObject();
        errmsg.put("msg", err.getMessage());
        errmsg.put("code", err.getCode());
        if (err instanceof AnalysisMessage) {
            AnalysisMessage msg = (AnalysisMessage)err;
            errmsg.putAll(DocUtils.locationToMap(msg.getTreeNode().getLocation(), true));
        } else if (err instanceof RecognitionError) {
            RecognitionError rec = (RecognitionError)err;
            String pos = String.format("%d:%d", rec.getLine(), rec.getCharacterInLine());
            errmsg.putAll(DocUtils.locationToMap(pos, true));
        }
        return errmsg;
    }

}
