import ceylon.json {
    parse,
    JsonObject=Object
}

import java.lang {
    System {
        ...
    }
}
import java.net {
    URL
}
import java.util.logging {
    Logger
}

import javax.servlet.annotation {
    webServlet
}
import javax.servlet.http {
    Cookie,
    HttpServlet,
    HttpServletRequest,
    HttpServletResponse
}

webServlet { urlPatterns = ["/githubauth"]; }
shared class GitHubAuthServlet() 
        extends HttpServlet() {
    
    value log = Logger.getLogger("GitHubAuthServlet");
    
    shared actual void doGet(
            HttpServletRequest req, 
            HttpServletResponse resp) {
        resp.contentType = "text/html";
        value writer = resp.writer;
        writer.print("<html><body><script>");
        try {
            if (exists tmpcode = req.getParameter("code")) {
                log.info("GitHubAuth: temporary code: " + tmpcode);
                value builder = StringBuilder();
                builder.append("https://github.com/login/oauth/access_token");
                value clientId = 
                        if (exists id = getenv("GITHUB_CLIENTID")) 
                        then id else "ef3727725eeee1d1bae2";
                builder.append("?client_id=").append(clientId);
                value clientSecret =
                        if (exists secret = getenv("GITHUB_CLIENTSECRET")) 
                        then secret else "2bbf6b4cc39dc9015c8de4c83e92cc6bab620151";
                builder.append("&client_secret=").append(clientSecret);
                builder.append("&code=").append(tmpcode);
                builder.append("&state=xyz");
                log.info("GitHubAuth: request token: " + builder.string);
                URL url = URL(builder.string);
                value connection = url.openConnection();
                connection.addRequestProperty("Accept", "application/json");
                connection.useCaches = false;
                connection.allowUserInteraction = false;
                value json = readAll(connection.inputStream);
                log.info("GitHubAuth: response: " + json);
                assert (is JsonObject result = parse(json),
                        is String token = result["access_token"]);
                value cookie = Cookie("githubauth", token.string);
                cookie.path = "/";
                cookie.maxAge = 30 * 24 * 60 * 60;
                resp.addCookie(cookie);
                writer.print("window.opener.location.reload();");
            }
            else {
                log.info("GitHubAuth: no temporary code received");
            }
        }
        catch (ex) {
            log.severe("GitHubAuth: " + ex.message);
        }
        
        writer.print("window.close();");
        writer.print("</script></body></html>");
        writer.flush();
    }
}
