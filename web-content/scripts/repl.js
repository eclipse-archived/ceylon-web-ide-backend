//"use strict";

if (document.domain != "localhost") {
    document.domain = "ceylon-lang.org";
}

var markers = [];

var github;
var selectedSet;
var selectedGist;
var selectedExample;
var fileDeleted;
var spinCount = 0;
var closePopups = undefined;

var wrappedTag = "//$webrun_wrapped\n";
var codePrefix = "shared void run() {\n";
var codePostfix = "\n}";

var modulePrefix = "module web_ide_script \"1.0.0\" {\n";
var modulePostfix = "\n}";
var defaultImportSrc = modulePrefix +
		"    // Add module imports here" + 
		modulePostfix;

var uri = new URI();
var uriparams = uri.search(true);

var isLimitedWidth = window.matchMedia("only screen and (max-width: 760px)").matches;
var isLimitedHeight = window.matchMedia("only screen and (max-height: 760px)").matches;
var limitWidth = isLimitedWidth || embedded;
var limitHeight = isLimitedHeight || embedded;
var isMobile = isLimitedWidth || isLimitedHeight;

var live_tc = {
    _timeout: 3000,
    _status: "disabled",
    _last: Date.now(),
    _files: null,
    shouldTypecheck: function(files) {
        if (live_tc._status == "ready" && Date.now()-live_tc._last > live_tc._timeout) {
            var files = getCompilerFiles();
            if (!$.isEmptyObject(files)) {
                return JSON.stringify(files) != live_tc._files;
            }
        }
        return false;
    },
    ready: function() {
        live_tc._status = "ready";
    },
    pause: function() {
        live_tc._status = "paused";
    },
    disable: function() {
        live_tc._status = "disabled";
    },
    update: function() {
        live_tc._files = JSON.stringify(getCompilerFiles());
    },
    postpone: function(files) {
        live_tc._last = Date.now();
        if (live_tc._status != "disabled") {
            live_tc.ready();
        }
    },
    done: function() {
        live_tc.update();
        live_tc.pause();
    },
    now: function() {
        live_tc._files = {};
        live_tc._last = Date.now() - live_tc._timeout - 1;
        live_tc.ready();
    }
};

if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function(prefix, position) {
        position = position || 0;
        return this.indexOf(prefix, position) === position;
    }
}

if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

var pagepath = window.location.pathname;
if (!pagepath.endsWith("/")) {
    var p = pagepath.lastIndexOf("/");
    pagepath = pagepath.substring(0, p + 1);
}

$(document).ready(function() {
    $('form').submit(false);
    
    var auth;
    var token = $.cookie("githubauth");
    if (token != null && !("noauth" in uriparams)) {
        auth = new Authentication({
            type: "oauth",
            token: token
        });
    }
    github = new GitHub({
        beforeSend: startSpinner,
        complete: stopSpinner,
        authentication: auth,
        debug: false
    });

    // Prevent default CTRL+D and CTRL+S used by the editor
    $(document).bind('keydown', function(e) {
        if(e.ctrlKey && (e.which == 68 || e.which == 83)) {
            e.preventDefault();
            return false;
        }
    });

    // Create the main layout
    $('#all').w2layout({
        name: 'all',
        padding: 4,
        panels: getLayoutPanels()
    });
    
    // Hack to apply our main CSS class to the layout because
    // it doesn't provide a way to do that declaratively
    $(".w2ui-panel-title").addClass("bp");
    $(".w2ui-panel-tabs").addClass("bp");
    $(".w2ui-panel-toolbar").addClass("bp");
    
    // Now fill the layout with the elements hidden on the page
    w2ui.all.content("top", limitHeight ? jqContent($("#header-bar-small")) : jqContent($("#header-bar")));
    w2ui.all.content("main", jqContent($("#core-page")));
    w2ui.all.content("preview", jqContent($("#output")));
    w2ui.all.content("right", jqContent($("#sidebar")));
    w2ui.all.content("bottom", jqContent($("#footer-bar")));
    
    w2ui.all.on({
        type: "resize",
        execute: "after"
    }, function(event, data) {
        handleResizeMain(event, data);
        handleResizeSidebar(event, data);
    });
    
    $('#editortabs').w2tabs({
        name: 'editortabs',
        tabs: [],
        onClick: function(event) {
            selectTab(event.target);
        }
    });
    
    $('#share_src').show();
    $('#save_src').hide();
    $('#update_src').hide();
    $('#gistname').hide();
    $('#shareurl').hide();
    $('#gistlink').hide();
    $('#deletegist').hide();
    
    if (!embedded) {
    
        if ("usrlow" in uriparams) {
            // With "usrlow" set the user's gists will be shown
            // at the bottom of the sidebar instead of the top
            addExamplesContainer();
            addUserGistsContainer();
        } else {
            addUserGistsContainer();
            addExamplesContainer();
        }
        
        var noDefault = false;
        if (uriparams.src != null) {
            // Code is directly in URL
            var code = decodeURIComponent(uriparams.src);
            setTimeout(function() {
                editSource(code);
            }, 1);
            noDefault = true;
        } else if (uriparams.sample != null) {
            // Retrieve code from the given sample id
            editExample("ex", uriparams.sample);
            noDefault = true;
        } else if (uriparams.gist != null) {
            // Retrieve code from the given sample id
            editGist(uriparams.gist);
            noDefault = true;
        } else {
            if (uriparams.set == null) {
                window.outputReady = function() {
                    window.outputReady = null;
                    startSpinner();
                	runCode('print("Ceylon ``language.version`` \\"``language.versionName``\\"");');
                    stopSpinner();
                };
            }
        }
        
        if (uriparams.set != null) {
            handleSelectSet(uriparams.set, noDefault);
        } else {
            // This is the default set of examples stored in our
            // special "ceylonwebide" GitHub account
            handleSelectSet("6e03a3db46854ff825e9", noDefault);
        }
        
        listUserGists();
    
    }
    
    setupLiveTypechecker();
});

function jqContent(jqElem) {
    return {
        render: function() {
            $(this.box).empty();
            $(this.box).append(jqElem);
        }
    }
}

function handleToolbarClick(event) {
    if (event.target == "run") {
        performRun();
    } else if (event.target == "stop") {
        stop();
    } else if (event.target == "reset") {
        doReset();
    } else if (event.target == "share") {
        shareSource();
    } else if (event.target == "advanced") {
        handleAdvanced(event);
    } else if (event.target == "dark") {
        handleDarkClick();
    } else if (event.target == "help") {
        handleHelpClick();
    } else if (event.target == "connect") {
        handleGitHubConnect();
    } else if (event.target == "connected:disconnect") {
        handleGitHubDisconnect();
    } else if (event.target == "resize") {
        doMaximize();
    } else if (event.target == "resized") {
        doUnmaximize();
    } else if (event.target == "menu:newfile") {
        handleNewFile();
    } else if (event.target == "menu:renamefile") {
        handleRenameFile();
    } else if (event.target == "menu:deletefile") {
        handleDeleteFile();
    } else if (event.target == "menu:new") {
        handleNewProject();
    } else if (event.target == "menu:import") {
        handleImportProject();
    } else if (event.target == "menu:rename") {
        handleRenameGist();
    } else if (event.target == "menu:saveall") {
        updateSource();
    } else if (event.target == "menu:saveas") {
        handleSaveAs();
    } else if (event.target == "menu:delete") {
        handleDeleteGist();
    }
}

// HACK to make sure the CodeMirror editor doesn't show double scrollbars
function updateEditorSize(editorId) {
    var cm = $("#" +  editorId + " > .CodeMirror");
    var cmscroll = cm.find(".CodeMirror-scroll");
    cmscroll.height(cm.height());
}

function handleResizeMain(event, data) {
    var toolbarContractSize = 570;
    var toolbarMinimalSize = 333;
    var main = w2ui.all.get("main");
    var newwidth = main.width;
    if (newwidth < toolbarContractSize) {
        buttonSetCaption("run", "");
        buttonSetCaption("stop", "");
        buttonSetCaption("reset", "");
        buttonSetCaption("share", "");
        buttonSetCaption("advanced", "Adv");
        buttonSetCaption("dark", "");
        buttonSetCaption("help", "");
        buttonSetCaption("connect", "");
        buttonSetCaption("connected", "");
    } else if (newwidth >= toolbarContractSize) {
        buttonSetCaption("run", "Run");
        buttonSetCaption("stop", "Stop");
        buttonSetCaption("reset", "Reset");
        buttonSetCaption("share", "Share");
        buttonSetCaption("advanced", "Advanced");
        buttonSetCaption("dark", "Dark");
        buttonSetCaption("help", "Help");
        buttonSetCaption("connect", "Connect");
        buttonSetCaption("connected", "Connected");
    }
    if (newwidth < toolbarMinimalSize) {
        buttonShow("share", false);
        buttonShow("advanced", false);
        buttonShow("dark", false);
        buttonShow("help", false);
        buttonShow("connect", false);
        buttonShow("connected", false);
    } else if (newwidth >= toolbarMinimalSize) {
        buttonShow("share", !embedded);
        buttonShow("advanced", !embedded);
        buttonShow("dark", true);
        buttonShow("help", true);
        buttonShow("connect", !isGitHubConnected() && !embedded);
        buttonShow("connected", isGitHubConnected() && !embedded);
    }
    
    var editors = getEditors();
    $.each(editors, function(index, editor) {
        updateEditorSize(editor.ceylonId);
    });
}

