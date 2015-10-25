import ceylon.io {
    SocketAddress
}
import ceylon.net.http {
    post,
    get
}
import ceylon.net.http.server {
    newServer,
    Endpoint,
    startsWith,
    Request,
    AsynchronousEndpoint
}
import ceylon.net.http.server.endpoints {
    serveStaticFile,
    redirect
}

String ipVar = "OPENSHIFT_CEYLON_IP";
String portVar = "OPENSHIFT_CEYLON_HTTP_PORT";
String dirVar = "OPENSHIFT_REPO_DIR";

shared void run()
        => newServer {
    Endpoint {
        path = startsWith("/ceylon-ide/translate");
        acceptMethod = { post };
        service => translate;
    },
    Endpoint {
        path = startsWith("/ceylon-ide/assist");
        acceptMethod = { post };
        service => autocomplete;
    },
    Endpoint {
        path = startsWith("/ceylon-ide/hoverdoc");
        acceptMethod = { get };
        service => examples;
    },
    Endpoint {
        path = startsWith("/ceylon-ide/hoverdoc");
        acceptMethod = { post };
        service => hover;
    },
    AsynchronousEndpoint {
        path = startsWith("/ceylon-ide/");
        acceptMethod = { get };
        service = serveStaticFile {
            externalPath 
                    = (process.environmentVariableValue(dirVar) else "/") 
                    + "web-content/";
            fileMapper(Request request)
                    => (let (path=request.path.replace("/ceylon-ide/", ""))
                         if (path.empty) then "index.html" else path);
        };
    },
    AsynchronousEndpoint {
        path = startsWith("");
        acceptMethod = { get, post };
        service = redirect("/ceylon-ide/");
    }
}.start {
    SocketAddress {
        address =
                    process.environmentVariableValue(ipVar) 
               else process.namedArgumentValue("address") 
               else "127.0.0.1";
        port = 
               if (exists arg =
                    process.environmentVariableValue(portVar)
               else process.namedArgumentValue("port"), 
                   exists port = parseInteger(arg)) 
               then port else 8080;
    };
};
