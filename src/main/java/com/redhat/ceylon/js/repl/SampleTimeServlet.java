package com.redhat.ceylon.js.repl;

import java.io.IOException;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * THis is just a simple servlet to be used in the code samples
 * 
 * @author Tako Schotanus
 */
@WebServlet("/time")
public class SampleTimeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        writeOutput(resp);
    }
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        writeOutput(resp);
    }
    
    private void writeOutput(HttpServletResponse resp)
            throws ServletException, IOException {
        String output = (new Date()).toString();
        resp.setContentType("text/plain");
        resp.setContentLength(output.length());
        resp.getWriter().write(output);
        resp.getWriter().flush();
    }

}
