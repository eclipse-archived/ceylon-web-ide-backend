import ceylon.io {
    SocketAddress
}
import ceylon.net.http {
    post,
    get,
    Header
}
import ceylon.net.http.server {
    newServer,
    Endpoint,
    startsWith,
    Request,
    AsynchronousEndpoint,
    Response
}
import ceylon.net.http.server.endpoints {
    serveStaticFile,
    redirect
}

shared void run() {
print("starting server");
print(process.environmentVariableValue("OPENSHIFT_CEYLON_IP"));
print(process.environmentVariableValue("OPENSHIFT_CEYLON_HTTP_PORT"));
print(process.environmentVariableValue("OPENSHIFT_REPO_DIR"));
newServer {
    Endpoint {
        path = startsWith("/ceylon-ide/translate");
        acceptMethod = { post };
        service => CeylonToJSTranslationServlet().doPost;
    },
    Endpoint {
        path = startsWith("/ceylon-ide/assist");
        acceptMethod = { post };
        service => AutocompleteServlet().doPost;
    },
    Endpoint {
        path = startsWith("/ceylon-ide/hoverdoc");
        acceptMethod = { get };
        service => DocServlet().doGet;
    },
    Endpoint {
        path = startsWith("/ceylon-ide/hoverdoc");
        acceptMethod = { post };
        service => DocServlet().doPost;
    },
    AsynchronousEndpoint {
        path = startsWith("/ceylon-ide/");
        acceptMethod = { get };
        service = serveStaticFile {
            externalPath 
                    = (process.environmentVariableValue("OPENSHIFT_REPO_DIR") else "/") 
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
                    process.environmentVariableValue("OPENSHIFT_CEYLON_IP") 
               else process.namedArgumentValue("address") 
               else "127.0.0.1";
        port = if (exists arg =
                    process.environmentVariableValue("OPENSHIFT_CEYLON_HTTP_PORT")
               else process.namedArgumentValue("port"), 
                   exists port = parseInteger(arg)) 
               then port else 8080;
    };
};
}