function handleResizeSidebar(event, data) {
    var dx = $("#sidebar").innerWidth() - $("#sidebarblock").outerWidth();
    if (dx >= 0) {
        $("#sidebarhandle").css("right", dx + "px");
    }
}

function getLayoutPanels() {
    var pstyle = 'border: 0px; padding: 0px; overflow: hidden;';
    var zstyle = 'border: 1px solid #dfdfdf; padding: 0px; overflow: hidden;';
    return [
        { type: 'top', size: limitHeight ? 40 : 102, style: pstyle, hidden: embedded },
        { type: 'main', minSize: 180, style: zstyle,
            toolbar: {
                items: getToolbarItems(),
                onClick: handleToolbarClick
            }
        },
        { type: 'preview', size: "30%", minSize: 100, resizable: true, style: zstyle, title: 'Program output' },
        { type: 'right', size: 260, minSize: 200, resizable: true, style: zstyle, hidden: limitWidth },
        { type: 'bottom', size: 67, style: zstyle, hidden: limitHeight }
    ];
}

function getToolbarItems() {
    return [
        { type: 'menu',  id: 'menu', hint: 'Manage your code', icon: 'fa fa-bars', hidden: embedded,
            items: getMenuItems()
        },
        { type: 'break',  id: 'break0', hidden: embedded },
        { type: 'button',  id: 'run', caption: 'Run', hint: 'Compile & execute', icon: 'fa fa-play' },
        { type: 'button',  id: 'stop', caption: 'Stop', hint: 'Stop program', icon: 'fa fa-stop', disabled: true },
        { type: 'button',  id: 'reset', caption: 'Reset', hint: 'Clear output & errors', icon: 'fa fa-exclamation' },
        { type: 'button',  id: 'share', caption: 'Share', hint: 'Share the code on GitHub', icon: 'fa fa-share', hidden: embedded },
        { type: 'break',  id: 'break1', hidden: embedded },
        { type: 'button',  id: 'advanced', caption: 'Advanced', hint: 'Enable more complex code constructs', icon: 'fa fa-square-o', checkicon: 'fa fa-check-square-o', uncheckicon: 'fa fa-square-o', hidden: embedded },
        { type: 'spacer' },
        { type: 'button',  id: 'dark', caption: 'Dark', hint: 'Switch theme', icon: 'fa fa-square', checkicon: 'fa fa-check-square', uncheckicon: 'fa fa-square', hidden: false },
        { type: 'button',  id: 'help', caption: 'Help', hint: 'Help on how this Web IDE works', icon: 'fa fa-question', hidden: false },
        { type: 'button',  id: 'connect', caption: 'Connect', hint: 'Connect to GitHub', icon: 'fa fa-github', hidden: isGitHubConnected() || embedded },
        { type: 'menu',   id: 'connected', caption: 'Connected', hint: 'Connected to GitHub', icon: 'fa fa-github', hidden: !isGitHubConnected() || embedded,
            items: [
                { text: 'Disconnect from GitHub', id: 'disconnect', icon: 'fa fa-scissors' }
            ]
        },
        { type: 'break',  id: 'break2', hidden: true, hidden: embedded },
        { type: 'button',  id: 'resize', hint: 'Hide side bar', icon: 'fa fa-arrows-alt', hidden: true },
        { type: 'button',  id: 'resized', hint: 'Show side bar', icon: 'fa fa-angle-double-left', hidden: !limitWidth || embedded },
    ];
}

function getMenuItems() {
    var cnt = getEditors().length;
    var editorSelected = getEditors().length > 0 && getEditor(selectedTabId()) != null;
    var hasGist = (selectedGist != null);
    return [
        { text: 'New File...', id: 'newfile', icon: 'fa fa-file-o' },
        { text: 'Rename File...', id: 'renamefile', icon: 'fa fa-pencil', disabled: !editorSelected },
        { text: 'Delete File', id: 'deletefile', icon: 'fa fa-file-excel-o', disabled: !editorSelected },
        { text: 'New Project (Gist)...', id: 'new', icon: 'fa fa-files-o' },
        { text: 'Import Gist...', id: 'import', icon: 'fa fa-download' },
        { text: 'Rename Project...', id: 'rename', icon: 'fa fa-pencil', disabled: !hasGist, hidden: !isGitHubConnected() },
        { text: 'Save All', id: 'saveall', icon: 'fa fa-floppy-o', disabled: !hasGist || (cnt == 0) || !isAnyEditorDirty(), hidden: !isGitHubConnected() },
        { text: 'Save As...', id: 'saveas', icon: 'fa fa-files-o', disabled: (cnt == 0) },
        { text: 'Delete Project', id: 'delete', icon: 'fa fa-trash-o', disabled: !hasGist, hidden: !isGitHubConnected() },
    ];
}

function updateMenuState() {
    w2ui["all"].get("main").toolbar.set("menu", { items: getMenuItems() });
}

var sheets = document.styleSheets;
for (i=0; i<sheets.length; i++) {
    var sheet = sheets[i];
    if (sheet.href!=null && 
        sheet.href.indexOf("cm-ceylon-dark")>0) {
        sheet.disabled = true;
    }
}

function handleDarkClick() {
    var sheets = document.styleSheets;
    console.log(sheets);
    for (i=0; i<sheets.length; i++) {
        var sheet = sheets[i];
        if (sheet.href!=null && 
            sheet.href.indexOf("cm-ceylon")>0) {
            sheet.disabled = !sheet.disabled;
            buttonSetIcon("dark", sheet.disabled?"fa fa-check-square":"fa fa-square");
            buttonCheck("dark", sheet.disabled);
        }
    }
}

function handleHelpClick() {
    openHelpView();
}

function doMaximize() {
    buttonShow("break2", true);
    buttonShow("resized", true);
    w2ui.all.hide("right");
}

function doUnmaximize() {
    buttonShow("break2", false);
    buttonShow("resized", false);
    w2ui.all.show("right");
}

function isGitHubConnected() {
    return ($.cookie("githubauth") != null);
}

// Return "Connect" or "Disconnect" depending on current state
function getGitHubButtonLabel() {
    if (!isGitHubConnected()) {
        return "Connect";
    } else {
        return "Connected";
    }
}

function handleGitHubConnect() {
    if (!isGitHubConnected()) {
        var redirect = window.location.origin + pagepath + "githubauth";
        var url = "https://github.com/login/oauth/authorize?client_id=" + clientid + "&scope=gist&state=xyz&redirect_uri=" + encodeURIComponent(redirect);
        window.open(url, "githubauth");
    }
}

function handleGitHubDisconnect() {
    if (isGitHubConnected()) {
        $.removeCookie('githubauth', { path: '/' });
        window.location.reload();
    }
}

function setupLiveTypechecker() {
    window.setInterval(function(){
        if (live_tc.shouldTypecheck()) {
            console.log("typechecking...");
            live_tc.pause();
            $.ajax('translate', {
                cache: false,
                type: 'POST',
                dataType: 'json',
                timeout: 5000,
                success: function(json, status, xhr) {
                    live_tc.done();
                    clearEditMarkers();
                    var errs = json['errors'];
                    if (errs && !$.isEmptyObject(errs)) {
                        showErrors(errs, false);
                    }
                },
                error: function() {
                    live_tc.done();
                },
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify({
                    tc: 1,
                    files: getCompilerFiles()
                })
            });
        }
    },500);
}

// Mark the given Gist as selected and updates the proper GUI elements
function selectGist(gist) {
    selectedGist = gist;
    selectedExample = null;
    markGistSelected(selectedSet, gist);
    updateMenuState();
    updateAdvancedState();
}

// Clear selected Gist
function clearGist(gist) {
    selectedGist = null;
    markGistSelected(selectedSet, null);
    updateMenuState();
    updateAdvancedState();
}

function clearListSelectState() {
    $("#sidebar li").removeClass("selected");
}

function markGistSelected(set, gist) {
    clearListSelectState();
    if (set != null) {
        $("#sidebar li#set_" + set).addClass("selected");
    }
    if (gist != null) {
        $("#sidebar li#gist_" + gist.data.id).addClass("selected");
    }
}

