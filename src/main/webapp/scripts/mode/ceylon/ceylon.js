CodeMirror.defineMode("ceylon", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var jsonMode = parserConfig.json;

  // Tokenizer
  // Taken from the javascript CodeMirror mode,
  // modified for Ceylon by Enrique Zamudio

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    //A keywords expect (expr) expr or (expr) {block}
    //B keywords expect {block}
    //C keywords expect expr
    var ann={type:"keyword", style:"annotation"};
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};
    return {
      "module": kw("module"), "package": kw("package"), "import": kw("import"), 
      "alias": kw("alias"), "class": kw("class"), "interface":kw("interface"), "object":kw("object"),
      "given": kw("given"), "value":kw("value"), "assign": kw("assign"), "void": kw("void"), "function":kw("function"),
      "of":kw("of"), "extends": kw("extends"), "satisfies": kw("satisfies"), "adapts" : kw("adapts"), "abstracts" : kw("abstracts"),
      "in": kw("in"), "out":kw("out"), 
      "return": kw("return"), "break": kw("break"), "continue": kw("continue"), "throw": kw("throw"), 
      "assert": kw("assert"), "dynamic":kw("dynamic"),
      "if": kw("if"), "else": kw("else"), "switch": kw("switch"), "case": kw("case"), "for": kw("for"), 
      "while": kw("while"),  "try": kw("try"), "catch": kw("catch"), "finally": kw("finally"), "then":kw("then"),
      "this":kw("this"), "outer":kw("outer"), "super":kw("super"),
      "is": kw("is"), "exists": kw("exists"), "nonempty": kw("nonempty"),
     
      "variable": ann, "shared": ann, "formal":ann, "default":ann, "actual":ann, "abstract":ann,
      "late":ann, "native":ann, "deprecated":ann, 
      "doc":ann, "by":ann, "license":ann, "see":ann, "throws":ann, "tagged":ann
    };
  }();

  var isOperatorChar = /[+\-*&%=\^\~<>!?|]/;

  function chain(stream, state, f) {
    state.tokenize = f;
    return f(stream, state);
  }

  function nextUntilUnescaped(stream, end) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (next == end && !escaped)
        return false;
      escaped = !escaped && next == "\\";
    }
    return escaped;
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }

  function jsTokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == '`' && stream.eat('`')) {
      if (stream.eat('""')) {
          return chain(stream, state, jsTokenVerbatim);
      }
      else {
          return chain(stream, state, jsTokenString);
      }
    }
    else if (ch == "'") {
      return chain(stream, state, jsTokenChar);
    }
    else if (/[\[\]{}\(\),;\.]/.test(ch)) {
      return ret(ch);
    }
    else if (ch == '#') {
      stream.eatWhile(/[\da-f_]/i);
      return ret("number", "number");
    }      
    else if (ch == '$') {
      stream.eatWhile(/[\d_]/);
      return ret("number", "number");
    }      
    else if (/\d/.test(ch)) {
      stream.eatWhile(/[\d_]/);
      if (stream.eat('.')) {
          stream.eatWhile(/[\d_]/);
          if (stream.eat('e')||stream.eat('E')) {
              stream.eat('-'); stream.eat('+');
              stream.eatWhile(/[\d_]/);
          }
          else {
              stream.eatWhile(/[munpfkMGTP]/);
          }
      }
      else {
          stream.eatWhile(/[MGTP]/);
      }
      return ret("number", "number");
    }
    else if (ch == '/') {
      if (stream.eat('*')) {
        return chain(stream, state, jsTokenComment);
      }
      else if (stream.eat('/')) {
        stream.skipToEnd();
        return ret("comment", "comment");
      }
      else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", null, stream.current());
      }
    }
    else if (/</.test(ch)) { //to detect generics
      if (stream.eat("=") && stream.eat(">")) {
        return ret("operator", "operator", stream.current());
      } else if (stream.eatWhile(/\w>/)) {
        return ret("classname", "classname", stream.current());
      }
      stream.eatWhile(isOperatorChar);
      return ret("operator", null, stream.current());
    }
    else if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return ret("operator", null, stream.current());
    }
    else if (ch == '\\') {
      if (stream.eat('i')) {
        stream.eatWhile(/[\w\d_]/);
         return ret("variable", "variable", stream.current());
      }
      if (stream.eat('I')) {
        stream.eatWhile(/[\w\d_]/);
         return ret("classname", "classname", stream.current());
      }
    }
    else if (/[A-Z]/.test(ch)) { //anything starting with a capital is considered a classname
      stream.eatWhile(/[\w\_\d]/);
      return ret("classname", "classname", stream.current());
    }
    else {
      stream.eatWhile(/[\w\d_]/);
      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
      return (known && state.kwAllowed) ? ret(known.type, known.style, word) :
                     ret("variable", "variable", word);
    }
  }

  function jsTokenVerbatim(stream, state) {
    var lastlast, last, ch;
    while (ch = stream.next()) {
      if (ch == '"' && 
          last == '"' && 
          lastlast == '"') {
        while (stream.eat('"')) {}
        state.tokenize = jsTokenBase;
        break;
      }
      lastlast = last;
      last = ch;
    }
    return ret("string", "string");
  }

  function jsTokenString(stream, state) {
    var last, ch;
    while (ch = stream.next()) {
      if (ch == '"' && last != '\\' ||
          ch == '`' && last == '`') {
        state.tokenize = jsTokenBase;
        break;
      }
      last = ch;
    }
    return ret("string", "string");
  }

  function jsTokenChar(stream, state) {
    var last, ch;
    while (ch = stream.next()) {
      if (ch == ''' && last != '\\' ||
          ch == '\n') {
        state.tokenize = jsTokenBase;
        break;
      }
      last = ch;
    }
    return ret("string", "string");
  }

  function jsTokenComment(stream, state) {
    var last, ch;
    while (ch = stream.next()) {
      if (ch == '/' && last == '*') {
        state.tokenize = jsTokenBase;
        break;
      }
      last = ch;
    }
    return ret("comment", "comment");
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true };

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc;
  
    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function register(varname) {
    var state = cx.state;
    if (state.context) {
      cx.marked = "def";
      for (var v = state.localVars; v; v = v.next)
        if (v.name == varname) return;
      state.localVars = {name: varname, next: state.localVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    if (!cx.state.context) cx.state.localVars = defaultVars;
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state;
      state.lexical = new JSLexical(state.indented, cx.stream.column(), type, null, state.lexical, info)
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    return function expecting(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(arguments.callee);
    };
  }

  function statement(type) {
    if (type == "var") return cont(pushlex("vardef"), vardef1, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), expect("("), pushlex(")"), formaybein, expect(")"),
                                      poplex, statement, poplex);
    if (type == "variable") return cont(pushlex("stat"), maybelabel);
    if (type == "switch") return cont(expect("("), expression, expect(")"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                        statement, poplex, popcontext);
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeoperator);
    if (type == "function") return cont(functiondef);
    if (type == "keyword c") return cont(maybeexpression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeoperator);
    if (type == "operator") return cont(expression);
    if (type == "[") return cont(pushlex("]"), commasep(expression, "]"), poplex, maybeoperator);
    if (type == "{") return cont(pushlex("}"), commasep(objprop, "}"), poplex, maybeoperator);
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }
    
  function maybeoperator(type, value) {
    if (type == "operator" && /\+\+|--/.test(value)) return cont(maybeoperator);
    if (type == "operator") return cont(expression);
    if (type == ";") return;
    if (type == "(") return cont(pushlex(")"), commasep(expression, ")"), poplex, maybeoperator);
    if (type == ".") return cont(property, maybeoperator);
    if (type == "[") return cont(pushlex("]"), expression, expect("]"), poplex, maybeoperator);
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperator, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type) {
    if (type == "variable") cx.marked = "property";
    if (atomicTypes.hasOwnProperty(type)) return cont(expect(":"), expression);
  }
  function commasep(what, end) {
    function proceed(type) {
      if (type == ",") return cont(what, proceed);
      if (type == end) return cont();
      return cont(expect(end));
    }
    return function commaSeparated(type) {
      if (type == end) return cont();
      else return pass(what, proceed);
    };
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function vardef1(type, value) {
    if (type == "variable"){register(value); return cont(vardef2);}
    return cont();
  }
  function vardef2(type, value) {
    if (value == "=") return cont(expression, vardef2);
    if (type == ",") return cont(vardef1);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef1, forspec2);
    if (type == ";") return pass(forspec2);
    if (type == "variable") return cont(formaybein);
    return pass(forspec2);
  }
  function formaybein(type, value) {
    if (value == "in") return cont(expression);
    return cont(maybeoperator, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in") return cont(expression);
    return cont(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushlex(")"), pushcontext, commasep(funarg, ")"), poplex, statement, popcontext);
  }
  function funarg(type, value) {
    if (type == "variable") {register(value); return cont();}
  }

  // Interface

  return {
    startState: function(basecolumn) {
      return {
        tokenize: jsTokenBase,
        reAllowed: true,
        kwAllowed: true,
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: null,
        context: null,
        indented: 0
      };
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
      }
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.reAllowed = type == "operator" || type == "keyword c" || type.match(/^[\[{}\(,;:]$/);
      state.kwAllowed = type != '.';
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize != jsTokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical,
          type = lexical.type, closing = firstChar == type;
      if (type == "vardef") return lexical.indented + 4;
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "stat" || type == "form") return lexical.indented + indentUnit;
      else if (lexical.info == "switch" && !closing)
        return lexical.indented + (/^(?:case)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricChars: "{}"
  };
});

CodeMirror.defineMIME("text/ceylon", "ceylon");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
