// The JVM backend of the Ceylon compiler provides good
// interoperability with Java, so that programs can use the JDK.
// JavaScript interoperability in the JavaScript backend used
// here is still work in progress, but accessing the browser's
// DOM is already possible:
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
