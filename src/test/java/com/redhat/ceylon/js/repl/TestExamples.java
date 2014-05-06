package com.redhat.ceylon.js.repl;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import org.junit.Test;

import com.redhat.ceylon.cmr.api.RepositoryManager;
import com.redhat.ceylon.cmr.ceylon.CeylonUtils;
import com.redhat.ceylon.compiler.Options;
import com.redhat.ceylon.compiler.loader.JsModuleManagerFactory;
import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.TypeCheckerBuilder;

/** Test that the examples compile. This is useful after several changes to the language.
 * 
 * @author Enrique Zamudio
 */
public class TestExamples {

    @Test
    public void testExamples() throws IOException {
        final File srcdir = new File("src/main/webapp/examples");
        ArrayList<String> args = new ArrayList<String>();
        File tmpout = File.createTempFile("ceylon", "out");
        tmpout.delete();
        tmpout.mkdir();
        tmpout.deleteOnExit();
        tmpout = tmpout.getParentFile();
        //Copy all files to tmp dir
        File tmpRoot = File.createTempFile("ceylon", "src");
        tmpRoot.delete();
        tmpRoot.mkdir();
        tmpRoot.deleteOnExit();
        int count=0;
        File tmpsrc = new File(tmpRoot, "web_ide_script");
        tmpsrc.mkdir();
        //Contents of each file need to be inside a top-level method
        for (File f : srcdir.listFiles()) {
            File dst = new File(tmpsrc, f.getName());
            PrintWriter fout = new PrintWriter(new FileWriter(dst));
            boolean isSpecial = f.getName().equals("module.ceylon") || f.getName().equals("package.ceylon");
            if (!isSpecial) {
                fout.printf("shared void caca_%d(){", count++);
            }
            BufferedReader fin = new BufferedReader(new FileReader(f));
            String jsline = null;
            while ((jsline = fin.readLine()) != null) {
                fout.println(jsline);
            }
            fin.close();
            if (!isSpecial) {
                fout.println("}");
            }
            fout.close();
        }
        Options opts = new Options().outDir(tmpout.getAbsolutePath()).addSrc("src/main/ceylon")
                .addSrc(tmpRoot.getAbsolutePath()).addRepo("src/main/webapp/scripts/modules");
        final RepositoryManager repoman = CeylonUtils.repoManager()
                .systemRepo(opts.getSystemRepo())
                .userRepos(opts.getRepos())
                .outRepo(opts.getOutDir())
                .buildManager();
        TypeCheckerBuilder tcb = new TypeCheckerBuilder()
                .addSrcDirectory(tmpRoot)
                .moduleManagerFactory(new JsModuleManagerFactory("UTF-8"));
        tcb.setRepositoryManager(repoman);
        TypeChecker tc = tcb.getTypeChecker();
        tc.process();
    }

}
