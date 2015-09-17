<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Ceylon Web IDE</title>
    
    <script>
    var clientid = "<%= System.getenv("GITHUB_CLIENTID") %>";
    if (clientid == "null") {
            clientid = "ef3727725eeee1d1bae2";
    }
    </script>
    
    <link rel='stylesheet' media='screen, projection' type='text/css' href='main.css'/>
    <link rel='stylesheet' type='text/css'
         href='http://fonts.googleapis.com/css?family=Source+Sans+Pro|PT+Sans|PT+Sans:700|Inconsolata|Inconsolata:700'/>
    <!--[if lt IE 8]>
        <link href='http://ceylon-lang.org/stylesheets/ie.css' media='screen, projection' rel='stylesheet' type='text/css' />
    <![endif]-->
    <script type="text/javascript" src="scripts/codemirror.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/autocomplete.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/mode/ceylon/ceylon.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/mode/javascript/javascript.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/mode/markdown/markdown.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/active-line.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/closebrackets.js" charset="utf-8"></script>
    <!--script type="text/javascript" src="scripts/match-highlighter.js" charset="utf-8"></script-->
    <script type="text/javascript" src="scripts/matchbrackets.js" charset="utf-8"></script>
    <link rel="stylesheet" href="scripts/codemirror.css" />
    <script type="text/javascript" src="scripts/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="scripts/jquery-ui-1.11.2.min.js"></script>
    <script type="text/javascript" src="scripts/jquery-cookie-1.4.1.js"></script>
    <script type="text/javascript" src="scripts/w2ui-1.4.3.min.js"></script>
    <script type="text/javascript" src="scripts/github.js"></script>
    <script type="text/javascript" src="scripts/repl.js"></script>
    <link rel='stylesheet' type='text/css' href='autocomplete.css'/>
    <link rel='stylesheet' type='text/css' href='scripts/jquery-ui-1.11.2.css'/>
    <link rel='stylesheet' type='text/css' href='scripts/jquery-ui-1.11.2.structure.css'/>
    <link rel='stylesheet' type='text/css' href='scripts/w2ui-1.4.3.css'/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

</head>

<body class="bp">

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<div id="all"></div>

<div id="holder">

<div id="header-bar" class="header-bar"><div id="header">
  <a id="header-logo" href="."><h1 id="ceylon">Ceylon</h1></a>
  <div id="header-tagline">
    <p id="say_more_more_clearly">Say more, more clearly</p>
  </div></div>
  <div class="badges">
    <div class="badge">
        <a href="https://twitter.com/ceylonlang" class="twitter-follow-button" data-show-screen-name="false">Follow @ceylonlang</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
    </div>
    <div class="badge">
        <div class="g-follow" data-annotation="bubble" data-height="20" data-href="https://plus.google.com/102481741611133754149" data-rel="publisher"></div>
        <script type="text/javascript">
          (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/platform.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
          })();
        </script>
    </div>
    <div class="badge">
        <div class="fb-like" data-href="https://www.facebook.com/ceylonlang" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
    </div>
</div>
</div><!-- header-bar -->

<div id="core-page">

    <div id="editortabs"></div>
    <div id="editorspane"></div>

        <div class="invis">
            <span class="alignRight"><input type="checkbox" id="fullscript" onclick="toggleFullScript()" disabled/>full script&nbsp;&nbsp;
            <input type="checkbox" id="imports" onclick="toggleImports()" disabled/>imports</span>
            <div style="clear: both"></div>
        </div>
        <div class="invis">
            <span class="alignRight invis"><input type="checkbox" id="fullmodule" onclick="toggleFullModule()" disabled/>full module</span>
            <div style="clear: both"></div>
        </div>
        
    <!--
    <div style="text-align:center; padding-top:5px; padding-bottom:5px;">
    <button class="bubble-button has-spinner" id="run_ceylon" name="run_ceylon" onClick="performRun()"><span class="spinner"><i class="icon-spin icon-refresh"> </i></span>Run</button>
    <button class="bubble-button invis" id="stop_ceylon" name="stop_ceylon" onClick="stop()">Stop</button>
    <button class="bubble-button" onClick="doReset()">Reset</button>
    <button class="bubble-button" id="share_src" name="share_src" onClick="shareSource()">Share</button>
    <button class="bubble-button invis" id="save_src" name="save_src" onClick="saveSource()">Save Code</button>
    <button class="bubble-button invis" id="update_src" name="update_src" onClick="updateSource()">Update Code</button>
    <input class="invis" type="text" id="gistname" name="gistname" value="" size="20" oninput="handleGistNameChange(this)">
    <a class="invis" href="#" id="shareurl" title="Direct link to this page pre-filled with the current code">Link</a>
    <a class="invis" href="#" target="gistlink" id="gistlink" title="Link to the shared code on GitHub">Gist</a>
    <a class="invis" href="#" id="deletegist" onClick="deleteGist(); return false;" title="Remove the shared code from GitHub">Delete</a>
    </div>
    -->
    
