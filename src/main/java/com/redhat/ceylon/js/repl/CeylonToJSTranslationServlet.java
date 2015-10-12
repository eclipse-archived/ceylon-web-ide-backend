package com.redhat.ceylon.js.repl;

import java.io.CharArrayWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.Writer;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.minidev.json.JSONValue;

import com.redhat.ceylon.compiler.js.JsCompiler;
import com.redhat.ceylon.compiler.js.util.JsOutput;
import com.redhat.ceylon.compiler.js.util.Options;
import com.redhat.ceylon.compiler.loader.ModelEncoder;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.js.util.CompilerUtils;
import com.redhat.ceylon.js.util.ServletUtils;
import com.redhat.ceylon.model.typechecker.model.Module;

/**
 * Servlet implementation class CeylonToJSTranslationServlet
 */
@WebServlet("/translate")
public class CeylonToJSTranslationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    private final Options opts = new Options().comment(false).modulify(false).addSrcDir(".");

	/** Compiles Ceylon code and returns the resulting Javascript, along with its hover help docs.
	 * Expects the following keys:
	 *  files - The Ceylon code to compile
	 *  tc - Optional parameter. If specified, the value is ignored and only a typecheck is performed, no compilation.
	 *
	 * Returns a JSON object with the following keys:
	 *  files - The javascript code compiled from the Ceylon code.
	 *  errors - A list of errors, each error is a map with the keys "msg", "code",
	 *          "from" and optionally "to" (for the error location).
	 *
	 * If the tc option was specified, then only the errors key is returned.
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    try (InputStream is = request.getInputStream()) {
            // Reading GitHub's response
            String json = ServletUtils.readAll(is);
            // Extracting the access token
            @SuppressWarnings("unchecked")
            final Map<String, Object> result = (Map<String, Object>)JSONValue.parseKeepingOrder(json);
    	    final ScriptFile src = CompilerUtils.createScriptSource(result);
    	    
            final boolean typecheckOnly = result.get("tc") != null;

    	    TypeChecker typeChecker = CompilerUtils.getTypeChecker(request.getServletContext(), src);
            typeChecker.process();
            
            final CharArrayWriter out = new CharArrayWriter(json.length()*2);
            //Override the inner output class to use the in-memory writer
            class JsMemoryOutput extends JsOutput {
                JsMemoryOutput(Module m) throws IOException { super(m, "UTF-8"); }
                @Override public Writer getWriter() { return out; }
                @Override protected void writeModelFile() throws IOException {}
                @Override protected void writeModelRetriever() throws IOException {
                    ModelEncoder.encodeModel(mmg.getModel(), out);
                }
            }
            out.write("var ex$={};");
            //Run the compiler, if typechecker returns no errors.
            if (typeChecker.getErrors() == 0 && !typecheckOnly) {
                JsCompiler compiler = new JsCompiler(typeChecker, opts) {
                    @Override
                    protected JsOutput newJsOutput(Module m) throws IOException {
                        return new JsMemoryOutput(m);
                    }
                    //Override this to avoid generating artifacts
                    protected int finish() throws IOException {
                        CompilerUtils.writeJSSources(out, result);
                        out.flush();
                        out.close();
                        return 0;
                    }
                }.stopOnErrors(true);
                //Don't rely on result flag, check errors instead
                compiler.generate();
                //Put errors in this list
            }
            
            CollectErrorVisitor cev = new CollectErrorVisitor(typeChecker);
            final Map<String,Object> resp = new HashMap<String, Object>(1);
            if (cev.errors() == 0 && !typecheckOnly) {
                resp.put("code", out.toString());
            }
            if (cev.errors() > 0 || cev.warnings() > 0) {
                //Print out errors
                Map<String, Object> errs = cev.json();
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
}
