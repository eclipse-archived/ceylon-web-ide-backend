package com.redhat.ceylon.js.repl;

import java.util.Arrays;
import java.util.Collection;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.TypeCheckerBuilder;
import com.redhat.ceylon.compiler.typechecker.model.Declaration;
import com.redhat.ceylon.js.util.CompilerUtils;
import com.redhat.ceylon.js.util.DocUtils;

@RunWith(Parameterized.class)
public class TestDoc {

    @Parameters
    public static Collection<Object[]> sources() {
        return Arrays.asList(new Object[][]{
            {"void f(){print(1);}", "ceylon.language::print", 1, 13, true},//false },
            {"void f(){String{'a','b'};}", "ceylon.language::String", 1, 13, true},//false },
            {"void f(){print(larger);}", "ceylon.language::larger", 1, 18, true},//false },
            {"void f(){\nvalue i={1,2}.size;}", "ceylon.language::Iterable.size", 2, 17, true},//false },
            {"\"local test\"\nvoid test(){}", "web_ide_script::test", 2, 8, true }
        });
    }

    private final int row;
    private final int col;
    private final String code;
    private final String dname;
    private final boolean local;

    public TestDoc(String sourceCode, String declarationName, int row, int column, boolean isLocal) {
        this.row=row;
        col=column;
        code=sourceCode;
        local=isLocal;
        dname = declarationName;
    }

    @Test
    public void testDocumentation() {
        TypeChecker tc = new TypeCheckerBuilder().verbose(false).addSrcDirectory(
                CompilerUtils.createScriptSource(null, code)).getTypeChecker();
        tc.process();
        final Declaration d = DocUtils.findDeclaration(tc, row, col);
        Assert.assertNotNull("Can't find declaration", d);
        Assert.assertEquals("Declaration found but not what I expected", dname, d.getQualifiedNameString());
        final Map<String,Object> docs = DocUtils.getDocs(d);
        if (local) {
            String doc = (String)docs.get("doc");
            Assert.assertNotNull("No local docs found", doc);
            //Assert.assertTrue("Doc should contain 'local'", doc.contains("local"));
        } else {
            String url = (String)docs.get("url");
            Assert.assertNotNull("No docs found", url);
            String plainName = dname.substring(dname.indexOf("::") + 2);
            Assert.assertTrue("Wrong URL", url.contains(plainName));
        }
    }

}
