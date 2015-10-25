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
import ceylon.net.http.server {
    Request,
    Response
}

import java.net {
    URL
}

String clientId = 
        env("GITHUB_CLIENTID") 
        else "be3a7db25dc6cb19a5d5"; //for localhost:8080
String clientSecret =
        env("GITHUB_CLIENTSECRET") 
        else "743ebe142cf019034b4f901b9ca5e61fe31a553b"; //for localhost:8080

void authenticate(Request request, Response response) {
    if (exists code = request.parameter("code")) {
        //print("GitHubAuth: temporary code: " + tmpcode);
        value requestUrl = 
                "https://github.com/login/oauth/access_token
                 ?client_id=``clientId``
                 &client_secret=``clientSecret``
                 &code=``code``
                 &state=xyz";
        //print("GitHubAuth: request token: " + requestUrl);
        URL url = URL(requestUrl.replace("\n", ""));
        //TODO: use ceylon.net client API!
        value connection = url.openConnection();
        connection.addRequestProperty("Accept", "application/json");
        connection.useCaches = false;
        connection.allowUserInteraction = false;
        value json = readAll(connection.inputStream);
        //print("GitHubAuth: response: " + json);
        assert (is JsonObject result = parse(json),
                is String token = result["access_token"]);
        response.addHeader(Header("Set-Cookie", 
            "githubauth=``token``; Path=/; Max-Age=``30 * 24 * 60 * 60``;"));
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
    else {
        //print("GitHubAuth: no temporary code received");
    }
}
