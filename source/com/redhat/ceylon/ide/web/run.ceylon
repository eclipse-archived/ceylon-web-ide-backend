import ceylon.io {
    SocketAddress
}
import ceylon.io.charset {
    utf8
}
import ceylon.language {
    process {
        env=environmentVariableValue,
        arg=namedArgumentValue
    }
}
import ceylon.net.http {
    post,
    get,
    contentType
}
import ceylon.net.http.server {
    newServer,
    Endpoint,
    startsWith,
    Request,
    AsynchronousEndpoint,
    Response,
    Matcher
}
import ceylon.net.http.server.endpoints {
    serveStaticFile
}

String ipVar = "OPENSHIFT_CEYLON_IP";
String portVar = "OPENSHIFT_CEYLON_HTTP_PORT";
String dirVar = "OPENSHIFT_REPO_DIR";

shared void run()
        => newServer {
    Endpoint {
        path = startsWith("/translate");
        acceptMethod = { post };
        service => translate;
    },
    Endpoint {
        path = startsWith("/assist");
        acceptMethod = { post };
        service => autocomplete;
    },
    Endpoint {
        path = startsWith("/hoverdoc");
        acceptMethod = { get };
        service => examples;
    },
    Endpoint {
        path = startsWith("/hoverdoc");
        acceptMethod = { post };
        service => hover;
    },
    Endpoint {
        path = startsWith("/githubauth");
        acceptMethod = { get };
        service => authenticate;
    },
    Endpoint {
        object path extends Matcher() {
            matches(String path) 
                    => path in ["", "/", 
                                "/index.html", 
                                "/embedded.html"];
            relativePath(String requestPath) => requestPath;
        }
        acceptMethod = { get };
        void service(Request request, Response response) {
            response.addHeader(contentType("text/html", utf8));
            assert (exists resource 
                    = `module`.resourceByPath("index.html"));
            value embedded 
                    = request.path.endsWith("embedded.html");
            value html 
                    = resource.textContent()
                    .replaceFirst("\`\`embedded\`\`", 
                                  embedded.string)
                    .replaceFirst("\`\`clientId\`\`", 
                                  clientId);
            response.writeString(html);
        }
    },
    AsynchronousEndpoint {
        path = startsWith("/");
        acceptMethod = { get };
        service = serveStaticFile {
            externalPath 
                    = (env(dirVar) else "") 
                    + "web-content";
        };
    }
}.start {
    SocketAddress {
        address = env(ipVar) else arg("address") 
                else "127.0.0.1";
        port = if (exists arg = env(portVar) else arg("port"), 
                   exists port = parseInteger(arg)) 
                then port 
                else 8080;
    };
};