function markExampleSelected(setName, key) {
    clearListSelectState();
    $("#sidebar #examples_" + setName + " li#example_" + setName + "_" + key).addClass("selected");
}

// Asks the user for a name and stores the code on the server
// Is called when the "Save As" menu item is selected
function handleSaveAs() {
    w2prompt("Enter a name for the new Gist:", "Name", "", "Save As", function(name) {
        if (name != null && name != "") {
            saveSource(name);
        }
    });
}

// Stores the code by creating a new Gist on the server
function saveSource(title) {
    function onSuccess(gist) {
        clearEditorDirtyStates();
        selectGist(gist);
        createComment(gist);
        updateGists();
    }
    var files = getGistFiles();
    var data = {
        "description": "Ceylon Web Runner: " + title,
        "public": false,
        "files": files
    };
    github.createGist({
        data: data,
        success: onSuccess,
        error: onStoreGistError
    });
}

function onStoreGistError(xhr, status, err) {
    printError("Error storing Gist: " + (err?err:status));
    if (xhr.status == 404) {
        printError(
            "This can happen when you are trying to save a Gist\n" +
            "that has been deleted in the mean time or you might\n" +
            "be trying to change a Gist that is not owned by you.\n" +
            "In that case use 'Save As' to create your own\n" +
            "personal copy.");
    }
}

// Creates the proper "files" element necessary for creating and
// updating Gists using the contents of the current editor(s)
function getGistFiles() {
    var files = {};
    var editors = getEditors();
    $.each(editors, function(index, editor) {
        var content = { content: getEditorCode(editor.ceylonId) };
        if (isEditorRenamed(editor.ceylonId)) {
            content.filename = editor.ceylonName;
            files[editor.ceylonSavedName] = content;
        } else {
            files[editor.ceylonName] = content;
        }
    });
    // See if we need to delete any files
    if (selectedGist != null) {
        $.each(selectedGist.data.files, function(index, item) {
            if (getEditor(editorId(index)) == null) {
                files[index] = null;
            }
        });
    }
    return files;
}

// Creates the proper "files" element necessary for compilation,
// autocomplete and documentation handling
function getCompilerFiles() {
    var files = {};
    var editors = getEditors();
    $.each(editors, function(index, editor) {
        if (compilerAccepts(editor.ceylonName)) {
            var content = { content: getEditorCode(editor.ceylonId) };
            files[editor.ceylonName] = content;
        }
    });
    return files;
}

// Creates a commit for the given Gist with a link to the Web Runner
function createComment(gist) {
    // Check that we have a valid GitHub token
    var token = $.cookie("githubauth");
    if (token) {
        var data = {
            "body": "[Click here](" + window.location.origin + pagepath + "?gist=" + gist.data.id + ") to run this code online",
        }
        gist.createComment({
            data: data
        });
    }
}

// Asks the user for a new name and updates the existing Gist on the server
// Is called when the "Rename" menu item is selected
function handleRenameGist() {
    var oldname = getGistName(selectedGist);
    w2prompt("Enter a new name for the current Gist", "Name", oldname, "Rename", function(name) {
        if (name != null && name != "" && name != oldname) {
            renameGist(name);
        }
    });
}

// Updates the code and or name of an existing Gist on the server
// Is called when the "Rename" button is pressed
function renameGist(title) {
    function onSuccess(gist) {
        selectGist(gist);
        updateGists();
    }
    var data = {
        "description": "Ceylon Web Runner: " + title,
    };
    selectedGist.edit({
        data: data,
        success: onSuccess,
        error: onStoreGistError
    });
}

// This is a safe way to call `updateSource()` if you
// don't know if that action is allowed at this moment
function handleSaveAll() {
    if (selectedGist != null
            && (getEditors().length > 0)
            && isAnyEditorDirty()
            && isGitHubConnected()) {
        updateSource();
    }
}

// Updates the code of an existing Gist on the server
// Is called when the "Save All" button is pressed
function updateSource() {
    function onSuccess(gist) {
        clearEditorDirtyStates();
        selectGist(gist);
        updateGists();
    }
    var files = getGistFiles();
    var data = {
            "files": files
    };
    selectedGist.edit({
        data: data,
        success: onSuccess,
        error: onStoreGistError
    });
}

function shareSource() {
    var weburl;
    if (selectedGist != null) {
        weburl = window.location.origin + pagepath + "?gist=" + selectedGist.data.id;
    } else {
        weburl = window.location.origin + pagepath + "?sample=" + selectedExample;
    }
    var html = '<div style="padding: 10px" class="ceylon_share_links">' +
        'Direct link to this page showing the current code:<br>' +
        '<div><input type="text" value="' + weburl + '" readonly onclick="this.select();">' +
        '<a href="' + weburl + '" target="share_webide"><i class="fa fa-external-link"></i></a></div>';
    if (selectedGist != null) {
        var githuburl = selectedGist.data.html_url;
        html += '<br><br>' +
            'Link to GitHub Gist where the current code is stored:<br>' +
            '<div><input type="text" value="' + githuburl + '" readonly onclick="this.select();">' +
            '<a href="' + githuburl + '" target="share_github"><i class="fa fa-external-link"></i></a></div>';
    }
    html += '</div>';
    $("#tb_all_main_toolbar_item_share").w2overlay(html);
}

// Deletes a Gist from the server (asks the user for confirmation first)
// Is called when the "Delete" menu item is selected
function handleNewFile() {
    var suggestion = suggestFileName();
    askFileName("New File", suggestion, true, function(newname) {
        if (!isAdvancedModeActive()
                && countCeylonFiles() == 1
                && newname.endsWith(".ceylon")) {
            // Creating a second .ceylon file when in "simplified"
            // mode means we'll have to switch to "advanced" mode.
            // Let's explain this to the user and give them the
            // opportunity to abort
            w2confirm('Adding a second ".ceylon" file means that we ' +
                    'have to switch to "advanced" mode where you cannot ' +
                    'simply type statements anymore but you will have ' +
                    'to write proper Ceylon code. Are you sure you ' +
                    'want to continue?').yes(function() {
                        newFile(newname);
                    });
        } else {
            newFile(newname);
        }
    });
}

function newFile(name) {
    var neweditor;
    if (!isAdvancedModeActive() && name.endsWith(".ceylon") && countCeylonFiles() >= 1) {
        // We switch to advanced mode
        applyAdvanced();
        if (name == "module.ceylon") {
            // The switch to advanced mode will have created
            // this editor already, we just select it
            neweditor = getEditor(editorId("module.ceylon"));
        } else {
            // We still need to create the new file
            neweditor = createEditor(name);
        }
    } else {
        neweditor = createEditor(name);
    }
    if (name.endsWith(".md")) {
        createMarkdownView(neweditor.ceylonId);
    }
    selectTab(neweditor.ceylonId);
    updateEditorDirtyState(neweditor.ceylonId);
    updateMenuState();
    updateAdvancedState();
    return neweditor;
}

function newModuleFile() {
    var neweditor = addSourceEditor("module.ceylon", defaultImportSrc);
    markWrapperReadOnly(neweditor.ceylonId);
    updateEditorDirtyState(neweditor.ceylonId);
    return neweditor;
}

function handleRenameFile() {
    var id = selectedTabId();
    var editor = getEditor(id);
    askFileName("Rename File", editor.ceylonName, false, function(newname) {
        renameFile(id, newname);
    });
}

function renameFile(id, newname) {
    var editor = getEditor(id);
    var oldname = editor.ceylonName;
    if (oldname != newname) {
        editor.ceylonName = newname;
        updateEditorDirtyState(id);
        updateMenuState();
        updateAdvancedState();
    }
}

function askFileName(title, suggestion, nodup, func) {
    var name = w2prompt('Enter the name for the file <em>including</em> the file extension:<p>(Supported extensions: <code>.ceylon</code>, <code>.js</code>, <code>.json</code>, <code>.md, <code>.txt</code></code>)</p>',
        "Name",
        suggestion,
        title,
        function(name) {
            if (name != null && name != "") {
                func(name);
            }
        },
        function(form) {
            var ok = false;
            var name = form.get("value").el.value;
            if (!editorAccepts(name)) {
                form.error('The file name has to end in ".ceylon", ".js", ".md" or ".txt"');
            } else if (!/^[-_.a-zA-Z0-9]+$/.test(name)) {
                form.error('The file name can only contain letters, digits, "_", "-" and "."');
            } else if (nodup && getEditor(editorId(name)) != null) {
                form.error('A file with that name already exists');
            } else {
                ok = true;
            }
            return ok;
        }
    );
}

function suggestFileName() {
    var suggestion;
    var cnt = 1;
    do {
        suggestion = "new" + (cnt++) + ".ceylon";
    } while (getEditor(editorId(suggestion)) != null);
    return suggestion;
}

