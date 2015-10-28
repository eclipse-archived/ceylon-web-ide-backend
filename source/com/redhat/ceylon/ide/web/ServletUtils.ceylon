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

void sendStringResponse(Response response, 
        String string, String mimeType) {
    response.addHeader(contentType(mimeType, utf8));
    value bytes = javaString(string).getBytes("UTF-8");
    response.addHeader(contentLength(bytes.size.string));
    response.writeString(string);
}

void sendResponse(Response response, String text) 
        => sendStringResponse {
            response = response;
            string = text;
            mimeType = "text/plain";
        };

void sendMapResponse(Response response, JsonObject map) 
        => sendStringResponse {
            response = response;
            string = map.string;
            mimeType = "application/json";
        };

void sendListResponse(Response response, JsonArray list) 
        => sendStringResponse {
            response = response;
            string = list.string;
            mimeType = "application/json";
        };

