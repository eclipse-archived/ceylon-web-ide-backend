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
        
        // Returns a List object that can be used to iterate over Gists
        //  args.pageSize - Optional page size to use for the list requests.
        //     NB: not all list queries support this parameter see GitHub API docs
        //  args.maxRequests - Optional number indicating the maximum number of
        //     remote calls the function `each()` will make (default 5)
        //  args.error - Optional callback to be called on erroneous
        //     termination of the remote call
        //  args.authentication - Optional Authentication to use for the
        //     remote call
        GitHub.prototype.gists = function(args) {
            var that = this;
            if (args == null) {
                args = {};
            }
            
            function decodeGist(json) {
                json["_state"] = "summary";
                return new Gist(that, json);
            }
            
            return that._list({
                url: "gists",
                decode: decodeGist,
                pageSize: args.pageSize,
                maxRequests: args.maxRequests,
                authentication: args.authentication,
                error: args.error
            });
        }
        
        // Private function that handles remote calls returning lists.
        // Returns an object that can be used to iterate over the items.
        //  args.url - The URL part that added to the `config.rootUrl`
        //     forms the actual URL to use for the remote list call
        //  args.decode - Optional decoder function that takes a JSON object
        //     and returns a user-defined object
        //  args.pageSize - Optional page size to use for the list requests.
        //     NB: not all list queries support this parameter see GitHub API docs
        //  args.maxRequests - Optional number indicating the maximum number of
        //     remote calls the function `each()` will make (default 5)
        //  args.error - Optional callback to be called on erroneous
        //     termination of any remote calls
        //  args.authentication - Optional Authentication to use for the
        //     remote calls
        GitHub.prototype._list = function(args) {
            var that = this;
            return new List(that, args);
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
        // Object for handling lists
        //  data.url - The URL part that added to the `config.rootUrl`
        //     forms the actual URL to use for the remote list call
        //  data.decode - Optional decoder function that takes a JSON object
        //     and returns a user-defined object
        //  data.pageSize - Optional page size to use for the list requests.
        //     NB: not all list queries support this parameter see GitHub API docs
        //  data.maxRequests - Optional number indicating the maximum number of
        //     remote calls the function `each()` will make (default 5)
        //  data.error - Optional callback to be called on erroneous
        //     termination of any remote calls
        //  data.authentication - Optional Authentication to use for the
        //     remote calls
        //////////////////////////////////////////////////////////////////////
        function List(github, data) {
            this.github = github;
            this.data = data;
            if (data.url == null) {
                throw "Missing required `data.url`";
            }
            if (data.maxRequests == null) {
                data.maxRequests = 5;
            }
            
            this.pages = [];
            this.pageCount = -1;
            this.size = 0;
        }

        List.prototype.hasMoreElements = function(args) {
            return this.pageCount < 0;
        }
        
        // Iterate over the elements in a remote list automatically fetching
        // pages of information one at a time by making remote remote calls.
        // Can also be called by just passing a function directly as its
        // first and only argument or by passing an object:
        //  args.func - The function to call for each element in the list
        //  args.page - Optional starting page (default 1)
        //  args.finish - Optional function to call at the end of the
        //     iteration
        List.prototype.each = function(args) {
            var that = this;

            var func, page, requestCount;
            if (typeof args === "function") {
                func = args;
                page = 1;
                requestCount = 0;
            } else {
                if (args.func == null) {
                    throw "Missing required `args.func`";
                }
                func = args.func;
                page = args.page || 1;
                requestCount = args._requestCount || 0;
            }
            
            var idx = 0;
            if (page != null && page > 0) {
                idx = page - 1;
            }
            var i;
            var items = that.pages[idx];
            while (items != null) {
                for (i = 0; i < items.length; i++) {
                    if (func(items[i]) == false) {
                        return;
                    }
                }
                idx++;
                items = that.pages[idx];
            }
            
            function continueEach(is) {
                that.size += is.length;
                that.each({
                    func: func,
                    finish: args.finish,
                    page: idx + 1,
                    _requestCount: requestCount + 1
                });
            }
            
            if (requestCount < that.data.maxRequests && (that.pageCount < 0 || idx < that.pageCount)) {
                that._fetch({
                    page: idx + 1,
                    success: continueEach
                });
            } else if (args.finish != null) {
                args.finish(that);
            }
        }
        
        // Private function that fetches a page of data from a remote list
        //  args.success - Callback to be called on successful
        //     termination of the remote call
        //  args.page - Optional page number to fetch (default 1)
        List.prototype._fetch = function(args) {
            var that = this;
            if (args.success == null) {
                throw "Missing required `args.success`";
            }
            
            var idx = 0;
            if (args.page != null && args.page > 0) {
                idx = args.page - 1;
            }
            if (that.pages[idx] != null) {
                return;
            }
            
            function handleList(json, status, xhr) {
                var items = [];
                $.each(json, function(index, item) {
                    item["_state"] = "summary";
                    if (that.data.decode != null) {
                        // We have a decoder that turns JSON into Objects
                        item = that.data.decode(item);
                    }
                    items.push(item);
                });
                that.pages[idx] = items;
                var link = xhr.getResponseHeader("Link");
                if (link == null || link.indexOf('rel="next"') < 0) {
                    that.pageCount = idx + 1;
                }
                args.success(items);
            }
            
            var url = addParam(that.data.url, "page", idx + 1);
            if (that.data.pageSize != null) {
                url = addParam(url, "per_page", that.data.pageSize);
            }
            
            that.github._call({
                url: url,
                method: "GET",
                authentication: that.data.authentication,
                success: handleList,
                error: that.data.error
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
        
        function addParam(url, name, value) {
            if (url.indexOf("?") >= 0) {
                return url + "&" + name + "=" + value;
            } else {
                return url + "?" + name + "=" + value;
            }
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
