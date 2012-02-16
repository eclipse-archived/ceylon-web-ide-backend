package com.redhat.ceylon.js.repl;

import java.io.CharArrayWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
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
import com.redhat.ceylon.compiler.typechecker.parser.RecognitionError;
import com.redhat.ceylon.compiler.typechecker.tree.AnalysisMessage;
import com.redhat.ceylon.compiler.typechecker.tree.Message;

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
	    try {
    	    String script = request.getParameter("ceylon");
    	    ScriptFile src = new ScriptFile(script);
            TypeChecker typeChecker = new TypeCheckerBuilder()
                    .addSrcDirectory(src)
                    .getTypeChecker();
            typeChecker.process();
            final CharArrayWriter out = new CharArrayWriter();
            JsCompiler compiler = new JsCompiler(typeChecker) {
                @Override
                protected Writer getWriter(PhasedUnit pu) {
                    return out;
                }
            }.optimize(true);
            compiler.generate();
            out.flush();
            out.close();
            
            List<? extends Message> errors = compiler.listErrors();
            if (errors.size() == 0) {
                PrintWriter writer = response.getWriter();
                char[] buf = out.toCharArray();
                writer.write(buf, 0, buf.length);
                writer.flush();
            } else {
                response.setStatus(500);
                PrintWriter writer = response.getWriter();
                boolean first = true;
                writer.print("[");
                for (Message err : errors) {
                    if (!first) {
                        writer.print(",");
                    }
                    writeError(writer, err);
                    first = false;
                }
                writer.print("]");
            }
	    } catch (Exception ex) {
            response.setStatus(500);
            PrintWriter writer = response.getWriter();
            writer.print("[");
            writer.print("\"Service error: ");
            writer.print(ex.getMessage().replace('"', '\''));
            writer.print("\"");
            writer.print("]");
	    }
	}

    private void writeError(PrintWriter writer, Message err) {
        writer.print("{\"msg\":\"");
        writer.print(err.getMessage().replace('"', '\''));
        writer.print("\",\"code\":");
        writer.print(err.getCode());
        writer.print(",");
        if (err instanceof AnalysisMessage) {
            AnalysisMessage msg = (AnalysisMessage)err;
            String loc = msg.getTreeNode().getLocation();
            String[] locs = loc.split("-");
            if (locs.length == 2) {
                writer.print("\"start\":");
                writeErrPos(writer, locs[0]);
                writer.print(",\"end\":");
                writeErrPos(writer, locs[1]);
            }
        } else if (err instanceof RecognitionError) {
            RecognitionError rec = (RecognitionError)err;
            writer.print("\"start\":{\"line\":");
            writer.print(rec.getLine());
            writer.print(",\"pos\":");
            writer.print(rec.getCharacterInLine());
            writer.print("}");
        }
        writer.print("}");
    }

    private void writeErrPos(PrintWriter writer, String loc) {
        String[] pos = loc.split(":");
        if (pos.length == 2) {
            writer.print("{\"line\":");
            writer.print(pos[0]);
            writer.print(",\"pos\":");
            writer.print(pos[1]);
            writer.print("}");
        }
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
