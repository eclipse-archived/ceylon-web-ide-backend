/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Apache License, Version 2.0 which is available at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: Apache-2.0 
 ********************************************************************************/
import ceylon.interop.java {
    JavaList
}
import ceylon.json {
    parse,
    JsonObject=Object,
    JsonArray=Array
}
import ceylon.http.server {
    Request,
    Response
}

import com.redhat.ceylon.compiler.js {
    JsCompiler
}
import com.redhat.ceylon.compiler.js.util {
    JsOutput,
    Options
}
import com.redhat.ceylon.compiler.js.loader {
    ModelEncoder {
        encode=encodeModel
    }
}
import com.redhat.ceylon.compiler.typechecker.io {
    VirtualFile
}
import com.redhat.ceylon.model.typechecker.model {
    Module
}

import java.io {
    CharArrayWriter
}
import java.util {
    Collections {
        singletonList
    }
}

Options options = 
        Options()
            .comment(false)
            .modulify(false)
            .addSrcDir("ROOT");

void translate(Request request, Response response) {
    try {
        value json = request.read();
        assert (is JsonObject result = parse(json));
        value scriptFile = createScriptSource(result);
        value files = createFilesList(result);
        
        value typecheckOnly = result.get("tc") exists;
        
        value typeChecker = newTypeChecker(scriptFile);
        typeChecker.process();
        
        value charArrayWriter 
                = CharArrayWriter(json.size * 2);
        
        if (!typecheckOnly && typeChecker.errors == 0) {
            object extends JsCompiler(typeChecker, options) {
                charArrayWriter.write("var ex$={};");
                initSourceDirectories(Options opts) 
                        => singletonList(
                            scriptFile of VirtualFile);
                newJsOutput(Module mod) 
                        => object 
                        extends JsOutput(mod, false) {
                    writer => charArrayWriter;
                    writeModelFile() => noop();
                    writeModelRetriever() 
                            => encode(mmg.model, 
                                      charArrayWriter);
                };
                shared actual Integer finish() {
                    writeJSSources(charArrayWriter, result);
                    charArrayWriter.flush();
                    charArrayWriter.close();
                    return 0;
                }
            }
            .stopOnErrors(true)
            .setSourceFiles(JavaList(files))
            .generate();
        }
        
        value cev = CollectErrorVisitor(typeChecker);
        cev.process();
        JsonObject codeOrErrors;
        if (cev.errors == 0 && !typecheckOnly) {
            codeOrErrors = JsonObject {
                "code" -> charArrayWriter.string
            };
        }
        else if (cev.errors + cev.warnings > 0) {
            codeOrErrors = JsonObject {
                "errors" -> cev.json
            };
        }
        else {
            codeOrErrors = JsonObject();
        }
        sendJsonResponse(response, codeOrErrors);
    }
    catch (ex) {
        response.status = 500;
        ex.printStackTrace();
        sendJsonResponse(response, 
            JsonArray {
                "Service error: ``ex.message``"
            });
    }
}
