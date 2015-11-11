import ceylon.io {
    SocketAddress
}
import ceylon.buffer.charset {
    utf8
}
import ceylon.language {
    process {
        env=environmentVariableValue,
        arg=namedArgumentValue,
        prop=propertyValue
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
    isRoot,
    Request
}
import ceylon.net.http.server.endpoints {
    serveStaticFile,
    RepositoryEndpoint
}
import ceylon.time {
    now
}
import ceylon.file {
    File,
    parsePath
}

String ipVar = "OPENSHIFT_CEYLON_IP";
String portVar = "OPENSHIFT_CEYLON_HTTP_PORT";
String dirVar = "OPENSHIFT_REPO_DIR";

shared void run() {
    value repoDir = env(dirVar) else "";
    value systemRepoDir = prop("ceylon.system.repo") else "";
    value userCacheDir = (prop("user.home") else "")
            + "/.ceylon/cache";
    value cacheDir = process.propertyValue("ceylon.cache.repo")
            else parsePath(userCacheDir).absolutePath.string;
        
    function ccHeaders(File file) => {
        Header("Cache-Control",
            "max-age=0, must-revalidate")
    };
    
    newServer {
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
            startsWith("/modules/");
            acceptMethod = { get };
            serveStaticFile {
                externalPath = "";
                headers = ccHeaders;
                fileMapper(Request request)
                        => let (path = request.path[8...])
                            if (path.contains("/ceylon.language-"))
                                then systemRepoDir + path
                                else if (fileExists(repoDir, path))
                                    then repoDir + "modules" + path
                                    else cacheDir + path;
            };
        },
        AsynchronousEndpoint {
            startsWith("/");
            acceptMethod = { get };
            serveStaticFile {
                externalPath = repoDir;
                headers = ccHeaders;
                fileMapper(Request request)
                        => "web-content" + request.path;
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
}

Boolean fileExists(String repoDir, String path) {
    String abspath = repoDir + "modules" + path;
    print(abspath);
    if (is File r=parsePath(abspath).resource) {
        return r.readable;
    } else {
        return false;
    }
}
