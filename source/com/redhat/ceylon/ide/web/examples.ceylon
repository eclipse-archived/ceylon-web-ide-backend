import ceylon.net.http.server {
    Request,
    Response
}
import ceylon.json {
    JsonObject=Object,
    JsonArray=Array
}

void examples(Request request, Response response) {
    try {
        assert (exists key = request.parameter("key"));
        sendJsonResponse(response, 
            JsonObject {
                "files" -> files(key)
            });
    }
    catch (ex) {
        response.responseStatus = 500;
        sendJsonResponse(response, 
            JsonArray {
                "Service error:``ex.message``"
            });
    }
}

JsonObject files(String key) {
    value files = JsonObject();
    String respath = "examples/" + key;
    value sourcePath = respath + ".ceylon";
    if (`module`.resourceByPath(sourcePath) exists) {
        files.put(*file {
            path = respath + ".ceylon";
        });
    }
    else {
        //value paths = 
        //        `module`.getResourcePaths(respath);
        //for (path in CeylonIterable(paths)) {
        //    if (path.endsWith(".ceylon")) {
        //        files.put(*file(path));
        //    }
        //}
    }
    return files;
}

[String, JsonObject] file(String path) {
    value filename = 
            if (exists loc = path.lastOccurrence('/')) 
    then path[loc + 1...] else path;
    assert (exists file = `module`.resourceByPath(path));
    value content = file.textContent("UTF-8");
    return [
    filename, 
    JsonObject {
        "filename" -> filename,
        "content" -> content,
        "size" -> content.size,
        "type" -> "text/plain",
        "language" -> "Ceylon"
    }
    ];
}
