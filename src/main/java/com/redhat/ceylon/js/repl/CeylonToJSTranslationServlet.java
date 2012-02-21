package com.redhat.ceylon.js.repl;

import java.io.ByteArrayInputStream;
import java.io.CharArrayWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
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
    	    //Run the typechecker
            TypeChecker typeChecker = new TypeCheckerBuilder()
                    .addSrcDirectory(src)
                    .getTypeChecker();
            typeChecker.process();
            List<Message> errors = typeChecker.getMessages();
            if (errors.isEmpty()) {
                //Run the compiler, if typechecker returns no errors.
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
                errors.addAll(compiler.listErrors());
                if (errors.size() == 0) {
                    PrintWriter writer = response.getWriter();
                    char[] buf = out.toCharArray();
                    writer.write(buf, 0, buf.length);
                    writer.flush();
                }
            }
            if (!errors.isEmpty()) {
                //Print out errors
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
            writer.print("[\"Service error: ");
            writer.print(ex.getMessage().replace('"', '\''));
            writer.print("\"]");
	    }
	}

    private void writeError(PrintWriter writer, Message err) {
        writer.print("{\"msg\":\"");
        writer.print(err.getMessage().replaceAll("\"", "\\\"").replaceAll("'", "\\'"));
        writer.print("\",\"code\":");
        writer.print(err.getCode());
        System.out.println("CODIGO " + err.getCode());
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
            String pos = String.format("%d:%d", rec.getLine(), rec.getCharacterInLine());
            writer.print("\"start\":");
            writeErrPos(writer, pos);
            writer.print(",\"end\":");
            writeErrPos(writer, pos);
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
        try {
            return new ByteArrayInputStream(script.getBytes("UTF-8"));
        } catch (UnsupportedEncodingException e) {
            return new ByteArrayInputStream(script.getBytes());
        }
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
