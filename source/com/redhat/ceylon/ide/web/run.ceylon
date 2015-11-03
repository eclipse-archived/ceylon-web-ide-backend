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
    contentType,
    contentLength,
    Header
}
import ceylon.net.http.server {
    newServer,
    Endpoint,
    startsWith,
    AsynchronousEndpoint,
    isRoot
}
import ceylon.net.http.server.endpoints {
    serveStaticFile
}
import ceylon.time {
    now
}
import ceylon.file {
    File
}

String ipVar = "OPENSHIFT_CEYLON_IP";
String portVar = "OPENSHIFT_CEYLON_HTTP_PORT";
String dirVar = "OPENSHIFT_REPO_DIR";

shared void run()
        => newServer {
    Endpoint {
        startsWith("/translate");
        acceptMethod = { post };
        service = translate;
    },
    Endpoint {
        startsWith("/assist");
        acceptMethod = { post };
        service = autocomplete;
    },
    Endpoint {
        startsWith("/hoverdoc");
        acceptMethod = { post };
        service = hover;
    },
    Endpoint {
        startsWith("/githubauth");
        acceptMethod = { get };
        service = authenticate;
    },
    Endpoint {
        startsWith("/time");
        acceptMethod = { get, post };
        (request, response) {
            value datetime = now().dateTime().string;
            response.addHeader(contentType("text/plain", utf8));
            response.addHeader(contentLength(datetime.size.string));
            response.writeString(datetime);
        };
    },
    Endpoint {
        startsWith("/index.html").or(isRoot());
        acceptMethod = { get };
        (request, response) {
            response.addHeader(contentType("text/html", utf8));
            assert (exists resource 
                    = `module`.resourceByPath("index.html"));
            value embedded 
                    = request.parameter("embedded") exists;
            value html 
                    = resource.textContent()
                    .replaceFirst("\`\`embedded\`\`", 
                                  embedded.string)
                    .replaceFirst("\`\`clientId\`\`", 
                                  clientId);
            response.writeString(html);
        };
    },
    AsynchronousEndpoint {
        startsWith("/");
        acceptMethod = { get };
        serveStaticFile {
            externalPath 
                    = (env(dirVar) else "") 
                    + "web-content";
            headers(File file) => { 
                Header("Cache-Control", 
                    "max-age=0, must-revalidate") 
            };
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
