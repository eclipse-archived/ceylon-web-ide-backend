<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Ceylon Web Runner</title>
    
    <link rel='stylesheet' media='screen, projection' type='text/css' href='main.css'/>
    <link rel='stylesheet' type='text/css' href='shCore.css'/>
    <link rel='stylesheet' type='text/css' href='shThemeDefault.css'/>
    <!--[if lt IE 8]>
        <link href='http://ceylon-lang.org/stylesheets/ie.css' media='screen, projection' rel='stylesheet' type='text/css' />
    <![endif]-->
    <style type="text/css">
        #primary-content {
            margin: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
        }
        #primary-content #core-page {
            margin: 0px;
            width: 99%;
            height: 100%;
        }
        #result {
        }
        .cantseeme {
            <% if (request.getParameter("showcode") == null) { %>
            display: none;
            <% } %>
        }
        #output {
            border-width: 1px;
            border-style: solid;
            width: 100%;
            height: 200px;
            padding: 2px;
            overflow: auto;
            background: #ffffff;
            white-space: pre-wrap;
        }
        .jsc_msg {
            color: gray;
            font-size: small;
        }
        .jsc_error {
            color: red;
        }
        .editerror {
            background-image: url(images/underline.gif);
            background-position: bottom;
            background-repeat: repeat-x;
        }
        span.ceylondoc {
            position: relative;
        }
        
        span.ceylondoc a span {
            display: none;
        }
        
        span.ceylondoc a:hover {
            font-size: 99%;
            font-color: #000000;
        }
        
        span.ceylondoc a:hover span { 
            display: block; 
            position: absolute; 
            margin-top: 10px; 
            margin-left: -10px; 
            width: auto; padding: 5px; 
            z-index: 100; 
            color: #000000; 
            background: #FFFFAA; 
            font: 12px "Arial", sans-serif;
            text-align: left; 
            text-decoration: none;
        }
    </style>
    <script type="text/javascript" src="scripts/spin.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/codemirror.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/mode/ceylon/ceylon.js" charset="utf-8"></script>
    <link rel="stylesheet" href="scripts/codemirror.css" />
    <style type="text/css">
        .CodeMirror {border: 1px solid black;width:100%;height:200px;background:#ffffff;}
        .CodeMirror-gutter {min-width: 2.6em; cursor: pointer;}
    </style>
    <script type="text/javascript" src="scripts/require-jquery.js" data-main="scripts/repl.js"></script>

</head>
<body class="bp">


<div id="primary-content">

<div id="core-page">

    <form>
        <textarea id="edit_ceylon"></textarea>
        <input type="button" id="submit" name="submit" value="Run" onClick="run()">
        <input type="button" value="Clear Output" onClick="clearOutput()">
        <input type="button" id="share_src" name="share_src" value="Share this code" onClick="shareSource()">
        <input type="text" id="shareurl" name="shareurl" value="" size="45" disabled="true">
    </form>
    <hr class="cantseeme">
    <pre id="result" class="cantseeme">
    </pre>
    <div id="output">
    </div>

</div>


</div>

</body>
</html>
