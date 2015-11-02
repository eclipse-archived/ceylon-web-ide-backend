import ceylon.interop.java {
    CeylonIterable
}
import ceylon.json {
    JsonObject=Object
}

import com.github.rjeschke.txtmark {
    Configuration,
    SpanEmitter,
    Processor {
        process
    }
}
import com.redhat.ceylon.model.typechecker.model {
    Declaration,
    ClassOrInterface,
    Function,
    ModelUtil,
    TypedDeclaration,
    Type,
    Class,
    Interface,
    TypeParameter,
    TypeAlias,
    TypeDeclaration,
    Generic,
    Package,
    Functional
}

import java.lang {
    JSB=StringBuilder
}

String keyword = "<span class='cm-keyword'>";
String variableId = "<span class='cm-variable'>";
String typeId = "<span class='cm-variable-3'>";
String annotationId = "<span class='cm-annotation'>";
String end = "</span>";
String code = "<code class='cm-s-ceylon'>";
String endCode = "</code>";

object spanEmitter satisfies SpanEmitter {
    shared actual void emitSpan(JSB result, String content) {
        if (exists bar = content.firstOccurrence('|')) {
            result.append(content[0:bar]);
        }
        else {
            result.append("<code>")
                  .append(content)
                  .append("</code>");
        }
    }
}

Configuration markdownConfig 
        = Configuration.builder()
        .forceExtentedProfile()
        .setEncoding("UTF-8")
        .setSpecialLinkEmitter(spanEmitter)
        .build();

JsonObject getDocs(Declaration? declaration) {
    value json = JsonObject();
    if (exists declaration) {
        json.put("name", declaration.qualifiedNameString);
        /*value pack = declaration.unit.\ipackage;
        if (pack.\imodule.nameAsString == "ceylon.language") {
            json.put("url", fetchHerdDocs(declaration,pack));
        }
        if (!json.defines("url")) {*/
        json.put("doc", 
            getSignature(declaration) + 
            getExtraInfo(declaration) + 
            getDoc(declaration) + 
            getParameterInfo(declaration));
        //}
    }
    return json;
}


String unquote(String doc) {
    if (exists first = doc.first, 
        exists last = doc.last,
        first == '"' && last == '"') {
        return doc[1:doc.size-2];
    }
    else {
        return doc;
    }
}

String getDoc(Declaration? declaration) {
    if (!exists declaration) {
        return "";
    }
    value result = StringBuilder();
    for (ann in CeylonIterable(declaration.annotations)) {
        if ("doc" == ann.name 
                && !ann.positionalArguments.empty) {
            value doc = ann.positionalArguments.get(0).string;
            result.append(process(unquote(doc), markdownConfig));
            break;
        }
    }
    if (result.empty) {
        Declaration refined = declaration.refinedDeclaration;
        if (refined!=declaration) {
            assert (is Declaration container = refined.container);
            result.append("<ul><li>Refines ")
                  .append(code)
                  .append(typeId)
                  .append(container.name)
                  .append(end)
                  .appendCharacter('.')
                  .append(variableId)
                  .append(refined.name)
                  .append(end)
                  .append(endCode)
                  .append("</ul>")
                  .append(getDoc(refined));
        }
    }
    return result.string;
}

String getSignature(Declaration declaration) 
        => "<pre>" + getSignatureInternal(declaration) + "</pre>";

String getSignatureInternal(Declaration declaration) {
    value result = StringBuilder();
    result.append(code);
    if (ModelUtil.isConstructor(declaration)) {
        result.append(keyword)
              .append("new")
              .append(end);
    }
    else if (is Function declaration, declaration.declaredVoid) {
        result.append(keyword)
              .append("void")
              .append(end);
    }
    else if (is TypedDeclaration declaration) {
        if (exists type = declaration.type) {
            result.append(typeId)
                  .append(escape(type))
                  .append(end);
        }
    }
    else if (is Class declaration) {
        result.append(keyword)
              .append("class")
              .append(end);
    }
    else if (is Interface declaration) {
        result.append(keyword)
              .append("interface")
              .append(end);
    }
    else if (is TypeParameter declaration) {
        result.append(keyword)
              .append("given")
              .append(end);
    }
    else if (is TypeAlias declaration) {
        result.append(keyword)
              .append("alias")
              .append(end);
    }
    result.appendCharacter(' ');
    /*if (declaration.isClassOrInterfaceMember()) {
        ClassOrInterface container = (ClassOrInterface) declaration.getContainer();
        result.append(TYPE).append(container.getName()).append(END).append('.');
     }*/
    if (is TypeDeclaration declaration) {
        result.append(typeId)
              .append(declaration.name)
              .append(end);
    }
    else if (is TypedDeclaration declaration) {
        if (declaration.annotation) {
            result.append(annotationId)
                  .append(declaration.name)
                  .append(end);
        }
        else {
            result.append(variableId)
                  .append(declaration.name)
                  .append(end);
        }
    }
    if (is Generic declaration) {
        value typeParameters = declaration.typeParameters;
        if (!typeParameters.empty) {
            result.append("&lt;");
            variable value once = true;
            for (param in CeylonIterable(typeParameters)) {
                if (once) {
                    once = false;
                }
                else{
                    result.append(", ");
                }
                result.append(typeId)
                      .append(param.name)
                      .append(end);
            }
            result.append("&gt;");
        }
    }
    appendParameters(declaration, result);
    result.append(endCode);
    return result.string;
}

