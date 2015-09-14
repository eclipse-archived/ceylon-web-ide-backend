package com.redhat.ceylon.js.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

public final class ServletUtils {

    private ServletUtils(){}

    /** Send the string, encoded to UTF-8, as the response, using the specified MIME type. */
    public static void sendStringResponse(String s, String mimeType, HttpServletResponse response) throws IOException {
        response.setContentType(mimeType);
        response.setCharacterEncoding("UTF-8");
        //Unicode chars cause problems with length so we have to count bytes here
        response.setContentLength(s.getBytes("UTF-8").length);
        response.getWriter().print(s);
        response.getWriter().flush();
    }

    public static void sendResponse(final Map<String,Object> obj, final HttpServletResponse response) throws IOException {
        sendStringResponse(JSONObject.toJSONString(obj), "application/json", response);
    }

    public static void sendResponse(final List<String> arr, HttpServletResponse response) throws IOException {
        sendStringResponse(JSONArray.toJSONString(arr), "application/json", response);
    }

    public static String readAll(InputStream is) throws IOException {
        StringBuilder buf = new StringBuilder();
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String s;
        while ((s = br.readLine()) != null) {
            if (buf.length() > 0) {
                buf.append('\n');
            }
           buf.append(s);
        }
        return buf.toString();
    }

}
