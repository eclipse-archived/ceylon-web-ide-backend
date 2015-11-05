dynamic getOutput() {
    dynamic {
        return document.getElementById("output");
    }
}

shared void clearOutput() {
    dynamic {
        getOutput().innerHTML = "";
    }
}

shared void printOutputLine(String txt) {
    dynamic {
        dynamic output = getOutput();
        output.innerHTML 
                = output.innerHTML 
                + escapeHtml(txt) + "<br>";
    }
}

shared void printOutput(String txt) {
    dynamic {
        dynamic output = getOutput();
        output.innerHTML 
                = output.innerHTML 
                + escapeHtml(txt);
    }
}

String escapeHtml(String html) 
        => html
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;");

String highlight(String txt) 
        => sum(interleave(
            escapeHtml(txt).split('\''.equals),
            { "<code>", "</code>" }.cycled));

void createMessagesTable() {
    dynamic {
        if (!document.getElementById("messages") exists) {
            getOutput().innerHTML 
                    = "<table><tbody id='messages'/></table>";
        }
    }
}

shared void printSystem(String txt, String? loc) 
        => printFormatted(txt, loc, "jsc_msg", "");

shared void printWarning(String txt, String? loc) 
        => printFormatted(txt, loc, "jsc_warn", 
                         "images/warning.gif");

shared void printError(String txt, String? loc) 
        => printFormatted(txt, loc, "jsc_error", 
                          "images/error.gif");

void printFormatted(String txt, String? loc, String cssClass, String image) {
    createMessagesTable();
    dynamic {
        dynamic output = document.getElementById("messages");
        output.innerHTML 
                = output.innerHTML 
                + "<tr>
                   <td><img src='``image``' alt='warning'/>&nbsp;</td>
                   <td>``loc else ""``</td><td> &mdash; </td>
                   <td class='``cssClass``'>``highlight(txt)``</td>
                   </tr>";
    }
}

shared void scrollOutput() {
    dynamic {
        window.scrollTo(0, 9999999);
    }
}