String getExtraInfo(Declaration declaration) {
    value result = StringBuilder();
    value container = declaration.container;
    if (is Package container) {
        if (exists name = container.qualifiedNameString) {
            result.append("<p>Member of package ")
                  .append(code)
                  .append(name)
                  .append(endCode)
                  .append(".</p>");
        }
    }
    else if (declaration.classOrInterfaceMember) {
        assert (is Declaration container);
        result.append("<p>Member of ")
              .append(code)
              .append(typeId)
              .append(container.name)
              .append(end)
              .append(endCode)
              .append(".</p>");
    }
    if (is Class declaration) {
        if (exists extendedType=declaration.extendedType) {
            result.append("<ul><li>Extends ")
                  .append(code)
                  .append(typeId)
                  .append(escape(extendedType))
                  .append(end)
                  .append(endCode)
                  .append(".</ul>");
        }
    }
    if (is TypeDeclaration declaration,
            declaration is ClassOrInterface || 
            declaration is TypeParameter) {
        if (!declaration.satisfiedTypes.empty) {
            result.append("<ul><li>Satisfies ")
                  .append(code);
            variable value first = true;
            for (type in CeylonIterable(declaration.satisfiedTypes)) {
                if (first) {
                    first = false;
                }
                else {
                    result.append(" & ");
                }
                result.append(typeId)
                      .append(escape(type))
                      .append(end);
            }
            result.append(endCode)
                  .append(".</ul>");
        }
    }
    return result.string;
}

void appendParameters(Declaration declaration, StringBuilder result) {
    if (is Functional declaration) {
        for (parameterList in CeylonIterable(declaration.parameterLists)) {
            result.append("(");
            variable value once = true;
            for (param in CeylonIterable(parameterList.parameters)) {
                if (once) {
                    once = false;
                }
                else{
                    result.append(", ");
                }
                if (param.declaredVoid) {
                    result.append(keyword)
                          .append("void")
                          .append(end);   
                }
                else if (exists type = param.type) {
                    value unit 
                            = (declaration of Declaration).unit;
                    value t = if (param.sequenced) 
                            then unit.getIteratedType(type) 
                            else type;
                    result.append(typeId)
                          .append(escape(t))
                          .append(end);
                    if (param.sequenced) {
                        result.append(param.atLeastOne then "+" else "*");
                    }
                }
                result.append(" ")
                      .append(variableId)
                      .append(param.name)
                      .append(end);
                appendParameters(param.model, result);
            }
            result.append(")");
        }
    }
}

String getParameterInfo(Declaration declaration) {
    value result = StringBuilder();
    for (ann in CeylonIterable(declaration.annotations)) {
        value positionalArguments = ann.positionalArguments;
        if ("see" == ann.name 
                && !positionalArguments.empty) {
            result.append("<p>See ");
            variable value first = true;
            for (name in CeylonIterable(positionalArguments)) {
                if (first) {
                    first = false;
                }
                else {
                    result.append(", ");
                }
                result.append("<code>")
                      .append(name.string)
                      .append("</code>");
            }
            result.append(".</p>");
        }
    }
    if (is TypedDeclaration declaration) {
        result.append("<ul><li>Returns ")
                .append(code)
                .append(typeId)
                .append(escape(declaration.type))
                .append(end)
                .append(endCode)
                .append("</ul>");
    }
    for (ann in CeylonIterable(declaration.annotations)) {
        value positionalArguments = ann.positionalArguments;
        if ("throws" == ann.name 
                && !positionalArguments.empty) {
            value type = positionalArguments.get(0);
            result.append("<ul><li>Throws ")
                  .append(code)
                  .append(typeId)
                  .append(type.string)
                  .append(end)
                  .append(endCode);
            if (positionalArguments.size()>1) {
                value doc = positionalArguments.get(1).string;
                result.append("<p>")
                      .append(process(unquote(doc), markdownConfig))
                      .append("</p>");
            }
            result.append("</ul>");
        }
    }
    if (is Functional declaration) {
        result.append("<ul>");
        for (parameterList in CeylonIterable(declaration.parameterLists)) {
            for (param in CeylonIterable(parameterList.parameters)) {
                value model = param.model;
                result.append("<li><p>Accepts ")
                      .append(getSignatureInternal(model))
                      .append("</p>")
                      .append(getDoc(model));
            }
        }
        result.append("</ul>");
    }
    return result.string;
}

String escape(Type type) 
        => type.asString()
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;");

/*String herdUrl = "http://modules.ceylon-lang.org/repo/1/";
 
 String fetchHerdDocs(Declaration d, Package p) {
    value sb = StringBuilder().append(herdUrl);
    sb.append(p.nameAsString.replace("\\.", "/"))
            .appendCharacter('/');
    sb.append(Versions.\iCEYLON_VERSION_NUMBER)
            .append("/module-doc/");
    if (d.toplevel) {
        switch (d)
        case (is ClassOrInterface) {
            sb.append(d.name)
                    .append(".type.html");
        }
        case (is Function) {
            sb.append("index.html#")
                    .append(d.name);
        }
        case (is Value) {
            sb.append(d.name)
                    .append(".object.html");
        }
        else {}
    }
    else if (is ClassOrInterface c = d.container, 
        c.toplevel) {
        sb.append(c.name)
                .append(".type.html")
                .append("#")
                .append(d.name);
    }
    return sb.string;
 }*/
