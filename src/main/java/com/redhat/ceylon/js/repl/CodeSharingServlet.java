package com.redhat.ceylon.js.repl;

import java.io.IOException;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.redhat.ceylon.js.util.ServletUtils;

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
                text = store.storeCode(code, getRemoteIP(req));
            }
        } else {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            text = "No code received.";
        }
        ServletUtils.sendStringResponse(text, "text/plain", resp);
    }
    
    // Try to retrieve to visitor's IP address
    private String getRemoteIP(HttpServletRequest req) {
        // We're running in a shared environment so
        // probably there's a proxy in between
        String ip = req.getHeader("x-forwarded-for");
        if (ip == null) {
            // Otherwise we just use whatever we can get
            ip = req.getRemoteAddr();
        }
        return ip;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String key = req.getParameter("key");
        String code = null;
        if (store == null) {
            resp.setStatus(HttpServletResponse.SC_EXPECTATION_FAILED);
            code = "Code sharing is disabled for the moment.";
        } else if (key != null) {
            code = store.retrieveCode(key, req.getRemoteAddr());
        }
        if (code == null) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            code = "No code snippet was found under the specified key.";
        }
        ServletUtils.sendStringResponse(code, "text/plain", resp);
    }

}