</div> <!--  core-page -->

<!-- template for creating new editors -->
<div id="editor-template" class="codeeditor invis"><textarea></textarea></div>

<!-- output window -->    
<div id="output"><iframe id="outputframe" src="runner.jsp"></iframe></div>

<div id="sidebar" class="trompon ceylonblock">
<div id="sidebarblock" class="sidebar-block">
    <div>
        <h3 id="yrcodehdr" class="invis">Your code:</h3>
        <ol id="yrcode" class="invis">
        </ol>
        <a id="yrcodemore" class="invis" href="#" onCLick="">more...</a>
        <h3 id="news">Try out a sample:</h3>
        <ol id="examples">
        <li id="example_hello_world" class="news_entry"><a href="#" onClick="return handleEditExample('hello_world')">Hello World</a></li>
        <li id="example_basics" class="news_entry"><a href="#" onClick="return handleEditExample('basics')">Basics</a></li>
        <li id="example_null_and_union" class="news_entry"><a href="#" onClick="return handleEditExample('null_and_union')">Null values and union types</a></li>
        <li id="example_conditions" class="news_entry"><a href="#" onClick="return handleEditExample('conditions')">Conditions and assertions</a></li>
        <li id="example_classes_and_functions" class="news_entry"><a href="#" onClick="return handleEditExample('classes_and_functions')">Classes and functions 1</a></li>
        <li id="example_interfaces" class="news_entry"><a href="#" onClick="return handleEditExample('interfaces')">Interfaces and mixin inheritance</a></li>
        <li id="example_classes_and_functions2" class="news_entry"><a href="#" onClick="return handleEditExample('classes_and_functions2')">Classes and functions 2</a></li>
        <li id="example_collections" class="news_entry"><a href="#" onClick="return handleEditExample('collections')">Collections and sequence comprehensions</a></li>
        <li id="example_named_arguments" class="news_entry"><a href="#" onClick="return handleEditExample('named_arguments')">Named argument syntax</a></li>
        <li id="example_generics" class="news_entry"><a href="#" onClick="return handleEditExample('generics')">Type parameters</a></li>
        <li id="example_switch1" class="news_entry"><a href="#" onClick="return handleEditExample('switch1')">Enumerations and the switch statement</a></li>
        <li id="example_interop" class="news_entry"><a href="#" onClick="return handleEditExample('interop')">Interoperability</a></li>
        <li id="example_request" class="news_entry"><a href="#" onClick="return handleEditExample('request')">Interoperability 2</a></li>
        <li id="example_dynints" class="news_entry"><a href="#" onClick="return handleEditExample('dynints')">Dynamic interfaces</a></li>
        <li id="example_operators" class="news_entry"><a href="#" onClick="return handleEditExample('operators')">Operator polymorphism</a></li>
        <li id="example_metamodel" class="news_entry"><a href="#" onClick="return handleEditExample('metamodel')">Type-safe Metamodel</a></li>
        <li id="example_game_of_life" class="news_entry"><a href="#" onClick="return handleEditExample('game_of_life')">Game of Life</a></li>
        <li id="example_importtest1" class="news_entry"><a href="#" onClick="return handleEditExample('importtest1')">Simple Import Test</a></li>
        <li id="example_importtest2" class="news_entry"><a href="#" onClick="return handleEditExample('importtest2')">Advanced Import Test</a></li>
        </ol>
    </div>
</div>

</div> <!-- sidebar -->

<div id='footer-bar' class='footer-bar'>
    <div id='footer'>
        <div id='footer-core'>
            <div id="powered">
                <p>The <a href="http://github.com/ceylon/ceylon-web-ide-backend">Ceylon Web Runner</a>
                is powered by
                <a href="http://github.com/ceylon/ceylon-js">Ceylon JS</a>, 
                <a href="http://openshift.redhat.com">OpenShift</a>,
                <a href="http://requirejs.org">RequireJS</a>,
                <a href="http://codemirror.net">CodeMirror</a>,
                <a href="http://jquery.com">jQuery</a>,
                <a href="http://w2ui.com">w2ui</a>,
                <a href="https://github.com">GitHub</a>.</p>
            </div>
            <div id='copyright'>
                <p id='copyright_copy_2010_2011_red...'>Copyright &copy; 2010-2011, Red Hat, Inc. or third-party contributors -
                Ceylon is a trademark of Red Hat, Inc. - <a href='http://www.redhat.com/legal/legal_statement.html'>terms of Use</a> - 
                <a href='http://www.redhat.com/legal/privacy_statement.html'>Privacy policy</a></p>
            </div>
        </div>
    </div>
</div>

<div id="help-message"><div id="help-message-content" class="ceylonblock">
<h3>Editor keyboard shortcuts</h3>
<ul>
    <li>Autocompletion: <code>Ctrl-.</code>
    <li>Documentation: <code>Ctrl-D</code>
</ul>
</div></div>

<pre id="result" class="invis">
</pre>
    
</div> <!-- holder -->

</body>
</html>

