import ceylon.interop.java {
    javaString
}
import ceylon.json {
    JsonObject=Object,
    JsonArray=Array
}

import java.io {
    InputStream,
    BufferedReader,
    InputStreamReader
}

import javax.servlet.http {
    HttpServletResponse
}

void sendStringResponse(HttpServletResponse response, 
        String string, String mimeType) {
    response.contentType = mimeType;
    response.characterEncoding = "UTF-8";
    value bytes = javaString(string).getBytes("UTF-8");
    response.setContentLength(bytes.size);
    response.writer.print(string);
    response.writer.flush();
}

void sendResponse(HttpServletResponse response, String text) 
        => sendStringResponse {
            response = response;
            string = text;
            mimeType = "text/plain";
        };

void sendMapResponse(HttpServletResponse response, JsonObject map) 
        => sendStringResponse {
            response = response;
            string = map.string;
            mimeType = "application/json";
        };

void sendListResponse(HttpServletResponse response, JsonArray list) 
        => sendStringResponse {
            response = response;
            string = list.string;
            mimeType = "application/json";
        };

String readAll(InputStream stream) {
    try {
        value reader = 
                BufferedReader(InputStreamReader(stream, "UTF-8"));
        value builder = StringBuilder();
        while (exists line = reader.readLine()) {
            if (!builder.empty) {
                builder.appendCharacter('\n');
            }        
            builder.append(line);
        }
        return builder.string;
    }
    finally {
        stream.close();
    }
}