// Deletes a Gist from the server (asks the user for confirmation first)
// Is called when the "Delete" menu item is selected
function handleDeleteFile() {
    var editor = getEditor(selectedTabId());
    w2confirm("Do you really want to delete this file '" + editor.ceylonName + "'?")
        .yes(function() {
            deleteFile(selectedTabId());
        });
}

// Deletes a file
function deleteFile(id) {
    fileDeleted = true;
    // Remove the editor
    var div = getEditorDiv(id);
    if (div.length > 0) {
        div.remove();
        deleteTab(id);
        var previewDiv = getPreviewDiv(id);
        if (previewDiv != null && previewDiv.length > 0) {
            previewDiv.remove();
            deleteTab("preview_" + id);
        }
    }
}

function handleNewProject() {
    checkForChangesAndRun(function() {
        newProject();
    });
}

function newProject() {
    selectedGist = null;
    selectedExample = null;
    fileDeleted = false;
    clearOutput();
    deleteEditors();
    clearListSelectState();
    newFile("main.ceylon");
}

function handleImportProject() {
    checkForChangesAndRun(function() {
        importProject();
    });
}

function importProject() {
    popupSelectGist(function(gistId) {
        if (gistId != null) {
            editGist(gistId);
        }
    });
}

// Deletes a Gist from the server (asks the user for confirmation first)
// Is called when the "Delete" menu item is selected
function handleDeleteGist() {
    if (selectedGist != null) {
        w2confirm("Do you really want to delete this Gist?")
            .yes(function() {
                deleteGist();
            });
    }
}

// Deletes a Gist from the server
function deleteGist() {
    function onRemove(gist) {
        doReset();
        clearGist();
        updateGists();
    }
    selectedGist.remove({
        success: onRemove,
        error: onDeleteGistError
    });
}

function onDeleteGistError(xhr, status, err) {
    printError("Error deleting Gist: " + (err?err:status));
    if (xhr.status == 404) {
        printError(
            "This can happen when you are trying to delete a Gist\n" +
            "that was already deleted in the mean time or you might\n" +
            "be trying to delete a Gist that is not owned by you.\n");
    }
}

// Updates the user's list of available Gists
function updateGists() {
    listUserGists();
}

// Returns the name of the given Gist
function getGistName(gist) {
    return gist.data.description.substring(19);
}

// Shows the user's list of available Gists
function listUserGists(page) {
    
    var first = (page == null || page == 1);
    
    function acceptGist(gist) {
        if (gist.data.description.startsWith("Ceylon Web Runner: ")) {
//            var show = false;
//            $.each(gist.data.files, function(idx, itm) {
//                if (idx.endsWith(".ceylon")) {
//                    show = true;
//                }
//            });
//            return show;
            return true;
        }
        return false;
    }
    
    function showGist(gist) {
        if (first) {
            $('#yrcode').empty();
            first = false;
        }
        var desc = getGistName(gist);
        $('#yrcode').append('<li id="gist_' + gist.data.id + '" class="news_entry"><a href="#" onClick="return handleEditGist(\'' + gist.data.id + '\')">' + desc + '</a></li>');
        $('#yrcodehdr').show();
        $('#yrcode').show();
    }
    
    function onEnd(list) {
        if (list.hasMoreElements()) {
            $('#yrcodemore').click(function() { return listUserGists(list.pages.length + 1); });
            $('#yrcodemore').show();
        } else {
            $('#yrcodemore').hide();
        }
        if (selectedSet != null || selectedGist != null) {
            markGistSelected(selectedSet, selectedGist);
        }
        handleResizeSidebar();
    }
    
    retrieveUserGists(page, acceptGist, showGist, onEnd);
}

// Retrieves a single page of user Gists from GitHub
// using the provided `acceptGist()` and `showGist()`
// functions for filtering and displaying and the
// `onEnd()` when the end of the page is reached.
// The first two functions will get passed a single
// Gist object while `onEnd()` will get passed a
// `GitHub.List` object
function retrieveUserGists(page, acceptGist, showGist, onEnd) {
    if (github.config.authentication == null) {
        return;
    }
    
    function handleGist(gist) {
        if (acceptGist(gist)) {
            showGist(gist);
        }
    }
    
    // Check that we have a valid GitHub token
    var token = $.cookie("githubauth");
    if (token) {
        var gistsIter = github.gists();
        gistsIter.each({
            func: handleGist,
            finish: onEnd,
            page: page
        });
    }
}

// Retrieves all pages of user Gists from GitHub
// using the provided `acceptGist()` and `showGist()`
// functions for filtering and displaying and the
// `onEnd()` when all the Gists have been read.
// The first two functions will get passed a single
// Gist object while `onEnd()` will get passed a
// `GitHub.List` object
function retrieveAllUserGists(acceptGist, showGist, userOnEnd) {
    function onEnd(list) {
        if (list.hasMoreElements()) {
            retrieveUserGists(ist.pages.length + 1, acceptGist, showGist, onEnd);
        } else if (userOnEnd != null) {
            userOnEnd(list);
        }
    }
    retrieveUserGists(1, acceptGist, showGist, onEnd);
}

function handleSelectSet(setGistId, noDefault) {
    selectedSet = setGistId;
    listSetGists(setGistId, noDefault);
}

// Retrieves the selected Gist, which should contain a .json
// file with the appropriate content and shows the Gists
// listed in it in the sidebar 
function listSetGists(setGistId, noDefault) {

    function addGist(setName, id, title) {
        $('#examples_' + setName).append('<li id="gist_' + id + '" class="news_entry"><a href="#" onClick="return handleEditGist(\'' + id + '\')">' + title + '</a></li>');
    }

    function addSet(setName,id, title) {
        $('#examples_' + setName).append('<li id="set_' + id + '" class="news_entry"><a href="#" onClick="return handleSelectSet(\'' + id + '\')">' + title + '</a></li>');
    }

    function onSuccess(gist) {
        try {
            var index = JSON.parse(gist.data.files["index.json"].content);
            clearExampleSets();
            $.each(index.sets, function(idxs, set) {
                addExamplesSet(idxs, set.title);
                $.each(set.items, function(idxi, item) {
                    if (item.gist != null) {
                        addGist(idxs, item.gist, item.title);
                    } else if (item.set != null) {
                        addSet(idxs, item.set, item.title);
                    }
                });
            });
            if (!noDefault && index["default"] != null) {
                editGist(index["default"].gist);
            }
            markGistSelected(selectedSet, selectedGist);
            handleResizeSidebar();
        } catch (ex) {
            printError("Error in Set '" + setGistId + "': " + ex);
            addExamples(); // Add our fixed example set
        }
    }
    
    function onError(xhr, status, err) {
        printError("Error retrieving Set '" + setGistId + "': " + (err?err:status));
        addExamples(); // Add our fixed example set
    }
    
    // Retrieve code
    github.gist(setGistId).fetch({
        success: onSuccess,
        error: onError
    });
}

function buttonEnable(name, enable) {
    if (enable) {
        w2ui["all"].get("main").toolbar.enable(name);
    } else {
        w2ui["all"].get("main").toolbar.disable(name);
    }
}

function buttonShow(name, show) {
    if (show) {
        w2ui["all"].get("main").toolbar.show(name);
    } else {
        w2ui["all"].get("main").toolbar.hide(name);
    }
}

function buttonSetIcon(name, icon) {
    w2ui["all"].get("main").toolbar.set(name, { icon: icon });
}

function buttonSetCaption(name, caption) {
    w2ui["all"].get("main").toolbar.set(name, { caption: caption });
}

function buttonCheck(name, check) {
    var toolbar = w2ui["all"].get("main").toolbar;
    var item = toolbar.get(name);
    if (check) {
        //toolbar.check(name);
        if (item.checkicon) {
            toolbar.set(name, { icon: item.checkicon });
        }
    } else {
        //toolbar.uncheck(name);
        if (item.uncheckicon) {
            toolbar.set(name, { icon: item.uncheckicon });
        }
    }
}

function tabCloseable(id, onClose) {
    w2ui["editortabs"].set(id, { closable: onClose != null, onClose: onClose });
}

// Returns the number of Ceylon files that are available
// (this incldues module descriptors)
function countCeylonFiles() {
    var cnt = 0;
    var editors = getEditors();
    $.each(editors, function(index, editor) {
        if (editor.ceylonName.endsWith(".ceylon")) {
            cnt++;
        }
    });
    return cnt;
}

var advanced = false;

function handleAdvanced(event) {
    if (isAdvancedModeActive()) {
        checkForChangesAndRun(function() {
            buttonSetIcon("advanced", "fa fa-square-o");
            undoAdvanced();
        }, function() {
            buttonCheck("advanced", true);
            advanced=true;
        }, ["module.ceylon"]);
    } else {
        buttonSetIcon("advanced", "fa fa-check-square-o");
        applyAdvanced();
    }
}

