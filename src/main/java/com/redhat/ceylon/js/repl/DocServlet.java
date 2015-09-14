package com.redhat.ceylon.js.repl;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.minidev.json.JSONValue;

import com.redhat.ceylon.model.typechecker.model.Declaration;
import com.redhat.ceylon.js.util.CompilerUtils;
import com.redhat.ceylon.js.util.DocUtils;
import com.redhat.ceylon.js.util.ServletUtils;

@WebServlet("/hoverdoc")
public class DocServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /** Compiles the posted code and returns the compiled js along with documentation. */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try (InputStream is = request.getInputStream()) {
            // Reading GitHub's response
            String json = ServletUtils.readAll(is);
            // Extracting the access token
            @SuppressWarnings("unchecked")
            Map<String, Object> result = (Map<String, Object>)JSONValue.parseKeepingOrder(json);
            final ScriptFile src = CompilerUtils.createScriptSource(result);
            final int row = Integer.parseInt((String)result.get("r"));
            final int col = Integer.parseInt((String)result.get("c"));
            Declaration decl = DocUtils.findDeclaration(
                    CompilerUtils.getTypeChecker(request.getServletContext(), src), row, col);
            final Map<String,Object> docs = decl == null ? new HashMap<String, Object>() : DocUtils.getDocs(decl);
            ServletUtils.sendResponse(docs, response);
        } catch (RuntimeException ex) {
            response.setStatus(500);
            ServletUtils.sendResponse(Collections.singletonList(
                    String.format("Service error: %s", ex.getMessage())), response);
        }
    }

    /** Retrieves the code corresponding to the specified example id, and returns the source(s). */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String key = req.getParameter("key");
        try {
            ServletUtils.sendResponse(getExampleHash(req.getServletContext(), key), resp);
        } catch (RuntimeException ex) {
            resp.setStatus(500);
            List<String> error = new ArrayList<String>(1);
            error.add(String.format("Service error: %s", ex.getMessage()));
            ServletUtils.sendResponse(error, resp);
        }
    }

    private Map<String,Object> getExampleHash(ServletContext cxt, String key) throws IOException {
        HashMap<String, Object> example = new HashMap<String, Object>();
        example.put("files", getFilesHash(cxt, key));
        return example;
    }

    private Map<String,Object> getFilesHash(ServletContext cxt, String key) throws IOException {
        HashMap<String, Object> files = new HashMap<String, Object>();
        String respath = "/examples/" + key;
        if (cxt.getResource(respath + ".ceylon") != null) {
            HashMap<String, Object> file = getFileHash(cxt, respath + ".ceylon");
            files.put((String)file.get("filename"), file);
        } else {
            for (String path : cxt.getResourcePaths(respath)) {
                if (path.endsWith(".ceylon")) {
                    HashMap<String, Object> file = getFileHash(cxt, path);
                    files.put((String)file.get("filename"), file);
                }
            }
        }
        return files;
    }

    // Returns a JSON Hash compatible with the GitHub Gist spec
    private HashMap<String, Object> getFileHash(ServletContext ctx, String path) throws UnsupportedEncodingException, IOException {
        HashMap<String, Object> file = new HashMap<String, Object>();
        
        String name = path;
        int p = name.lastIndexOf('/');
        if (p >= 0) {
            name = name.substring(p + 1);
        }
        file.put("filename", name);
        
        InputStreamReader reader = null;
        try {
            reader = new InputStreamReader(ctx.getResourceAsStream(path), "UTF-8");
            StringBuilder sb = new StringBuilder();
            char[] buf = new char[8192];
            int read = 0;
            int total = 0;
            while ((read = reader.read(buf)) > 0) {
                sb.append(buf, 0, read);
                total += read;
            }
            file.put("content", sb.toString());
            file.put("size", total);
            file.put("type", "text/plain"); // We just assume this
            file.put("language", "Ceylon"); // And this
            return file;
        } finally {
            if (reader != null) { reader.close(); }
        }
    }
}
