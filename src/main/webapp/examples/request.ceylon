//$webrun_wrapped
shared void run() {
// Using JavaScript's XMLHttpRequest to connect
// to a simple web service that returns the time
// on the server and displays it in the console
dynamic {
  print("Sending request...");
  dynamic req = XMLHttpRequest();      
  req.onreadystatechange = void() {
    if (req.readyState==4) {
      print(req.status==200
        then "Time on server is: " + req.responseText
        else "Received error: " + req.status);
    }
  };
  req.open("GET", "/time", true);
  req.send();
}
}