function applyAdvanced() {
    advanced = true;
    var editors = getEditors();
    $.each(editors, function (index, editor) {
        if (editor.ceylonName.endsWith(".ceylon")) {
            editor.execCommand("selectAll");
            editor.execCommand("indentMore");
            var src = wrapCode(getEditorCode(editor.ceylonId, true), true);
            setEditorCode(editor.ceylonId, src, true);
        }
    });
    newModuleFile();
    live_tc.ready();
    updateMenuState();
    // Need to put this in a timeout or the update
    // of the button conflicts with the w2 framework
    window.setTimeout(function () {
        updateAdvancedState();
    }, 1);
}

function undoAdvanced() {
    advanced = false;
    var tmp = fileDeleted;
    deleteFile(editorId("module.ceylon"));
    fileDeleted = tmp;
    var editors = getEditors();
    $.each(editors, function (index, editor) {
        if (editor.ceylonName.endsWith(".ceylon")) {
            var src = unwrapCode(getEditorCode(editor.ceylonId, true), true);
            setEditorCode(editor.ceylonId, src, true);
            editor.execCommand("selectAll");
            editor.execCommand("indentLess");
            editor.setCursor(0);
        }
    });
    updateMenuState();
    // Need to put this in a timeout or the update
    // of the button conflicts with the w2 framework
    window.setTimeout(function () {
        updateAdvancedState();
    }, 1);
}

function isCodeUnwrappable() {
    var canUnwrap = true;
    var cnt = countCeylonFiles();
    var editors = getEditors();
    $.each(editors, function(index, editor) {
        if (editor.ceylonName.endsWith(".ceylon")
                && editor.ceylonName != "module.ceylon") {
            canUnwrap = canUnwrap && isWrapped(editor.getValue(), true);
        }
    });
    return canUnwrap && cnt <= 2;
}

function updateAdvancedState() {
    var cnt = countCeylonFiles();
    advanced = (cnt > 1) || (cnt == 1) && isCodeUnwrappable();
    buttonCheck("advanced", advanced);
    buttonEnable("advanced", !advanced || ((cnt == 1) || (cnt == 2)) && isCodeUnwrappable());
}

function isAdvancedModeActive() {
    return advanced;
}

// Starts the spinner indicating the system is busy.
// These can be nested, so if you call this function
// twice you will also need to call `stopSpinner()`
// twice for it to disappear
function startSpinner() {
    buttonEnable("run", false);
    buttonSetIcon("run", "fa fa-cog fa-spin");
    spinCount++;
}

// Stops the spinner indicating the system is busy
function stopSpinner() {
    spinCount--;
    if (spinCount == 0) {
        buttonEnable("run", true);
        buttonSetIcon("run", "fa fa-play");
        focusSelectedEditor();
    }
}

//Sends the code from the editor to the server for compilation and it successful, runs the resulting js.
function performRun() {
    translate(afterTranslate);
}

function createFilesFromCode(code) {
    return {
        "main.ceylon": {
            content: wrappedTag + codePrefix + code + codePostfix
        }
    };
}

//Sends the given code to the server for compilation and it successful, runs the resulting js.
function runCode(code) {
    var files = createFilesFromCode(code);
    translateCode(files, afterTranslate);
}

// Wraps the contents of the editors in an object and sends it to the server for compilation.
// On response, executes the script if compilation was OK, otherwise shows errors.
// In any case it sets the hover docs if available.
function translate(onTranslation) {
    var files = getCompilerFiles();
    if (!$.isEmptyObject(files)) {
        if (shouldCompile(files)) {
            clearEditMarkers();
            translateCode(files, onTranslation);
        } else {
            if (onTranslation) {
                onTranslation();
            }
        }
    }
}

function translateCode(files, onTranslation) {
    resetOutput(function() {
        doTranslateCode(files, onTranslation);
    });
}

var transok;

// Wraps the contents of the editor in an object and sends it to the server for compilation.
// On response, executes the script if compilation was OK, otherwise shows errors.
// In any case it sets the hover docs if available.
function doTranslateCode(files, onTranslation) {
    transok = false;
    
    function onSuccess(json, status, xhr) {
        live_tc.done();
        var translatedcode = json['code'];
        if (translatedcode != null) {
            markCompiled(files);
            try {
                transok = true;
                $("#result").text(translatedcode);
                loadModuleAsString(translatedcode, onTranslation);
            } catch(err) {
                printError("Translated code could not be parsed:");
                printError("--- " + err);
            }
        }
        //errors?
        var errs = json['errors'];
        if (errs && !$.isEmptyObject(errs)) {
            showErrors(errs, translatedcode == null);
        }
    }
    function onError(xhr, status, err) {
        live_tc.done();
        transok = false;
        printError("An error occurred while compiling your code:");
        printError("--- " + (err?err:status));
    }
    
    jQuery.ajax('translate', {
        cache: false, type:'POST',
        dataType: 'json',
        timeout: 20000,
        beforeSend: startSpinner,
        complete: stopSpinner,
        success: onSuccess,
        error: onError,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            files: files
        })
    });
}

// Autocompletion support
function complete(editor){
    var cursor = editor.getCursor();
    var files = getCompilerFiles();
    live_tc.pause();
    jQuery.ajax('assist', {
        cache:false, type:'POST',
        dataType:'json',
        timeout:20000,
        beforeSend: startSpinner,
        success: function(json, status, xhr){
            stopSpinner();
            live_tc.ready();
            CodeMirror.autocomplete(editor, function(){
                return {
                    list: json.opts,
                    from: cursor,
                    to: cursor
                };
            });
        },
        error:function(xhr, status, err) {
            live_tc.ready();
            printError("An error occurred while retrieving completions for your code:");
            printError("--- " + (err?err:status));
        },
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify({ 
            files: files,
            f: editor.ceylonName,
            r: cursor.line + (isAdvancedModeActive() ? 1 : 3),
            c: cursor.ch
        })
    });
}

var help;

function fetchDoc(cm) {
    var files = getCompilerFiles();
    var done = false;
    function close() {
        if (done) return;
        done = true;
        $("body").unbind('keydown', close);
        $("body").unbind('click', close);
        help.parentNode.removeChild(help);
    }
    var docHandler = function(json, status, xhr) {
        live_tc.ready();
        if (json && json['name']) {
            if (json['doc']) {
                var pos = editor.cursorCoords(true);
                help = document.createElement("div");
                help.className = "help infront";
                help.innerHTML = json['doc'];
                help.style.left = pos.left + "px";
                help.style.top = pos.bottom + "px";
                document.body.appendChild(help);
                $("body").keydown(close);
                $("body").click(close);
                closePopups = close;
                help.focus();
            }
        }
    };
    var editor = getEditor(selectedTabId());
    var cursor = editor.getCursor();
    live_tc.pause();
    jQuery.ajax('hoverdoc', {
        cache: false,
        type: 'POST',
        dataType: 'json',
        timeout: 20000,
        beforeSend: startSpinner,
        complete: stopSpinner,
        success: docHandler,
        error: function(xhr,status,err){
            live_tc.ready();
            printError("An error occurred while retrieving documentation for your code:");
            printError("--- " + (err?err:status));
        },
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify({ 
            files: files,
            f: editor.ceylonName,
            r: cursor.line + (isAdvancedModeActive() ? 1 : 3),
            c: cursor.ch-1
        })
    });
}

//Shows the specified error messages in the code
function showErrors(errors, print) {
    $.each(errors, function(fileName, fileErrors) {
        $.each(fileErrors, function(index, err) {
            var linedelta = isAdvancedModeActive() ? 0 : 2;
            var text = 
                err.msg.substring(0,1).toUpperCase() +
                err.msg.substring(1)
            if (print) {
                var loc = fileName +
                    " (" + (err.from.line-linedelta) + 
                    ":" + err.from.ch + ")";
                if (err.tp == "w") {
                    printWarning(text, loc);
                }
                else {
                    printError(text, loc);
                }
            }
            var from = err.from.line-linedelta-1;
            var to = err.to.line-linedelta-1;
            if (from >= 0) {
                var editor = getEditor(editorId(fileName));
                if (editor != null) {
                    var errmsg = escapeHtml(text);
                    //This is to add a marker in the gutter
                    var img = document.createElement('img');
                    img.title = errmsg;
                    var underlineStyle, tabstyle;
                    if (err.tp == "w") {
                        img.src = "images/warning.gif";
                        img.className = "warning";
                        tabstyle = "warning";
                        underlineStyle = "cm-warning";
                    }
                    else {
                        img.src = "images/error.gif";
                        img.className = "error";
                        tabstyle = "error";
                        underlineStyle = "cm-error";
                    }
                    getEditorTab(editor.ceylonId).addClass(tabstyle);
                    editor.setGutterMarker(from, 'CodeMirror-error-gutter', img);
                    //This is to modify the style (underline or whatever)
                    markers.push(editor.markText({line:from,ch:err.from.ch},
                                                 {line:to,ch:err.to.ch+1},
                                                 {className:underlineStyle,title:errmsg}));
                }
            }
        });
    });
}

