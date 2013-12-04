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

    /** Create a script file with a directory containing the module.ceylon and
     * a script.ceylon with the specified string as its content. */
    public static ScriptFile createScriptSource(String content) {
        return new ScriptFile("ROOT",
                new ScriptFile("web_ide_script",
                        new ScriptFile("SCRIPT.ceylon", content),
                        CompilerUtils.MODULE_FILE
                )
        );
    }

}
