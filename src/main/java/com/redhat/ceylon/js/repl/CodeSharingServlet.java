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
        if (code != null && code.length() > 0) {
            //check it's not ridiculously big to avoid DoS
            if (code.length() > MAX_CODE_SIZE) {
                resp.setStatus(HttpServletResponse.SC_REQUEST_ENTITY_TOO_LARGE);
                resp.flushBuffer();
            }
            String key = store.storeCode(code);
            resp.setContentType("text/plain");
            resp.setContentLength(key.length());
            resp.getWriter().write(key);
            resp.getWriter().flush();
        } else {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.flushBuffer();
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String key = req.getParameter("key");
        if (key != null) {
            String code = store.retrieveCode(key);
            if (code != null) {
                resp.setContentType("text/plain");
                resp.setContentLength(code.length());
                resp.getWriter().write(code);
                resp.getWriter().flush();
                return;
            }
        }
        resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        resp.flushBuffer();
    }

}
