import ceylon.io.charset {
    utf8
}
import ceylon.json {
    parse,
    JsonObject=Object
}
import ceylon.language {
    process {
        env=environmentVariableValue
    }
}
import ceylon.net.http {
    contentType,
    Header
}
import ceylon.net.http.client {
    ClientRequest=Request
}
import ceylon.net.http.server {
    Request,
    Response
}
import ceylon.net.uri {
    parseUri=parse,
    Parameter,
    Uri
}

String clientId = 
        env("GITHUB_CLIENTID") 
        else "be3a7db25dc6cb19a5d5"; //for localhost:8080
String clientSecret =
        env("GITHUB_CLIENTSECRET") 
        else "743ebe142cf019034b4f901b9ca5e61fe31a553b"; //for localhost:8080

Uri gitHubAuth 
        = parseUri("https://github.com/login/oauth/access_token");

Header cookie(String token, Integer maxAge) 
        => Header("Set-Cookie", 
            "githubauth=``token``; Path=/; Max-Age=``maxAge``;");

void authenticate(Request request, Response response) {
    if (exists code = request.parameter("code")) {
        value clientRequest 
                = ClientRequest {
            uri = gitHubAuth;
            Parameter("client_id", clientId),
            Parameter("client_secret", clientSecret),
            Parameter("code", code),
            Parameter("state", "xyz")
        };
        clientRequest.setHeader("Accept", "application/json");
        clientRequest.setHeader("Cache-Control", "no-cache");
        
        value json = clientRequest.execute().contents;
        assert (is JsonObject result = parse(json),
                is String token = result["access_token"]);
        response.addHeader(cookie(token, 30 * 24 * 60 * 60));
        response.addHeader(contentType("text/html", utf8));
        response.writeString(
            "<html>
               <body>
                 <script>
                   window.opener.location.reload();
                   window.close();
                 </script>
               </body>
             </html>");
    }
}
