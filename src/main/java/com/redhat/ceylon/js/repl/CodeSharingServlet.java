package com.redhat.ceylon.js.repl;

import java.io.IOException;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** This servlet receives code, stores it under a key and returns that key.
 * 
 * @author Enrique Zamudio
 */
@WebServlet("/share")
public class CodeSharingServlet extends HttpServlet {

    private static final int MAX_CODE_SIZE = 65536;
    private static final long serialVersionUID = 1L;
    @Inject
    private CodeStorage store;

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String code = req.getParameter("ceylon");
        String text = "";
        resp.setContentType("text/plain");
        if (code != null) {
            code = code.trim();
            //check it's not ridiculously big to avoid DoS
            if (code.length() > MAX_CODE_SIZE) {
                resp.setStatus(HttpServletResponse.SC_REQUEST_ENTITY_TOO_LARGE);
                text = "Code snippet is too long.";
            } else if (code.length() < 20) {
                //or ridiculously short for that matter
                resp.setStatus(HttpServletResponse.SC_NO_CONTENT);
                text = "Code snippet is too short.";
            } else {
                //store the code, return its key
                text = store.storeCode(code, req.getRemoteAddr());
            }
        } else {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            text = "No code received.";
        }
        resp.setContentLength(text.length());
        resp.getWriter().write(text);
        resp.getWriter().flush();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String key = req.getParameter("key");
        String code = null;
        if (key != null) {
            code = store.retrieveCode(key, req.getRemoteAddr());
        }
        if (code == null) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            code = "No code snippet was found under the specified key.";
        }
        resp.setContentType("text/plain");
        resp.setContentLength(code.length());
        resp.getWriter().write(code);
        resp.getWriter().flush();
    }

}
