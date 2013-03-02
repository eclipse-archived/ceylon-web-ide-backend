// The JVM backend of the Ceylon compiler provides good
// interoperability with Java, so that programs can use the JDK.
// Interoperability with JavaScript is also provided, mainly
// through "dynamic" blocks. Compile-time checks are relaxed in
// these blocks (of course this can result in erros at runtime).
dynamic {
    value headerNode = document.getElementById("hdr_title");
    headerNode.textContent = "Who needs JavaScript?";

    value nodes = document.getElementsByTagName("A");
    for (i in 0..nodes.length-1) {
        value elem = nodes.item(i);
        String oldText = elem.textContent;
        print(oldText);
        if (oldText.startsWith("*") && oldText.endsWith("*")) {
            elem.textContent = oldText[1:oldText.size-2];
        } else {
            elem.textContent = "*``oldText``*";
        }
    }
}
