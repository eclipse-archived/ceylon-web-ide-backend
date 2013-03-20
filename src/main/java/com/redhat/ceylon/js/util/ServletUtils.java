package com.redhat.ceylon.js.util;

import java.io.IOException;

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

    public static void sendResponse(JSONObject obj, HttpServletResponse response) throws IOException {
        sendStringResponse(obj.toJSONString(), "application/json", response);
    }

    public static void sendResponse(JSONArray arr, HttpServletResponse response) throws IOException {
        sendStringResponse(arr.toJSONString(), "application/json", response);
    }

}