function loadModuleAsString(src, func) {
    var load = safeOutputRef("loadModuleAsString");
    if (load) {
        startSpinner();
        load(src, function() {
                func();
                stopSpinner();
            }, function(when, err) {
                stopSpinner();
                if (when == "parsing") {
                    printError("Translated code could not be parsed:");
                    printError("--- " + err);
                } else if (when == "running") {
                    printError("Error running code:");
                    printError("--- " + err);
                } else if (when == "require") {
                    printError("Error loading external modules:");
                    printError("--- " + err);
                } else {
                    printError("Unknown error:");
                    printError("--- " + err);
                }
            }
        );
    }
}

// This function is called if compilation runs OK
function afterTranslate() {
    if (transok == true) {
        clearLangModOutputState();
        //printSystem("// Script start at " + (new Date()));
        try {
            executeCode();
        } catch(err) {
            printError("Runtime error:");
            printError("--- " + err);
        }
        if (!hasLangModOutput()) {
            printSystem("Script ended with no output");
        }
        scrollOutput();
    }
}

function executeCode() {
    var run = safeOutputRef("run");
    if (run) {
        run();
    } else {
        printError("Entry point 'run()' not found!")
        printError("When advanced mode is active your code should contain a method like:");
        printError("");
        printError("shared void run() {");
        printError("    // Your program starts here");
        printError("}");
    }
}

var stopfunc = null;

function setOnStop(func) {
	if (!stopfunc) {
		stopfunc = func;
		buttonEnable("run", false);
		buttonEnable("stop", true);
	}
}

function isRunning() {
    return stopfunc != null;
}

// A way to stop running scripts (that support it!)
function stop() {
	if (isRunning()) {
		try {
			stopfunc();
		} catch(e) {}
		stopfunc = null;
		buttonEnable("run", true);
		buttonEnable("stop", false);
		scrollOutput();
	}
}

// Retrieves the specified example from the editor, along with its hover docs.
function editSource(src) {
     doReset();
     selectedExample = null;
     selectedGist = null;
     var files = createFilesFromCode(src);
     setEditorSourcesFromGist(files);
     clearListSelectState();
     live_tc.now();
}

function handleEditExample(setName, key) {
    checkForChangesAndRun(function() {
        editExample(setName, key);
    });
}

// Retrieves the specified example from the editor, along with its hover docs.
function editExample(setName, key) {
    // Retrieve code
    live_tc.pause();
    jQuery.ajax('hoverdoc?key='+key, {
        cache:true,
        dataType:'json',
        timeout:20000,
        beforeSend:startSpinner,
        complete:stopSpinner,
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        success:function(json, status, xhr) {
            doReset();
            selectedExample = key;
            selectedGist = null;
            markExampleSelected(setName, key);
            setEditorSourcesFromGist(json.files);
            live_tc.now();
        },
        error:function(xhr, status, err) {
            printError("Error retrieving example '" + key + "': " + (err?err:status));
            live_tc.ready();
        }
    });
}

function handleEditGist(key) {
    checkForChangesAndRun(function() {
        editGist(key);
    });
}

// Retrieves the specified code from GitHub
function editGist(key) {
    function onSuccess(gist) {
        selectGist(gist);
        setEditorSourcesFromGist(gist.data.files);
        live_tc.now();
    }
    function onError(xhr, status, err) {
        printError("Error retrieving Gist '" + key + "': " + (err?err:status));
        live_tc.ready();
    }
    
    // Retrieve code
    live_tc.pause();
    github.gist(key).fetch({
        success: onSuccess,
        error: onError
    });
}

// Sets the code for the editor(s) from the given object
function setEditorSourcesFromGist(files) {
    fileDeleted = false;
    deleteEditors();
    var cnt = 0;
    var hasModule = false;
    var hasWrapped = false;
    var firstFile, firstCeylonFile, firstEditModeFile, readme;
    $.each(files, function(index, item) {
        if (editorAccepts(index)) {
            if (firstFile == null) {
                firstFile = index;
            }
            if (firstEditModeFile == null && editorMode(index) != null) {
                firstEditModeFile = index;
            }
            if (firstCeylonFile == null
                    && index.endsWith(".ceylon")
                    && (index != "module.ceylon")) {
                firstCeylonFile = index;
            }
            if (index.endsWith(".ceylon")) {
                cnt++;
            }
            if (index.endsWith(".ceylon")
                    && (index != "module.ceylon")
                    && isWrapped(item.content)) {
                hasWrapped = true;
            }
            if (index == "README.md") {
                readme = index;
            }
            var neweditor = addSourceEditor(index, item.content);
            if (index == "module.ceylon") {
                hasModule = true;
                if (isWrappedModule(item.content)) {
                    markWrapperReadOnly(neweditor.ceylonId);
                }
            } else if (index.endsWith(".md")) {
                createMarkdownView(neweditor.ceylonId);
            }
        }
    });
    if (!hasModule && (cnt > 1 || cnt == 1 && !hasWrapped)) {
        newModuleFile();
    }
    var selectFile = readme || firstCeylonFile || firstEditModeFile || firstFile;
    if (selectFile != null) {
        var tabid = editorId(selectFile);
        if (selectFile.endsWith(".md")) {
            tabid = "preview_" + tabid;
        }
        selectTab(tabid);
    }
    clearEditorDirtyStates();
    updateMenuState();
    updateAdvancedState();
    live_tc.ready();
}

// Creates a new editor with the given name and source
function addSourceEditor(name, src) {
    var editor = createEditor(name);
    setEditorCode(editor.ceylonId, src);
    return editor;
}

function editorId(name) {
    return "editor_" + name.replace(".", "_");
}

function editorAccepts(name) {
    return editorMode(name) != null
            || name.endsWith(".txt");
}

function compilerAccepts(name) {
    return name.endsWith(".ceylon")
            || name.endsWith(".js");
}

function editorMode(name) {
    if (name.endsWith(".ceylon")) {
        return "text/x-ceylon";
    } else if (name.endsWith(".js")) {
        return "javascript";
    } else if (name.endsWith(".json")) {
        return {name: "javascript", json: true};
    } else if (name.endsWith(".md")) {
        return "markdown";
    } else {
        return undefined;
    }
}

function createTab(newid, name, template) {
    w2ui["editortabs"].add({ id: newid, caption: name });
    var tabTemplate = $("#" + template);
    var newTabContent = tabTemplate.clone();
    newTabContent[0].id = newid;
    $("#editorspane").append(newTabContent);
    return newTabContent;
}

//Delete a tab (not the content pane! Remove that first)
function deleteTab(id) {
    // Remove the tab
    var index = w2ui["editortabs"].get(id, true);
    w2ui["editortabs"].remove(id);
    // Select a new tab
    var editors = getEditors();
    var cnt = editors.length;
    if (cnt > 0) {
        var newindex = (index < cnt) ? index : cnt - 1;
        var newid = editors[newindex].ceylonId;
        selectTab(newid);
    } else {
        updateMenuState();
    }
    updateAdvancedState();
}

function canvasId() {
    return "webide_canvas";
}

function createCanvas() {
    var id = canvasId();
    var elem = createTab(id, "Canvas", 'canvas-template');
    elem[0].ceylonCanvas = elem.find("canvas")[0];
    tabCloseable(id, function() {
        stop();
        deleteCanvas();
    });
    selectTab(id);
}

function deleteCanvas() {
    var id = canvasId();
    $("#" + id).remove();
    deleteTab(id);
}

function openCanvasWindow() {
    var id = canvasId();
    if (w2ui["editortabs"].get(id) == null) {
        createCanvas();
    }
    return $("#" + id)[0];
}

function createMarkdownView(editorId) {
    var editor = getEditor(editorId);
    var name = editor.ceylonName.substring(0, editor.ceylonName.length - 3);
    createTab("preview_" + editorId, name + " <i class='fa fa-eye'></i>", 'preview-template');
    updateMarkdownView(editorId);
}

function updateMarkdownView(editorId) {
    var editor = getEditor(editorId);
    var src = getEditorCode(editorId, true);
    var mdHtml = marked(src);
    $("#preview_" + editorId + " > div").html(mdHtml);
    editor.ceylonPreviewUpdate = false;
}

function helpViewId() {
    return "webide_help";
}

function createHelpView() {
    var id = helpViewId();
    var elem = createTab(id, "Help", 'help-template');
    tabCloseable(id, function() {
        deleteHelpView();
    });
    selectTab(id);
}

