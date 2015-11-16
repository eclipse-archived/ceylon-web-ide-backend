import ceylon.json {
    JsonObject=Object
}

import com.redhat.ceylon.cmr.ceylon {
    CeylonUtils
}
import com.redhat.ceylon.compiler.js.loader {
    JsModuleManagerFactory
}
import com.redhat.ceylon.compiler.typechecker {
    TypeCheckerBuilder,
    TypeChecker
}
import com.redhat.ceylon.compiler.typechecker.io.cmr.impl {
    LeakingLogger
}

import java.io {
    File,
    Writer
}

JsModuleManagerFactory moduleManagerFactory 
        = JsModuleManagerFactory("UTF-8");

TypeChecker newTypeChecker(ScriptFile scriptFile)
    => let (repositoryManager 
            = CeylonUtils.repoManager()
                .logger(LeakingLogger())
                .buildManager())
        TypeCheckerBuilder()
            .addSrcDirectory(scriptFile)
            .moduleManagerFactory(moduleManagerFactory)
            .setRepositoryManager(repositoryManager)
            .encoding("UTF-8")
            .typeChecker;

"Creates an in-memory directory hierarchy containing the 
 scripts that get passed. If a single script gets passed we 
 create our own empty `module.ceylon` script with the given 
 module name. If the given module name is `null`, the 
 default name 'web_ide_script' will be used."
ScriptFile createScriptSource(JsonObject data) {
    assert (is String modName 
        = data["modName"] else "web_ide_script");
    assert (is JsonObject jsonFiles = data["files"]);
    value hasModuleDescriptor = 
            jsonFiles.defines("module.ceylon");
    
    variable value files = { 
        for (fileName->jsonFile in jsonFiles) 
        if (is JsonObject jsonFile,
            is String script = jsonFile["content"])
        ScriptFile {
            name = fileName;
            path = "source/``modName``/``fileName``";
            script = script;
        } 
    };
    if (!hasModuleDescriptor) {
        value moduleFile 
                = ScriptFile {
            name = "module.ceylon";
            path = "source/``modName``/module.ceylon";
            script = "module web_ide_script \"1.0.0\" {}";
        };
        files = files.follow(moduleFile);
    }
    
    // Now we create the module hierarchy
    variable value endIndex = modName.size-1;
    while (endIndex>0) {
        value dot = modName.lastOccurrence('.', endIndex) else -1;
        value end = endIndex; //necessary because {} is lazy!
        value children = files; //necessary because {} is lazy!
        files = { 
            ScriptFile.withChildren {
                name = modName[dot+1..end];
                path = "source/" + modName[...end].replace(".", "/");
                children = children;
            }
        };
        endIndex = dot-1;
    }
    // And finally the root to hold it all 
    return ScriptFile.withChildren {
        name = "source";
        path = "source";
        children = files;
    };
}

List<File> createFilesList(JsonObject data) {
    assert (is String modName 
                = data["modName"] else "web_ide_script",
            is JsonObject jsonFiles = data["files"]);
    value files = { 
        for (fileName in jsonFiles.keys) 
        File("source/``modName``/``fileName``") 
    };
    return jsonFiles.defines("module.ceylon") 
        then [*files] 
        else [File("source/``modName``/module.ceylon"), *files];
}

void writeJSSources(Writer writer, JsonObject data) {
    assert (is JsonObject jsonFiles = data["files"]);
    for (fileName in jsonFiles.keys) {
        if (fileName.endsWith(".js")) {
            assert (is JsonObject jsonFile = jsonFiles[fileName],
                    is String script = jsonFile["content"]);
            writer.write(script);
            writer.write("\n");
        }
    }
}

