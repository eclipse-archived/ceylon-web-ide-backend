<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ceylon Web IDE</title>
    
    <script>
    var embedded = true;
    
    var clientid = "<%= System.getenv("GITHUB_CLIENTID") %>";
    if (clientid == "null") {
        clientid = "ef3727725eeee1d1bae2";
    }
    </script>
    
    <%@ include file="head.html" %>
    
</head>

<body>

    <%@ include file="body.html" %>

</body>
</html>
