package com.redhat.ceylon.ide.web;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import org.junit.Test;

import com.redhat.ceylon.cmr.api.RepositoryManager;
import com.redhat.ceylon.cmr.ceylon.CeylonUtils;
import com.redhat.ceylon.compiler.js.util.Options;
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
        Options opts = new Options().outRepo(tmpout.getAbsolutePath()).addSrcDir("src/main/ceylon")
                .addSrcDir(tmpRoot.getAbsolutePath()).addRepo("src/main/webapp/scripts/modules");
        final RepositoryManager repoman = CeylonUtils.repoManager()
                .systemRepo(opts.getSystemRepo())
                .userRepos(opts.getRepos())
                .outRepo(opts.getOutRepo())
                .buildManager();
        for (File f : srcdir.listFiles()) {
            if (f.isDirectory()) {
                System.out.println("Skipping directory " + f);
                continue;
            }
            File dst = new File(tmpsrc, f.getName());
            PrintWriter fout = new PrintWriter(new FileWriter(dst));
            boolean isSpecial = f.getName().equals("module.ceylon") || f.getName().equals("package.ceylon");
            BufferedReader fin = new BufferedReader(new FileReader(f));
            String jsline = fin.readLine();
            //Contents of each file need to be inside a top-level method
            //Unless it's marked like this
            isSpecial |= "//$webrun_wrapped".equals(jsline) || jsline.startsWith("import ");
            if (!isSpecial) {
                fout.printf("shared void caca_%d(){", count++);
            }
            fout.println(jsline);
            while ((jsline = fin.readLine()) != null) {
                fout.println(jsline);
            }
            fin.close();
            if (!isSpecial) {
                fout.println("}");
            }
            fout.close();
            TypeCheckerBuilder tcb = new TypeCheckerBuilder()
                .addSrcDirectory(tmpRoot)
                .moduleManagerFactory(new JsModuleManagerFactory("UTF-8"));
            tcb.setRepositoryManager(repoman);
            TypeChecker tc = tcb.getTypeChecker();
            tc.process();
            dst.delete();
        }
    }

}