function deleteHelpView() {
    var id = helpViewId();
    $("#" + id).remove();
    deleteTab(id);
}

function openHelpView() {
    var id = helpViewId();
    if (w2ui["editortabs"].get(id) == null) {
        createHelpView();
    }
    selectTab(id);
    return $("#" + id)[0];
}

function createEditor(name) {
    var newid = editorId(name);
    createTab(newid, name, 'editor-template');
    var div = $("#" + newid)[0];
    var editor = CodeMirror(div, {
        mode: editorMode(name),
        theme: 'ceylon',
        gutters: ["CodeMirror-error-gutter", "CodeMirror-gutter"],
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true,
        styleActiveLine: true,
        autoCloseBrackets: true,
        //highlightSelectionMatches: true,
        extraKeys: {
            "Ctrl-S": function(cm) { handleSaveAll(); },
            "Cmd-S": function(cm) { handleSaveAll(); },
            "Ctrl-D": function(cm) { fetchDoc(cm); },
            "Cmd-D": function(cm) { fetchDoc(cm); },
            "Ctrl-Space": function() { complete(editor); },
            "Cmd-.": function() { complete(editor); }
        }
    });
    editor.ceylonId = newid;
    editor.ceylonName = name;
    editor.on('focus', function() {
        // Hack to make sure that clicking in the editor correctly
        // closes all popups and deselects their associated buttons
        $().w2overlay();
        buttonCheck("menu", false);
        buttonCheck("connected", false);
        if (closePopups) {
            closePopups();
        }
        closePopups = undefined;
    });
    editor.on('change', function() {
        updateEditorDirtyState(editor.ceylonId);
        updateMenuState();
        updateAdvancedState();
        live_tc.postpone();
        editor.ceylonPreviewUpdate = true;
    });
    editor.on('cursorActivity', function() {
        if (closePopups) {
            closePopups();
        }
        closePopups = undefined;
    });
    editor.on('update', function() {
        updateEditorSize(editor.ceylonId);
    });
    return editor;
}

function getPreviewDiv(id) {
    return $("#preview_" + id);
}

function getEditorDiv(id) {
    return $("#" + id);
}

function getEditorTab(id) {
    return $("#tabs_editortabs_tab_" + id);    
}

function getEditor(id) {
    var codemirrordiv = $("#" + id + " > div");
    if (codemirrordiv.length == 1) {
        return codemirrordiv[0].CodeMirror;
    } else {
        return null;
    }
}

function getEditors() {
    var editors = [];
    var codemirrordivs = $("#editorspane > div > div.CodeMirror");
    codemirrordivs.each(function(index, item) {
        editors.push(item.CodeMirror);
    });
    return editors;
}

function selectTab(id) {
    w2ui["editortabs"].select(id);
    $("#editorspane > div").addClass("invis");
    getEditorDiv(id).removeClass("invis");
    updateMenuState();
    // If it's an editor set the focus to it
    var editor = getEditor(id);
    if (editor != null) {
        editor.refresh();
        if (!isMobile) {
            editor.focus();
        }
    }
    // If it's a preview check if it needs to be refreshed
    if (id.startsWith("preview_")) {
        var editorId = id.substring(8);
        var editor = getEditor(editorId);
        if (editor != null && editor.ceylonPreviewUpdate) {
            updateMarkdownView(editorId);
        }
    }
}

function isEditorDirty(id) {
    var editor = getEditor(id);
    var src = editor.getValue();
    var oldsrc = editor.ceylonSavedSource;
    return (src != oldsrc);
}

function isEditorRenamed(id) {
    var editor = getEditor(id);
    return editor.ceylonSavedName != null && editor.ceylonSavedName != editor.ceylonName;
}

function updateEditorDirtyState(id) {
    // Setting the tab state resets any classes we might
    // have added, so we store their states
    var tab = getEditorTab(id);
    var hasErr = tab.hasClass("error");
    var hasWrn = tab.hasClass("warning");
    
    var caption = getEditor(id).ceylonName;
    if (selectedGist != null && isEditorRenamed(id)) {
        caption = "[" + caption + "]";
    }
    if (isEditorDirty(id)) {
        caption = "*" + caption;
    }
    w2ui["editortabs"].set(id, { caption: caption });

    // We now restore any classes that we found earlier
    if (hasErr) tab.addClass("error");
    if (hasWrn) tab.addClass("warning");
}

function clearEditorDirtyState(id) {
    var editor = getEditor(id);
    editor.ceylonSavedName = editor.ceylonName;
    editor.ceylonSavedSource = editor.getValue();
    updateEditorDirtyState(editor.ceylonId);
}

function clearEditorDirtyStates() {
    var editors = getEditors();
    $.each(editors, function(index, editor) {
        editor.ceylonSavedName = editor.ceylonName;
        editor.ceylonSavedSource = editor.getValue();
        updateEditorDirtyState(editor.ceylonId);
    });
    updateMenuState();
    updateAdvancedState();
    fileDeleted = false;
}

// Returns true is any of the editors is dirty or if
// a file has been deleted since the last save.
// Can have an optional list of editor ids to check
// for (by default all editors are checked)
function isAnyEditorDirty(edids) {
    var dirty = fileDeleted;
    var editors = getEditors();
    $.each(editors, function(index, editor) {
        if (edids == null || $.inArray(editor.ceylonName, edids) >= 0) {
            dirty = dirty || isEditorDirty(editor.ceylonId);
        }
    });
    return dirty;
}

var oldfiles;

function markCompiled(files) {
    oldfiles = JSON.stringify(files);
}

function shouldCompile(files) {
    return JSON.stringify(files) != oldfiles || !transok;
}

function selectedTabId() {
    // First test is because w2ui keeps returning the previous
    // active state when all tabs have been deleted
    return (w2ui["editortabs"].tabs.length > 0) ? w2ui["editortabs"].active : null;
}

function focusSelectedEditor() {
    var id = selectedTabId();
    if (id != null) {
        var editor = getEditor(id);
        if (editor != null && !isMobile) {
            editor.focus();
        }
    }
}

function getEditorCode(id, noWrap) {
    var editor = getEditor(id);
    var src = editor.getValue();
    var name = editor.ceylonName;
    if (name.endsWith(".ceylon") && (name != "module.ceylon") && !noWrap) {
        return wrapCode(src);
    } else {
        return src;
    }
}

function setEditorCode(id, src, noUnwrap) {
    if (src != getEditorCode(id)) {
        var editor = getEditor(id);
        var name = editor.ceylonName;
        if (name.endsWith(".ceylon") && (name != "module.ceylon") && !noUnwrap) {
            if (isWrapped(src)) {
                src = unwrapCode(src);
            }
        }
        editor.setValue(src);
        if (!noUnwrap) {
            editor.ceylonSavedSource = src;
        }
    }
}

// This will mark the first and final lines of the editor read-only
function markWrapperReadOnly(id) {
    var editor = getEditor(id);
    // First line
    var opts1 = { readOnly:true, inclusiveLeft:true, inclusiveRight:false, atomic: true };
    editor.markText({line:0,ch:0}, {line:1,ch:0}, opts1);
    editor.addLineClass(0, "background", "cm-locked");
    // Last line
    var opts2 = { readOnly:true, inclusiveLeft:false, inclusiveRight:true, atomic: true };
    editor.markText({line:editor.lineCount() - 1,ch:0}, {line:editor.lineCount(),ch:0}, opts2);
    editor.addLineClass(editor.lineCount() - 1, "background", "cm-locked");
}

// Deletes all editors
function deleteEditors() {
    $("#editorspane").empty();
    var tabs = w2ui["editortabs"].tabs;
    // WARNING: do NOT change this to $.each(tabs, ...) !
    $(tabs).each(function(index, item) {
        w2ui["editortabs"].remove(item.id);
    });
    live_tc.done();
}

// This function checks for dirty editors and will run `func()`
// immediately if non of them are. Otherwise it will show a
// question to the user asking if they want to discard the 
// changes. When affirmative `func()` will be run or 'negative()'
// otherwise. Can have an optional list of editor ids to check
// for dirty state (by default all editors are checked)
function checkForChangesAndRun(func, negative, edids) {
    if (isRunning()) {
        w2alert("Program is running, stop it first before doing anything else", "Program Running", negative);
    } else if (isAnyEditorDirty(edids)) {
        var conf = w2confirm("This will discard any changes! Are you sure you want to continue?");
        conf.yes(func);
        if (negative != null) {
            conf.no(negative);
        }
    } else {
        func();
    }
}

function wrapCode(code, noTag) {
	if (isFullScript(code) == false) {
	    if (noTag) {
	        return codePrefix + code + codePostfix;
	    } else {
	        return wrappedTag + codePrefix + code + codePostfix;
	    }
	} else {
		return code;
	}
}

