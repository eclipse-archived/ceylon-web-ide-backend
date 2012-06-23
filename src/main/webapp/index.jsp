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
            width: 600px;
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
        #docs_errs {
            width:600px;
        }
    </style>
    <script type="text/javascript" src="scripts/spin.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/codemirror.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/mode/ceylon/ceylon.js" charset="utf-8"></script>
    <link rel="stylesheet" href="scripts/codemirror.css" />
    <style type="text/css">
        .CodeMirror {border: 1px solid black;width:600px;height:200px;background:#ffffff;}
        .CodeMirror-gutter {min-width: 2.6em; cursor: pointer;}
    </style>
    <script type="text/javascript" src="scripts/require-jquery.js" data-main="scripts/repl.js"></script>

</head>
<body class="bp">


<div class="header-bar"><div id="header">
  <a id="header-logo" href="."><h1 id="ceylon">Ceylon</h1></a>
  <div id="header-tagline">
	<p id="say_more_more_clearly">Say more, more clearly</p>
  </div>
</div></div>

<div id="primary-content">

<div id="core-page">

    <h1 id="hdr_title">Ceylon Web Runner</h1>
    <form>
        <textarea id="edit_ceylon"></textarea>
        <pre id="docs_errs"> </pre>
        <input type="button" id="submit" name="submit" value="Run" onClick="run()">
        <input type="button" value="Clear Output" onClick="clearOutput()">
        <input type="button" id="share_src" name="share_src" value="Share this code" onClick="shareSource()">
        <input type="text" id="shareurl" name="shareurl" value="" size="45" disabled="true">
    </form>
    <hr class="cantseeme">
    <pre id="result" class="cantseeme">
    </pre>
    <hr>
    <div id="output">
    </div>
    <hr>
    <div>The <a href="http://github.com/ceylon/ceylon-web-ide-backend">Ceylon Web Runner</a>
    is powered by <a href="http://github.com/ceylon/ceylon-js">Ceylon JS</a> and 
    <a href="http://openshift.redhat.com">OpenShift</a>.</div>

</div>

<div id="sidebar">
<div id="sidebar-block">
    <h3 id="news">Try out a sample:</h3>
	<hr>
    <div class="news_entry"><a href="#" onClick="return editCode('hello_world')">Hello World</a></div>
	<hr>
    <div class="news_entry"><a href="#" onClick="return editCode('basics')">Basics</a></div>
	<hr>
    <div class="news_entry"><a href="#" onClick="return editCode('null_and_union')">Null values and union types</a></div>
	<hr>
    <div class="news_entry"><a href="#" onClick="return editCode('classes_and_functions')">Classes and functions 1</a></div>
	<hr>
    <div class="news_entry"><a href="#" onClick="return editCode('interfaces')">Interfaces and mixin inheritance</a></div>
        <hr>
    <div class="news_entry"><a href="#" onClick="return editCode('classes_and_functions2')">Classes and functions 2</a></div>
        <hr>
    <div class="news_entry"><a href="#" onClick="return editCode('collections')">Collections and sequence comprehensions</a></div>
        <hr>
    <div class="news_entry"><a href="#" onClick="return editCode('switch1')">The Switch statement</a></div>
    <hr>

    <br><br>
    <a href="https://twitter.com/ceylonlang" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @ceylonlang</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
    <br>
    <Google+ Badge -+->
    <link href="https://plus.google.com/102481741611133754149" rel="publisher" />
    <script type="text/javascript">
        window.___gcfg = {lang: 'en'};
        (function() 
        {var po = document.createElement("script");
        po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(po, s);
        })();
    </script>

    <g:plus href="https://plus.google.com/102481741611133754149" width="300" height="131" theme="light"></g:plus>

</div>
</div>

</div>

</div>

<div class='footer-bar'>
    <div id='footer'>
        <div id='footer-core'>
            <div id='copyright'>
                <p id='copyright_copy_2010_2011_red...'>Copyright &copy; 2010-2011, Red Hat, Inc. or third-party contributors -
                Ceylon is a trademark of Red Hat, Inc. - <a href='http://www.redhat.com/legal/legal_statement.html'>terms of Use</a> - 
                <a href='http://www.redhat.com/legal/privacy_statement.html'>Privacy policy</a></p>
            </div>
        </div>
    </div>
</div>

</body>
</html>
