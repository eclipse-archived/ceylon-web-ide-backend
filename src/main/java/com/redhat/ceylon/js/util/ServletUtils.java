package com.redhat.ceylon.js.util;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import net.minidev.json.JSONObject;

public final class ServletUtils {

    private ServletUtils(){}

    public static void sendResponse(JSONObject docs, HttpServletResponse response) throws IOException {
        String resp = docs.toJSONString();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        //Unicode chars cause problems with length so we have to count bytes here
        response.setContentLength(resp.getBytes().length);
        response.getWriter().print(resp);
        response.getWriter().flush();
    }

}
