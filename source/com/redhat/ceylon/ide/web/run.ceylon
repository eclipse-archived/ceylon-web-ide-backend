import ceylon.io {
    SocketAddress
}
import ceylon.net.http.server {
    newServer,
    Endpoint,
    startsWith,
    Response,
    Request
}
import ceylon.net.http.server.endpoints {
    serveStaticFile
}
import ceylon.net.http {
    post,
    get
}

shared void run() {
    value server = newServer {
        Endpoint {
            path = startsWith("/translate");
            //acceptMethod = { post };
            service => CeylonToJSTranslationServlet().doPost;
        },
        Endpoint {
            path = startsWith("/assist");
            //acceptMethod = { post };
            service => AutocompleteServlet().doPost;
        },
        Endpoint {
            path = startsWith("/hoverdoc");
            //acceptMethod = { get };
            service => DocServlet().doGet;
        },
        Endpoint {
            path = startsWith("/hoverdoc");
            //acceptMethod = { post };
            service => DocServlet().doPost;
        },
        Endpoint {
            path = startsWith("/ceylon-ide");
            //acceptMethod = { get };
            service(Request request, Response response) 
                    => serveStaticFile("web-content", 
                            (Request request) 
                                    => request.path.replace("/ceylon-ide", ""))
                            (request, response, noop);
        }
    };
    
    //start the server on port 8080
    server.start(SocketAddress {
        address = "127.0.0.1";
        port = 8080;
    });
}