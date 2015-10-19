import ceylon.interop.java {
    JavaList
}
import ceylon.json {
    parse,
    JsonObject=Object,
    JsonArray=Array
}

import com.redhat.ceylon.compiler.js {
    JsCompiler
}
import com.redhat.ceylon.compiler.js.util {
    JsOutput,
    Options
}
import com.redhat.ceylon.compiler.loader {
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

import javax.servlet.annotation {
    webServlet
}
import javax.servlet.http {
    HttpServlet,
    HttpServletRequest,
    HttpServletResponse
}

Options options = 
        Options()
            .comment(false)
            .modulify(false)
            .addSrcDir("ROOT");

webServlet { urlPatterns = ["/translate"]; }
shared class CeylonToJSTranslationServlet() 
        extends HttpServlet() {
    
    shared actual void doPost(
            HttpServletRequest request, 
            HttpServletResponse response) {
        try {
            value json = readAll(request.inputStream);
            assert (is JsonObject result = parse(json));
            value scriptFile = createScriptSource(result);
            value files = createFilesList(result);
            
            value typecheckOnly = result.get("tc") exists;
            
            value typeChecker = 
                    getTypeChecker {
                        context = request.servletContext;
                        scriptFile = scriptFile;
                    };
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
                            extends JsOutput(mod, "UTF-8", false) {
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
            sendMapResponse(response, codeOrErrors);
        }
        catch (ex) {
            response.status = 500;
            ex.printStackTrace();
            sendListResponse(response, 
                JsonArray {
                    "Service error: ``ex.message``"
                });
        }
    }
    
    
}
