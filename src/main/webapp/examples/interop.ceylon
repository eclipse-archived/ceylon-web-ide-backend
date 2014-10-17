//$webrun_wrapped
shared void run(){
// The JVM backend of the Ceylon compiler provides good
// interoperability with Java, so that programs can use the JDK.
// Interoperability with JavaScript is also provided, mainly
// through "dynamic" blocks. Compile-time checks are relaxed in
// these blocks (of course this can result in erros at runtime).
dynamic {
    dynamic headerNode = document.getElementById("hdr_title");
    headerNode.textContent = "Who needs JavaScript?";

    dynamic nodes = document.getElementsByTagName("A");
    Integer nodesLength = nodes.length;
    for (i in 0..nodesLength-1) {
        dynamic elem = nodes.item(i);
        String oldText = elem.textContent;
        print(oldText);
        if (oldText.startsWith("*") && oldText.endsWith("*")) {
            elem.textContent = oldText[1:oldText.size-2];
        } else {
            elem.textContent = "*``oldText``*";
        }
    }
}
}
