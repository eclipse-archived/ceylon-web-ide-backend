<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Ceylon Web Runner</title>
    
    <link rel='stylesheet' media='screen, projection' type='text/css' href='main.css'/>
    <link rel='stylesheet' type='text/css'
         href='http://fonts.googleapis.com/css?family=Source+Sans+Pro|PT+Sans|PT+Sans:700|Inconsolata|Inconsolata:700'/>
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
        .invis {
            display: none;
        }
        .cantseeme {
            <% if (request.getParameter("showcode") == null) { %>
            display: none;
            <% } %>
        }
        #outputwrap, #edit_ceylon, #edit_module {
            width:  620px;
            height: 220px;
            padding-left: 4px;
            background: white;
            white-space: pre-wrap;
            font-family: Inconsolata, Monaco, Courier, monospace;
            font-size: 14px;
            min-width: 290px;
            max-width: 900px;
            min-height: 58px;
            max-height:800px;
        }
        #edit_ceylon, #edit_module {
            border: 1px solid black;
            overflow: auto;
        }
        #output {
            border: 1px solid black;
            width:  100%;
            height: 100%;
        }
        .jsc_msg {
            color: gray;
            font-size: small;
        }
        .jsc_error {
            color: red;
        }
        input {
            border-style:none;
        }
    </style>
    <script type="text/javascript" src="scripts/codemirror.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/autocomplete.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/mode/ceylon/ceylon.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/active-line.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/closebrackets.js" charset="utf-8"></script>
    <!--script type="text/javascript" src="scripts/match-highlighter.js" charset="utf-8"></script-->
    <script type="text/javascript" src="scripts/matchbrackets.js" charset="utf-8"></script>
    <link rel="stylesheet" href="scripts/codemirror.css" />
    <script type="text/javascript" src="scripts/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="scripts/jquery-ui-1.11.2.min.js"></script>
    <script type="text/javascript" src="scripts/jquery-cookie-1.4.1.js"></script>
    <script type="text/javascript" src="scripts/perfect-scrollbar.jquery.min.js"></script>
    <script type="text/javascript" src="scripts/github.js"></script>
    <script type="text/javascript" src="scripts/repl.js"></script>
    <link rel='stylesheet' type='text/css' href='autocomplete.css'/>
    <link rel='stylesheet' type='text/css' href='scripts/jquery-ui-1.11.2.css'/>
    <link rel='stylesheet' type='text/css' href='scripts/jquery-ui-1.11.2.structure.css'/>
    <script type="text/javascript">
        $(function() {
            if(document.domain != "localhost") {
                document.domain = 'ceylon-lang.org';
            }
        });
    </script>
</head>
<body class="bp">


<div id="primary-content">

<div id="core-page">

    <form>
        <div id="edit_module_div" class="invis">
            <div>
                <span class="alignLeft">Module editor -- Autocompletion: <code>Ctrl-.</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Documentation: <code>Ctrl-D</code></span>
                <span class="alignRight invis"><input type="checkbox" id="fullmodule" onclick="toggleFullModule()" disabled/>full module</span>
                <div style="clear: both"></div>
            </div>
            <textarea id="edit_module"></textarea>
        </div>
        <div id="edit_ceylon_div">
            <div>
                <span class="alignLeft">Code editor -- Autocompletion: <code>Ctrl-.</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Documentation: <code>Ctrl-D</code></span>
                <span class="alignRight invis"><input type="checkbox" id="fullscript" onclick="toggleFullScript()" disabled/>full script&nbsp;&nbsp;
                <input type="checkbox" id="imports" onclick="toggleImports()" disabled/>imports</span>
                <div style="clear: both"></div>
            </div>
            <textarea id="edit_ceylon"></textarea>
        </div>
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
    </form>
    <hr class="cantseeme">
    <pre id="result" class="cantseeme">
    </pre>
    <div id="outputwrap"><iframe id="output" src="runner.jsp"></iframe></div>

</div>


</div>

</body>
</html>
