package com.redhat.ceylon.js.util;

import java.util.ArrayList;
import java.util.List;

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
     * When several scripts get passed the first one will be assumed to be the
     * module descriptor.
     */
    public static ScriptFile createScriptSource(String modName, String script, String... scripts) {
        // If we have a "script" we just add it as the first element of the "scripts" array
        // (this is all just to make the usage if this method a bit easier, it's better to
        // have a bit more complexity here instead of at all the call sites)
        if (script != null) {
            if (scripts != null && scripts.length > 0) {
                String[] tmp = new String[scripts.length + 1];
                tmp[0] = script;
                System.arraycopy(scripts, 0, tmp, 1, scripts.length);
                scripts = tmp;
            } else {
                scripts = new String[] {script};
            }
        }
        // First we create an array holding the scripts themselves
        ScriptFile[] files;
        if (scripts.length > 1) {
            files = new ScriptFile[scripts.length];
            files[0] = new ScriptFile("module.ceylon", scripts[0]);
            for (int i=1; i < scripts.length; i++) {
                files[i] = new ScriptFile("SCRIPT" + i + ".ceylon", scripts[i]);
            }
        } else {
            files = new ScriptFile[] {
                    CompilerUtils.MODULE_FILE,
                    new ScriptFile("SCRIPT.ceylon", scripts[0])
            };
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

}
