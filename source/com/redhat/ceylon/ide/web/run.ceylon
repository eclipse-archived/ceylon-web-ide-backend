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
        path = startsWith("/ceylon-ide/");
        acceptMethod = { get };
        service = serveStaticFile {
            externalPath = "web-content";
            fileMapper(Request request)
                    => let (path=request.path.replace("/ceylon-ide", ""))
                    if (path=="/") then "/index.html" else path;
        };
    },
    Endpoint {
        path = startsWith("");
        acceptMethod = { get, post };
        void service(Request request, Response response) {
            response.responseStatus = 301;
            response.addHeader(Header("Location", "/ceylon-ide/"));
        }
    }
}.start {
    SocketAddress {
        address =
                    process.propertyValue("server.bind.host") 
               else process.namedArgumentValue("address") 
               else "127.0.0.1";
        port = if (exists arg =
                    process.propertyValue("server.bind.port") 
               else process.namedArgumentValue("port"), 
                   exists port = parseInteger(arg)) 
               then port else 8080;
    };
};
