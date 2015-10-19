import java.util {
    Date
}

import javax.servlet.http {
    HttpServlet,
    HttpServletRequest,
    HttpServletResponse
}

shared class SampleTimeServlet() extends HttpServlet() {
    
    doPost(HttpServletRequest req, HttpServletResponse resp) 
            => writeOutput(resp);
    
    doGet(HttpServletRequest req, HttpServletResponse resp) 
            => writeOutput(resp);
    
    void writeOutput(HttpServletResponse resp) {
        String output = Date().string;
        resp.contentType = "text/plain";
        resp.setContentLength(output.size);
        resp.writer.write(output);
        resp.writer.flush();
    }
}
