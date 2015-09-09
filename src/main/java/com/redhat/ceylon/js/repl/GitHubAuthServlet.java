package com.redhat.ceylon.js.repl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.minidev.json.JSONObject;
import net.minidev.json.JSONValue;

@WebServlet("/githubauth")
public class GitHubAuthServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    
    private final static Logger log = Logger.getLogger(GitHubAuthServlet.class.getName()); 

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        out.print("<html><body><script>");
        try {
            // We get a temporary code
            String tmpcode = req.getParameter("code");
            if (tmpcode != null) {
                log.info("GitHubAuth: temporary code: " + tmpcode);
                // Exchange it for a permanent access token by:
                // First creating a request URL
                StringBuilder buf = new StringBuilder();
                buf.append("https://github.com/login/oauth/access_token");
                String clientId = System.getenv("GITHUB_CLIENTID");
                if (clientId == null) {
                    clientId = "ef3727725eeee1d1bae2"; // Test ID
                }
                buf.append("?client_id=");
                buf.append(clientId);
                String clientSecret = System.getenv("GITHUB_CLIENTSECRET");
                if (clientSecret == null) {
                    clientSecret = "2bbf6b4cc39dc9015c8de4c83e92cc6bab620151"; // Test secret
                }
                buf.append("&client_secret=");
                buf.append(clientSecret);
                buf.append("&code=");
                buf.append(tmpcode);
                buf.append("&state=xyz");
                log.info("GitHubAuth: request token: " + buf.toString());
                URL url = new URL(buf.toString());
                // Then sending the request to GitHub
                HttpURLConnection con = (HttpURLConnection)url.openConnection();
                con.addRequestProperty("Accept", "application/json");
                con.setUseCaches(false);
                con.setAllowUserInteraction(false);
                try (InputStream is = con.getInputStream()) {
                    // Reading GitHub's response
                    String json = readAll(is);
                    log.info("GitHubAuth: response: " + json);
                    // Extracting the access token
                    JSONObject result = (JSONObject)JSONValue.parse(json);
                    String token = (String)result.get("access_token");
                    // And finally storing the token in a cookie
                    Cookie c = new Cookie("githubauth", token);
                    c.setPath("/");
                    c.setMaxAge(30 * 24 * 60 * 60); // 30 days
                    resp.addCookie(c);
                    // Write a script to the out put that tells the original page to reload itself
                    out.print("window.opener.location.reload();");
                }
            } else {
                log.info("GitHubAuth: no temprorary code received");
            }
        } catch (Exception ex) {
            // Ignore any errors
        }
        // Write a script to the out put that tells the window to close itself
        out.print("window.close();");
        out.print("</script></body></html>");
        out.flush();
    }
    
    private String readAll(InputStream is) throws IOException {
        StringBuilder buf = new StringBuilder();
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String s;
        while ((s = br.readLine()) != null) {
            if (buf.length() > 0) {
                buf.append('\n');
            }
           buf.append(s);
        }
        return buf.toString();
    }

}
