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
    serveStaticFile
}

shared void run() 
        => newServer {
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
        path = startsWith("/ceylon-ide");
        acceptMethod = { get };
        service = serveStaticFile {
            externalPath = "web-content";
            fileMapper(Request request)
                    => request.path.replace("/ceylon-ide", "");
        };
    }
}.start {
    SocketAddress {
        address = "127.0.0.1";
        port = 8080;
    };
};