package com.redhat.ceylon.js.repl;

import java.io.IOException;
import java.io.InputStream;
import java.io.StringBufferInputStream;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.redhat.ceylon.compiler.js.JsCompiler;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.TypeCheckerBuilder;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnit;
import com.redhat.ceylon.compiler.typechecker.io.VirtualFile;

/**
 * Servlet implementation class CeylonToJSTranslationServlet
 */
@WebServlet("/translate")
public class CeylonToJSTranslationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CeylonToJSTranslationServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    String script = request.getParameter("ceylon");
	    ScriptFile src = new ScriptFile(script);
        TypeChecker typeChecker = new TypeCheckerBuilder()
                .addSrcDirectory(src)
                .getTypeChecker();
        typeChecker.process();
        final Writer out = response.getWriter();
        JsCompiler compiler = new JsCompiler(typeChecker) {
            @Override
            protected Writer getWriter(PhasedUnit pu) {
                return out;
            }
        }.optimize(true);
        compiler.generate();
        out.flush();
	}

}

class ScriptFile implements VirtualFile {
    private String script;
    public ScriptFile(String script) {
        this.script = script;
    }
    @Override
    public boolean isFolder() {
        return false;
    }
    @Override
    public String getName() {
        return "SCRIPT.ceylon";
    }
    @Override
    public String getPath() {
        return getName();
    }
    @Override
    public InputStream getInputStream() {
        return new StringBufferInputStream(script);
    }
    @Override
    public List<VirtualFile> getChildren() {
        return new ArrayList<VirtualFile>(0);
    }
    @Override
    public int hashCode() {
        return getPath().hashCode();
    }
    @Override
    public boolean equals(Object obj) {
        if (obj instanceof VirtualFile) {
            return ((VirtualFile) obj).getPath().equals(getPath());
        }
        else {
            return super.equals(obj);
        }
    }
}
