import ceylon.interop.java {
    javaString
}
import ceylon.io.charset {
    utf8
}
import ceylon.json {
    JsonObject=Object,
    JsonArray=Array
}
import ceylon.net.http {
    contentType,
    contentLength
}
import ceylon.net.http.server {
    Response
}

void sendResponse(Response response, String string, 
                  String mimeType = "text/plain") {
    response.addHeader(contentType(mimeType, utf8));
    value bytes = javaString(string).getBytes("UTF-8");
    response.addHeader(contentLength(bytes.size.string));
    response.writeString(string);
}

void sendJsonResponse(Response response, 
                      JsonObject|JsonArray json)
        => sendResponse {
            response = response;
            string = json.string;
            mimeType = "application/json";
        };

