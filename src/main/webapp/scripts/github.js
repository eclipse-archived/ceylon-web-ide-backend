(function(define) {
    define(function(require, exports, module) {
        $ = require("jquery");
        
        //////////////////////////////////////////////////////////////////////
        // Creates the base GitHub object
        //  config.timeout = Optional timeout (in milliseconds) to use for
        //     remote connections (default 20000)
        //  config.beforeSend = Optional callback that will be called just
        //     before making a remote connection
        //  config.complete = Optional callback that will be called when a
        //     remote connection terminates
        //  config.rootUrl = Optional URL used for all remote connections
        //     (default "https://api.github.com/")
        //  config.userAgent = Optional user agent string to be used in the
        //     request headers for all remote communication
        //     (default "Ceylon-Web-Runner-1.1.1")
        //  config.authentication - Optional Authentication to use for all
        //     remote calls. Can be overridden in each specific function call.
        //     Set to `null` in a function call if you don't want authentication
        //     even if set on the base GitHub object
        //  config.debug = Optional boolean to turn on debugging mode that
        //     logs certain operations to the console
        //////////////////////////////////////////////////////////////////////
        function GitHub(config) {
            if (config == null) {
                config = {};
            }
            this.config = config;
            
            if (config.timeout == null) {
                config.timeout = 20000;
            }
            if (config.beforeSend != null) {
                config.beforeSend = function() {};
            }
            if (config.complete != null) {
                config.complete = function() {};
            }
            if (config.rootUrl == null) {
                config.rootUrl = "https://api.github.com/";
            } else if (!config.rootUrl.endsWith("/")) {
                config.rootUrl = config.rootUrl + "/";
            }
            if (config.userAgent != null) {
                config.userAgent = "Ceylon-Web-Runner-1.1.1";
            }
            
            this._etags = {};
            this._cache = {};
        }
        
        // List Gists
        //  args.onGist - Callback to be called for each Gist that has been retrieved
        //  args.accept - Optional filter function that when passed a `Gist` object
        //     returns a boolean indicating if the given Gist should be accepted or not
        //  args.error - Optional callback to be called on erroneous
        //     termination of the remote call
        //  args.authentication - Optional Authentication to use for the
        //     remote call
        GitHub.prototype.listGists = function(args) {
            var that = this;
            if (args.onGist == null) {
                throw "Missing required `args.onGist`";
            }
            
            function filterGist(index, item) {
                item["_state"] = "summary";
                var gist = new Gist(that, item);
                if (args.accept == null || args.accept(gist)) {
                    args.onGist(gist);
                }
            }
            function handleGists(json, status, xhr) {
                $.each(json, filterGist);
            }
            
            that._call({
                url: "gists",
                method: "GET",
                authentication: args.authentication,
                success: handleGists,
                error: args.onError
            });
        }
        
        // Create a dummy Gist that can be used for operations
        // like `edit()` and `remove()` that only need an id
        //  id - The id of a Gist
        GitHub.prototype.gist = function(id) {
            var that = this;
            if (id == null) {
                throw "Missing required `id`";
            }
            return new Gist(that, { id: id, _state: "idonly" });
        }
        
        // Create a Gist
        //  args.data - The data used to create the Gist, see https://developer.github.com/v3/gists/#create-a-gist
        //  args.success - Optional callback to be called on successful
        //     termination of the remote call
        //  args.error - Optional callback to be called on erroneous
        //     termination of the remote call
        //  args.authentication - Optional Authentication to use for the
        //     remote call
        GitHub.prototype.createGist = function(args) {
            var that = this;
            if (args.data == null) {
                throw "Missing required `args.data`";
            }
            if (args.data.files == null) {
                throw "Missing required `args.data.files`";
            }
            
            function handleGist(json, status, xhr) {
                if (args.success != null) {
                    var gist = new Gist(that, json);
                    args.success(gist);
                }
            }
            
            that._call({
                url: "gists",
                method: "POST",
                data: args.data,
                authentication: args.authentication,
                success: handleGist,
                error: args.error
            });
        }
        
        // Private function that handles the actual remote calls
        //  args.url - The URL part that added to the `config.rootUrl`
        //     forms the actual URL to use for the remote call
        //  args.method - The HTML method to use (eg. "GET", "POST", etc)
        //  args.data - Optional data object to be passed as data for
        //     the remote call. If the method is "GET" the attributes
        //     will be passed as request parameters while for "POST"
        //     the object will be turned into a JSON string and passed
        //     in its entirety
        //  args.timeout = Optional timeout (in milliseconds) to use for
        //     remote connections (default 20000)
        //  args.success - Optional callback to be called on successful
        //     termination of the remote call
        //  args.error - Optional callback to be called on erroneous
        //     termination of the remote call
        //  args.authentication - Optional Authentication to use for the
        //     remote call
        GitHub.prototype._call = function(args) {
            var that = this;
            if (args.url == null) {
                throw "Missing required `args.url`";
            }
            if (args.method == null) {
                throw "Missing required `args.method`";
            }
            
            var key = args.url + JSON.stringify(args.data);
            
            function stripEtag(tag) {
                if (tag != null) {
                    if (tag.startsWith("W/")) {
                        tag = tag.substring(2);
                    }
                }
                return tag;
            }
            function handleSuccess(json, status, xhr) {
                if (that.config.debug) { console.log("Status: " + xhr.status + "\n", xhr.getAllResponseHeaders(), json); }
                if (args.method == "GET") {
                    var etag = stripEtag(xhr.getResponseHeader("ETag"));
                    if (etag != null) {
                        if (xhr.status == 304) {
                            json = that._cache[etag];
                        } else if (xhr.status >= 200 && xhr.status <= 299) {
                            that._etags[key] = etag;
                            that._cache[etag] = json;
                        }
                    }
                }
                if (args.success != null) {
                    args.success(json, status, xhr);
                }
            }
            
            var hdr = {
                "Accept": "application/vnd.github.v3+json",
                "User-Agent": that.config.userAgent
            };
            var auth = args.authentication;
            if (typeof auth === "undefined") {
                auth = that.config.authentication;
            }
            if (auth != null && auth.type == "oauth" && auth.token != null) {
                hdr = { "Authorization": "token " + auth.token };
            }
            var jqargs = {
                "url": that.config.rootUrl + args.url,
                type: args.method,
                cache: false,
                timeout: that.config.timeout,
                beforeSend: that.config.beforeSend,
                complete: that.config.complete,
                dataType: 'json',
                headers: hdr,
                success: handleSuccess
            };
            if (auth != null && auth.type == "basic") {
                jqargs.username = auth.username;
                jqargs.password = auth.password;
            }
            if (args.method == "GET") {
                var etag = that._etags[key];
                if (etag != null) {
                    hdr["If-None-Match"] = etag;
                }
                if (args.data != null) {
                    jqargs.data = args.data;
                }
            } else if (args.method == "POST" || args.method == "PATCH") {
                jqargs.contentType = 'application/json; charset=utf-8';
                if (args.data != null) {
                    jqargs.data = JSON.stringify(args.data);
                }
            } else if (args.method == "DELETE") {
                if (args.data != null) {
                    jqargs.data = args.data;
                }
            } else {
                throw "Unsupported method " + args.method;
            }
            if (args.error != null) {
                jqargs.error = args.error;
            }
            if (that.config.debug) { console.log(jqargs); }
            $.ajax(jqargs);
        }
        
        //////////////////////////////////////////////////////////////////////
        // Object holding Gist data
        //  github - A `GitHub` object
        //  data - The information held by the Gist, see
        //     https://developer.github.com/v3/gists/#response
        //////////////////////////////////////////////////////////////////////
        function Gist(github, data) {
            this.github = github;
            this.data = data;
        }
        
        // Fetch the Gist
        //  args.revision - Optional SHA of the revision to retrieve
        //  args.success - Optional callback to be called on successful
        //     termination of the remote call
        //  args.error - Optional callback to be called on erroneous
        //     termination of the remote call
        //  args.authentication - Optional Authentication to use for the
        //     remote call
        Gist.prototype.fetch = function(args) {
            var that = this;
            
            function handleGist(json, status, xhr) {
                that.data = json;
                delete that.data._state;
                if (args.success != null) {
                    args.success(that);
                }
            }
            
            if (that.data._state) {
                var url = "gists/" + that.data.id;
                if (args.revision != null) {
                    url = url + "/" + args.revision;
                }
                that.github._call({
                    url: url,
                    method: "GET",
                    authentication: args.authentication,
                    success: handleGist,
                    error: args.error
                });
            }
        }
        
        // Edit a Gist
        //  args.data - The data used to edit the Gist, see
        //     https://developer.github.com/v3/gists/#edit-a-gist
        //  args.success - Optional callback to be called on successful
        //     termination of the remote call
        //  args.error - Optional callback to be called on erroneous
        //     termination of the remote call
        //  args.authentication - Optional Authentication to use for the
        //     remote call
        Gist.prototype.edit = function(args) {
            var that = this;
            if (args.data == null) {
                throw "Missing required `args.data`";
            }
            
            function handleGist(json, status, xhr) {
                that.data = json;
                if (args.success != null) {
                    args.success(that);
                }
            }
            
            that.github._call({
                url: "gists/" + that.data.id,
                method: "PATCH",
                data: args.data,
                authentication: args.authentication,
                success: handleGist,
                error: args.error
            });
        }
        
        // Remove a Gist
        //  args.success - Optional callback to be called on successful
        //     termination of the remote call
        //  args.error - Optional callback to be called on erroneous
        //     termination of the remote call
        //  args.authentication - Optional Authentication to use for the
        //     remote call
        Gist.prototype.remove = function(args) {
            var that = this;
            if (args.authentication == null && that.github.config.authentication == null) {
                throw "Authentication required";
            }
            
            function handleRemove(json, status, xhr) {
                if (args.success != null) {
                    args.success(that);
                }
            }
            
            that.github._call({
                url: "gists/" + that.data.id,
                method: "DELETE",
                authentication: args.authentication,
                success: handleRemove,
                error: args.error
            });
        }
        
        // Create a Comment
        //  args.data - The data used to create the Comment, see https://developer.github.com/v3/gists/comments/#create-a-comment
        //  args.success - Optional callback to be called on successful
        //     termination of the remote call
        //  args.error - Optional callback to be called on erroneous
        //     termination of the remote call
        //  args.authentication - Optional Authentication to use for the
        //     remote call
        Gist.prototype.createComment = function(args) {
            var that = this;
            if (args.data == null) {
                throw "Missing required `args.data`";
            }
            
            function handleComment(json, status, xhr) {
                if (args.success != null) {
                    var comment = new Comment(that.github, that, json);
                    args.success(comment);
                }
            }
            
            that.github._call({
                url: "gists/" + that.data.id + "/comments",
                method: "POST",
                data: args.data,
                authentication: args.authentication,
                success: handleComment,
                error: args.error
            });
        }
        
        //////////////////////////////////////////////////////////////////////
        // Object holding Comment data
        //  github - A `GitHub` object
        //  item - The GitHub object the comment is meant for, eg. a `Gist`
        //  data - The information held by the Comment, see
        //     https://developer.github.com/v3/gists/comments/#response
        //////////////////////////////////////////////////////////////////////
        function Comment(github, item, data) {
            this.github = github;
            this.item = item;
            this.data = data;
        }
        
        // Remove a Comment
        //  args.success - Optional callback to be called on successful
        //     termination of the remote call
        //  args.error - Optional callback to be called on erroneous
        //     termination of the remote call
        //  args.authentication - Optional Authentication to use for the
        //     remote call
        Comment.prototype.remove = function(args) {
            var that = this;
            
            function handleRemove(json, status, xhr) {
                if (args.success != null) {
                    args.success(that);
                }
            }
            
            var url;
            if (item instanceof Gist) {
                url = "gists/" + item.data.id + "/comments/" + that.data.id;
            } else {
                throw "Removing comments not supported for " + item.constructor.name;
            }
            that.github._call({
                url: url,
                method: "DELETE",
                authentication: args.authentication,
                success: handleComment,
                error: args.error
            });
        }
        
        //////////////////////////////////////////////////////////////////////
        // Object used for authentication
        //  data.type - Either "basic" or "oauth"
        // For "basic":
        //  data.username - The username to authenticate with
        //  data.password - The password to use
        // For "oauth":
        //  data.token - The token to use for authentication, see
        //     https://developer.github.com/v3/oauth/
        //////////////////////////////////////////////////////////////////////
        function Authentication(data) {
            this.type = data.type;
            this.username = data.username;
            this.password = data.password;
            this.token = data.token;
        }
        
        exports.GitHub = GitHub;
        exports.Authentication = Authentication;
    });
}(typeof define==='function' && define.amd ? define : function (factory) {
    if (typeof exports!=='undefined') {
        factory(require, exports, module);
    } else {
        throw "no module loader";
    }
}));
