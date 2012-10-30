package com.redhat.ceylon.js.util;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;

import com.redhat.ceylon.cmr.api.RepositoryManager;
import com.redhat.ceylon.cmr.ceylon.CeylonUtils;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.TypeCheckerBuilder;
import com.redhat.ceylon.compiler.typechecker.io.cmr.impl.LeakingLogger;
import com.redhat.ceylon.js.repl.DocServlet;
import com.redhat.ceylon.js.repl.ScriptFile;

public class CompilerUtils {

    private CompilerUtils() {
    }

    public static TypeChecker getTypeChecker(ServletContext ctx, ScriptFile src) {
        //Create the repo manager with a link to our local repository
        String repoPath = ctx.getRealPath("/WEB-INF/ceylon-repo/system");
        List<String> extraUserRepos = new ArrayList<String>();
        extraUserRepos.add(repoPath);
        RepositoryManager repositoryManager = CeylonUtils.repoManager()
                .extraUserRepos(extraUserRepos )
                .logger(new LeakingLogger())
                .buildManager();
        
        //Create the typechecker
        TypeCheckerBuilder typeCheckerBuilder = new TypeCheckerBuilder()
                .addSrcDirectory(src)
                .moduleManagerFactory(DocServlet.MMF);
        typeCheckerBuilder.setRepositoryManager(repositoryManager);
        
        return typeCheckerBuilder.getTypeChecker();
    }
}
