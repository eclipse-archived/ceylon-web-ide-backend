package com.redhat.ceylon.js.repl;

import java.io.CharArrayWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.redhat.ceylon.compiler.Options;
import com.redhat.ceylon.compiler.js.JsCompiler;
import com.redhat.ceylon.compiler.js.JsOutput;
import com.redhat.ceylon.compiler.loader.ModelEncoder;
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
    private final Options opts = new Options().indent(false).comment(false).modulify(false).addSrcDir(".");

	/** Compiles Ceylon code and returns the resulting Javascript, along with its hover help docs.
	 * Expects the following keys:
	 * ceylon - The Ceylon code to compile
	 * tc - Optional parameter. If specified, the value is ignored and only a typecheck is performed, no compilation.
	 *
	 * Returns a JSON object with the following keys:
	 * code - The javascript code compiled from the Ceylon code.
	 * errors - A list of errors, each error is a map with the keys "msg", "code",
	 *          "from" and optionally "to" (for the error location).
	 *
	 * If the tc option was specified, then only the errors key is returned.
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    try {
            String modName = request.getParameter("modname");
            String modScript = request.getParameter("module");
    	    String[] scripts = request.getParameterValues("ceylon");
    	    final ScriptFile src = CompilerUtils.createScriptSource(modName, modScript, scripts);
    	    final boolean typecheckOnly = request.getParameter("tc") != null;

    	    TypeChecker typeChecker = CompilerUtils.getTypeChecker(request.getServletContext(), src);
            typeChecker.process();
            
            final CharArrayWriter out = new CharArrayWriter(sumSizes(scripts)*2);
            //Override the inner output class to use the in-memory writer
            class JsMemoryOutput extends JsOutput {
                JsMemoryOutput(Module m) throws IOException { super(m, "UTF-8"); }
                @Override protected Writer getWriter() { return out; }
                @Override protected void writeModelFile() throws IOException {}
                @Override protected void writeModelRetriever() throws IOException {
                    ModelEncoder.encodeModel(mmg.getModel(), out);
                }
            }
            out.write("var ex$={};");
            //Run the compiler, if typechecker returns no errors.
            Collection<Message> messages = null;
            if (typeChecker.getErrors() == 0 && !typecheckOnly) {
                JsCompiler compiler = new JsCompiler(typeChecker, opts) {
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
            List<Map<String,Object>> errs = new ArrayList<Map<String,Object>>(messages.size());
            for (Message err : messages) {
                if (!(err instanceof UsageWarning)) {
                    Map<String, Object> encoded = encodeError(err);
                    if (!errs.contains(encoded)) {
                        errs.add(encodeError(err));
                    }
                }
            }
            
            final Map<String,Object> resp = new HashMap<String, Object>(1);
            if (errs.isEmpty() && !typecheckOnly) {
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
            ServletUtils.sendResponse(Collections.singletonList(
                    String.format("Service error: %s", msg)), response);
	    }
	}
	
	private int sumSizes(String[] strings) {
	    int result = 0;
	    for (String s : strings) {
	        result += s.length();
	    }
	    return result;
	}

    private Map<String,Object> encodeError(Message err) {
        final Map<String,Object> errmsg = new HashMap<String, Object>(4);
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
