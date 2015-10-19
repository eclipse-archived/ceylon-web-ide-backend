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

void sendStringResponse(String string, String mimeType, 
        HttpServletResponse response) {
    response.contentType = mimeType;
    response.characterEncoding = "UTF-8";
    value bytes = javaString(string).getBytes("UTF-8");
    response.setContentLength(bytes.size);
    response.writer.print(string);
    response.writer.flush();
}

void sendResponse(String text, 
        HttpServletResponse response) 
        => sendStringResponse(text, "text/plain", response);

void sendMapResponse(JsonObject map, 
        HttpServletResponse response) 
        => sendStringResponse(map.string, 
            "application/json", response);

void sendListResponse(JsonArray list, 
        HttpServletResponse response) 
        => sendStringResponse(list.string, 
            "application/json", response);

String readAll(InputStream stream) {
    value reader = BufferedReader(InputStreamReader(stream));
    value builder = StringBuilder();
    while (exists line = reader.readLine()) {
        if (!builder.empty) {
            builder.appendCharacter('\n');
        }        
        builder.append(line);
    }
    return builder.string;
}

