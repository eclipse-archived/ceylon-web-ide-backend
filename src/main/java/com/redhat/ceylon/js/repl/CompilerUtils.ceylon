import ceylon.json {
    JsonObject=Object
}

import java.io {
    File,
    Writer
}
import javax.servlet {
    ServletContext
}
import java.lang {
    JString=String
}
import java.util {
    ArrayList
}
import ceylon.interop.java {
    javaString
}
import com.redhat.ceylon.compiler.typechecker.io.cmr.impl {
    LeakingLogger
}
import com.redhat.ceylon.cmr.ceylon {
    CeylonUtils
}
import com.redhat.ceylon.compiler.loader {
    JsModuleManagerFactory
}
import com.redhat.ceylon.compiler.typechecker {
    TypeCheckerBuilder,
    TypeChecker
}

JsModuleManagerFactory moduleManagerFactory 
        = JsModuleManagerFactory("UTF-8");

ScriptFile moduleFile 
        = ScriptFile {
    name = "module.ceylon";
    path = "ROOT/web_ide_script/module.ceylon";
    script = "module web_ide_script \"1.0.0\" {}";
};

TypeChecker getTypeChecker(ServletContext context, ScriptFile scriptFile) {
    
    value extraUserRepos = ArrayList<JString>();
    value repoPath 
            = context.getRealPath("/WEB-INF/ceylon-repo/system");
    extraUserRepos.add(javaString(repoPath));
    
    value repositoryManager 
            = CeylonUtils.repoManager()
            .extraUserRepos(extraUserRepos)
            .logger(LeakingLogger())
            .buildManager();
    
    return TypeCheckerBuilder()
            .addSrcDirectory(scriptFile)
            .moduleManagerFactory(moduleManagerFactory)
            .setRepositoryManager(repositoryManager)
            .typeChecker;
    
}

"Creates an in-memory directory hierarchy containing the scripts that get passed.
 If a single script gets passed we create our own empty `module.ceylon` script
 with the given module name. If the given module name is `null`, the default name 
 'web_ide_script' will be used."
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
            name = fileName.string;
            path = "ROOT/``modName``/``fileName``";
            script = script.string;
        } 
    };
    if (!hasModuleDescriptor) {
        files = files.follow(moduleFile);
    }
    
    // Now we create the module hierarchy
    variable Integer loc = modName.size;
    while (exists dot = modName.lastOccurrence('.', loc)) {
        value bit = modName[dot+1..loc];
        value path = modName[...loc];
        files = { 
            ScriptFile.withChildren {
                name = bit;
                path = "ROOT/" + path;
                children = files;
            }
        };
        loc = dot-1;
    }
    // And finally the root to hold it all 
    return ScriptFile.withChildren {
        name = "ROOT";
        path = "ROOT";
        children = files;
    };
}

List<File> createFilesList(JsonObject data) {
    assert (is String modName 
                = data["modName"] else "web_ide_script",
            is JsonObject jsonFiles = data["files"]);
    value files = { 
        for (fileName in jsonFiles.keys) 
        File("ROOT/``modName``/``fileName``") 
    };
    return jsonFiles.defines("module.ceylon") 
        then [*files] 
        else [File("module.ceylon"), *files];
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