function unwrapCode(code, allowMissingTag) {
    if (isWrapped(code, allowMissingTag)) {
        var len = 0;
        len += (code.startsWith(wrappedTag)) ? wrappedTag.length : 0;
        len += (code.startsWith(codePrefix, len)) ? codePrefix.length : 0;
        return code.substring(len, code.length - codePostfix.length);
    } else {
        return code;
    }
}

function isFullScript() {
    return advanced;
}

function isWrapped(code, allowMissingTag) {
    return code.startsWith(wrappedTag + codePrefix)
        || allowMissingTag && code.startsWith(codePrefix);
}

function isWrappedModule(code) {
    return code.startsWith(modulePrefix) && code.endsWith(modulePostfix);
}

function doReset() {
    clearOutput();
    clearEditMarkers();
    focusSelectedEditor();
}

// Clears all error markers and hover docs.
function clearEditMarkers() {
    var editors = getEditors();
    $.each(editors, function(index, editor) {
        editor.clearGutter('CodeMirror-error-gutter');
        var tab = getEditorTab(editor.ceylonId);
        tab.removeClass("warning");
        tab.removeClass("error");
    });
    for (var i=0; i<markers.length;i++) {
        markers[i].clear();
    }
    markers=[];
}

function resetOutput(onReady) {
    window.outputReady = function() {
        window.outputReady = null;
        onReady();
    }
    var loc = safeOutputRef("location");
    if (loc) {
        loc.reload();
    }
}

function safeOutputRef(memberName) {
    try {
        var outputwin = $("#outputframe")[0].contentWindow;
        return outputwin[memberName];
    } catch(e) {
        // Catch and ignore domain errors
        return null;
    }
}

function clearLangModOutputState() {
    var clear = safeOutputRef("clearLangModOutputState");
    if (clear) {
        clear();
    }
}

function hasLangModOutput() {
    var hasOutput = safeOutputRef("hasLangModOutput");
    if (hasOutput) {
        return hasOutput();
    }
}

function clearOutput() {
    var clear = safeOutputRef("clearOutput");
    if (clear) {
        clear();
    }
}

function printOutputLine(txt) {
    var print = safeOutputRef("printOutputLine");
    if (print) {
        print(txt);
    }
}

function printOutput(txt) {
    var print = safeOutputRef("printOutput");
    if (print) {
        print(txt);
    }
}

function printSystem(txt, loc) {
    var print = safeOutputRef("printSystem");
    if (print) {
        print(txt, loc);
    }
}

function printError(txt, loc) {
    var print = safeOutputRef("printError");
    if (print) {
        print(txt, loc);
    }
}

function printWarning(txt, loc) {
    var print = safeOutputRef("printWarning");
    if (print) {
        print(txt, loc);
    }
}

function scrollOutput() {
    var scroll = safeOutputRef("scrollOutput");
    if (scroll) {
        scroll();
    }
}

// Basic HTML escaping.
function escapeHtml(html) {
    return (''+html).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function w2prompt(msg, label, value, title, onClose, onValidate) {
    onValidate = onValidate || function() { return true; }
    if (w2ui.promptform) {
        w2ui.promptform.destroy();
    }
    $().w2form({
        name: 'promptform',
        style: 'border: 0px; background-color: transparent;',
        fields: [
            { field: 'value', type: 'text', html: { caption: label, attr: 'size="40"' }, required: true },
        ],
        record: { 
            value: value,
        },
        actions: {
            "OK": function () {
                if (this.validate().length == 0 && onValidate(w2ui.promptform)) {
                    w2popup.close();
                    onClose(w2ui.promptform.record.value);
                }
            },
            "Cancel": function () { w2popup.close(); onClose(null); },
        }
    });
    w2popup.open({
        title: title,
        body: '<div style="text-align: center; padding: 5%; width: 100%; height: 30%;">' +
        msg +
        '</div><div id="form" style="width: 100%; height: 70%;"></div>',
        modal: true,
        onOpen: function (event) {
            event.onComplete = function () {
                $('#w2ui-popup #form').w2render('promptform');
            }
        }
    });
}

function popupSelectGist(onClose) {
    if (w2ui.promptform) {
        w2ui.promptform.destroy();
    }
    
    function acceptGist(gist) {
        var ok = false;
        $.each(gist.data.files, function(index, file) {
            ok = ok || editorAccepts(index);
        });
        return ok;
    }
    
    function showGist(gist) {
        var fld = w2ui.promptform.get("select");
        var items = fld.options.items;
        var desc = gist.data.description || Object.getOwnPropertyNames(gist.data.files)[0];
        items.push({ id: gist.data.id, text: desc });
        w2ui.promptform.set("select", { options: { items: items } });
    }
    
    function loadGists() {
        var items = [ { id: '', text: '-- Select Gist --', disabled: true } ];
        w2ui.promptform.set("select", { options: { items: items } });
        retrieveAllUserGists(acceptGist, showGist)
    }
    
    var msg, focus;
    var fields = [
         { name: 'value', type: 'text', html: { caption: 'Gist ID', attr: 'size="40"' }, required: true },
     ];
    var record = { 
        value: '',
    };
    if (isGitHubConnected()) {
        msg = 'Select the Gist you want to import from the list below or enter its ID in the text field:';
        var fld = { name: 'select', type: 'list', html: { caption: 'Gists', attr: 'size="40"' }, options: { items: [] } };
        fields.splice(0, 0, fld);
        record.select = '';
    } else {
        msg = 'Enter the ID of the Gist you want to import:';
    }

    $().w2form({
        name: 'promptform',
        style: 'border: 0px; background-color: transparent;',
        fields: fields,
        record: record,
        focus: -1,
        actions: {
            "OK": function () {
                if (this.validate().length == 0) {
                    w2popup.close();
                    onClose(w2ui.promptform.record.value);
                }
            },
            "Cancel": function () { w2popup.close(); onClose(null); },
        }
    }).on("change", function(event) {
        if (event.target == "select") {
            w2ui.promptform.record.select = event.value_new;
            w2ui.promptform.record.value = event.value_new.id;
            w2ui.promptform.refresh();
        }
    });
    w2popup.open({
        title: 'Import Gist',
        body: '<div style="text-align: center; padding: 5%; width: 100%; height: 30%;">' +
            msg +
            '</div><div id="form" style="width: 100%; height: 70%;"></div>',
        modal: true,
        onOpen: function (event) {
            event.onComplete = function () {
                $('#w2ui-popup #form').w2render('promptform');
            }
            loadGists();
        }
    });
}

function addUserGistsContainer() {
    $("#sidebarblock > div").append('<div id="yrcodediv"><h3 id="yrcodehdr" class="invis">Your code:</h3>');
    $("#sidebarblock > div").append('<ol id="yrcode" class="invis"></ol>');
    $("#sidebarblock > div").append('<a id="yrcodemore" class="invis" href="#" onCLick="">more...</a></div>');
}

function addExamplesContainer() {
    $("#sidebarblock > div").append('<div id="examplesdiv"></div>');
}

function addExamplesSet(setName, title) {
    $("#examplesdiv").append('<h3 id="exampleshdr_' + setName + '">' + title + '</h3>');
    $("#examplesdiv").append('<ol id="examples_' + setName + '"></ol>');
}

function addExample(setName, key, title) {
    $("#examples_" + setName).append('<li id="example_' + setName + '_' + key + '" class="news_entry"><a href="#" onClick="return handleEditExample(\'' + setName + '\', \'' + key + '\')">' + title + '</a></li>');
}

function clearExampleSets() {
    $("#examplesdiv").empty();
}

function addExamples() {
    clearExampleSets();
    addExamplesSet("ex", "Try out a sample:");
    addExample("ex", "hello_world", "Hello World");
    addExample("ex", "basics", "Basics");
    addExample("ex", "null_and_union", "Null values and union types");
    addExample("ex", "conditions", "Conditions and assertions");
    addExample("ex", "classes_and_functions", "Classes and functions 1");
    addExample("ex", "interfaces", "Interfaces and mixin inheritance");
    addExample("ex", "classes_and_functions2", "Classes and functions 2");
    addExample("ex", "collections", "Collections and sequence comprehensions");
    addExample("ex", "named_arguments", "Named argument syntax");
    addExample("ex", "generics", "Type parameters");
    addExample("ex", "switch1", "Enumerations and the switch statement");
    addExample("ex", "interop", "Interoperability");
    addExample("ex", "request", "Interoperability 2");
    addExample("ex", "dynints", "Dynamic interfaces");
    addExample("ex", "operators", "Operator polymorphism");
    addExample("ex", "metamodel", "Type-safe Metamodel");
    addExample("ex", "game_of_life", "Game of Life");
    addExample("ex", "importtest1", "Local Import");
    addExample("ex", "importtest2", "Module Import");
}
