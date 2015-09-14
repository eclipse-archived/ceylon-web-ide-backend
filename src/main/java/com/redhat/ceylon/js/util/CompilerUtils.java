package com.redhat.ceylon.js.util;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import com.redhat.ceylon.cmr.api.RepositoryManager;
import com.redhat.ceylon.cmr.ceylon.CeylonUtils;
import com.redhat.ceylon.compiler.loader.JsModuleManagerFactory;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.TypeCheckerBuilder;
import com.redhat.ceylon.compiler.typechecker.io.cmr.impl.LeakingLogger;
import com.redhat.ceylon.js.repl.ScriptFile;

public class CompilerUtils {

    public static final JsModuleManagerFactory MMF = new JsModuleManagerFactory("UTF-8");
    public static final ScriptFile MODULE_FILE = new ScriptFile("module.ceylon",
            "module web_ide_script \"1.0.0\" {}");
    private static final List<String> extraUserRepos = new ArrayList<String>();

    private CompilerUtils() {
    }

    public static TypeChecker getTypeChecker(ServletContext ctx, ScriptFile src) {
        if (extraUserRepos.isEmpty()) {
            synchronized(extraUserRepos) {
                if (extraUserRepos.isEmpty()) {
                    //Create the repo manager with a link to our local repository
                    String repoPath = ctx.getRealPath("/WEB-INF/ceylon-repo/system");
                    extraUserRepos.add(repoPath);
                }
            }
        }
        RepositoryManager repositoryManager = CeylonUtils.repoManager()
                .extraUserRepos(extraUserRepos )
                .logger(new LeakingLogger())
                .buildManager();
        
        //Create the typechecker
        TypeCheckerBuilder typeCheckerBuilder = new TypeCheckerBuilder()
                .addSrcDirectory(src)
                .moduleManagerFactory(MMF);
        typeCheckerBuilder.setRepositoryManager(repositoryManager);
        
        return typeCheckerBuilder.getTypeChecker();
    }

    /**
     * Creates an in-memory directory hierarchy containing the scripts that get passed.
     * If a single script gets passed we create our own empty `module.ceylon` script
     * with the given module name.
     * If the given module name is `null` the default name "web_ide_script" will be used.
     */
    @SuppressWarnings("unchecked")
    public static ScriptFile createScriptSource(Map<String, Object> data) {
        String modName = (String)data.get("modName");
        Map<String, Object> jsonFiles = (Map<String, Object>)data.get("files");
        int size = jsonFiles.size();
        boolean hasModuleDescriptor = jsonFiles.containsKey("module.ceylon");
        ScriptFile[] files = new ScriptFile[hasModuleDescriptor ? size : size + 1];
        int cnt = 0;
        for (String fileName : jsonFiles.keySet()) {
            Map<String, Object> jsonFile = (Map<String, Object>)jsonFiles.get(fileName);
            String script = (String)jsonFile.get("content");
            files[cnt] = new ScriptFile(fileName, script);
            cnt++;
        }
        if (!hasModuleDescriptor) {
            files[size] = CompilerUtils.MODULE_FILE;
        }
        
        // Make sure we have a module name
        if (modName == null) {
            modName = "web_ide_script";
        }
        // Now we create the module hierarchy
        String modParts[] = modName.split("\\.");
        for (int i = modParts.length - 1; i >= 0; i--) {
            files = new ScriptFile[] { new ScriptFile(modParts[i], files) };
        }
        // And finally the root to hold it all 
        return new ScriptFile("ROOT", files);
    }

    /**
     * JavaScript files just get copied directly to the output
     * @throws IOException
     */
    @SuppressWarnings("unchecked")
    public static void writeJSSources(Writer out, Map<String, Object> data) throws IOException {
        Map<String, Object> jsonFiles = (Map<String, Object>)data.get("files");
        for (String fileName : jsonFiles.keySet()) {
            if (fileName.endsWith(".js")) {
                Map<String, Object> jsonFile = (Map<String, Object>)jsonFiles.get(fileName);
                String script = (String)jsonFile.get("content");
                out.write(script);
                out.write('\n');
            }
        }
    }
}
