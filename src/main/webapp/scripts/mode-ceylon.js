define('ace/mode/ceylon', ['require', 'exports', 'module' , 'pilot/oop', 'ace/mode/javascript', 'ace/tokenizer', 'ace/mode/ceylon_highlight_rules'], function(require, exports, module) {
"use strict";

var oop = require("pilot/oop");
var JavaScriptMode = require("ace/mode/javascript").Mode;
var Tokenizer = require("ace/tokenizer").Tokenizer;
var CeylonHighlightRules = require("ace/mode/ceylon_highlight_rules").CeylonHighlightRules;

var Mode = function() {
    JavaScriptMode.call(this);
    
    this.$tokenizer = new Tokenizer(new CeylonHighlightRules().getRules());
};
oop.inherits(Mode, JavaScriptMode);

(function() {
    
    this.createWorker = function(session) {
        return null;
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});

define('ace/mode/ceylon_highlight_rules', ['require', 'exports', 'module' , 'pilot/oop', 'pilot/lang', 'ace/mode/doc_comment_highlight_rules', 'ace/mode/text_highlight_rules'], function(require, exports, module) {
"use strict";

var oop = require("pilot/oop");
var lang = require("pilot/lang");
var DocCommentHighlightRules = require("ace/mode/doc_comment_highlight_rules").DocCommentHighlightRules;
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

var CeylonHighlightRules = function() {

    var keywords = lang.arrayToMap(
    ('import class interface object given assign void value function of ' +
     'extends satisfies adapts abstracts in out return break continue throw ' +
     'if else switch case for while try catch finally ' +
     'this outer super is exists nonempty').split(" ")
    );

    var annotations = lang.arrayToMap(
    ('shared abstract formal default actual variable deprecated small ' +
     'literal doc by see throws').split(" ")
    );

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : "\\/\\/.*$"
            },
            new DocCommentHighlightRules().getStartRule("doc-start"),
            {
                token : "comment", // multi line comment
                merge : true,
                regex : "\\/\\*",
                next : "comment"
            }, {
                token : "string", // single line
                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token : "constant.numeric", // number
                regex : "\\b(?:(?:[\\d]+|\\d{1,3}(?:_\\d{3})*)(?:\.(?:[\\d]+|(?:\\d{3}(?:_\\d{3})*)*))?(?:E\\+\\d+)?[munpfkMGTP]?|0x[a-f0-9]+)\\b"
            }, {
                token : "constant.language.boolean",
                regex : "(?:true|false)\\b"
            }, {
                token : function(value) {
                    if (keywords.hasOwnProperty(value))
                        return "keyword";
                    else if (annotations.hasOwnProperty(value))
                        return "support.function";
                    else if (value.match(/\b[A-Z][a-zA-Z0-9_]*/g))
                        return "constant.language";
                    else
                        return "identifier";
                },
                // TODO: Unicode escape sequences
                // TODO: Unicode identifiers
                regex : "[a-zA-Z_][a-zA-Z0-9_]*\\b"
            }, /*{
                token : "keyword.operator",
                regex : "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
            }, */{
                token : "lparen",
                regex : "[[({]"
            }, {
                token : "rparen",
                regex : "[\\])}]"
            }, {
                token : "text",
                regex : "\\s+"
            }
        ],
        "comment" : [
            {
                token : "comment", // closing comment
                regex : ".*?\\*\\/",
                next : "start"
            }, {
                token : "comment", // comment spanning whole line
                merge : true,
                regex : ".+"
            }
        ]
    };
    
    this.embedRules(DocCommentHighlightRules, "doc-",
        [ new DocCommentHighlightRules().getEndRule("start") ]);
};

oop.inherits(CeylonHighlightRules, TextHighlightRules);

exports.CeylonHighlightRules = CeylonHighlightRules;
});