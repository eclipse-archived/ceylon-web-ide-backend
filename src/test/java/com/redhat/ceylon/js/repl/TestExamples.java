package com.redhat.ceylon.js.repl;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;

import org.junit.Test;

import com.redhat.ceylon.cmr.api.RepositoryManager;
import com.redhat.ceylon.cmr.ceylon.CeylonUtils;
import com.redhat.ceylon.compiler.Options;
import com.redhat.ceylon.compiler.js.JsCompiler;
import com.redhat.ceylon.compiler.js.Stitcher;
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
        File tmpsrc = File.createTempFile("ceylon", "src");
        tmpsrc.delete();
        tmpsrc.mkdir();
        tmpsrc.deleteOnExit();
        int count=0;
        for (File f : srcdir.listFiles()) {
            File dst = new File(tmpsrc, f.getName());
            PrintWriter fout = new PrintWriter(new FileWriter(dst));
            fout.printf("shared void caca_%d(){", count++);
            BufferedReader fin = new BufferedReader(new FileReader(f));
            String jsline = null;
            while ((jsline = fin.readLine()) != null) {
                if (!jsline.contains("=require('")) {
                    fout.println(jsline);
                }
            }
            fout.println("}");
            fout.close();
            fin.close();
        }
        args.addAll(Arrays.asList("-src", tmpsrc.getAbsolutePath(),
                "-optimize",
                "-rep", "src/main/webapp/scripts/modules",
                "-out", tmpout.getAbsolutePath()));
        Options opts = Options.parse(args);
        TypeCheckerBuilder tcb = new TypeCheckerBuilder().addSrcDirectory(tmpsrc);
        final RepositoryManager repoman = CeylonUtils.repoManager()
                .systemRepo(opts.getSystemRepo())
                .userRepos(opts.getRepos())
                .outRepo(opts.getOutDir())
                .buildManager();
        tcb.setRepositoryManager(repoman);
        tcb.moduleManagerFactory(new JsModuleManagerFactory());
        TypeChecker tc = tcb.getTypeChecker();
        tc.process();
        JsCompiler jsc = new JsCompiler(tc, opts);
        jsc.stopOnErrors(false);
        if (jsc.generate()) {
            System.out.println("OK");
        } else {
            jsc.printErrors(System.out);
        }
    }

}
