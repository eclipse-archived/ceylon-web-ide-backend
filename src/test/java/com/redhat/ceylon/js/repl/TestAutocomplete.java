package com.redhat.ceylon.js.repl;

import java.io.File;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.TypeCheckerBuilder;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.js.util.CompilerUtils;

@RunWith(Parameterized.class)
public class TestAutocomplete {

    private final AutocompleteVisitor assist;
    private final String nodeText;
    private final String checkCompletion;

    @Parameters
    public static Collection<Object[]> sources() {
        return Arrays.asList(new Object[][]{
            {"void f(){pri", "print" },
            {"void f(){\"x\".ini", "initial" },
            {"String[] strings; st",  "strings" },
            {"void f(String? maybe){if (exists m",   "maybe" },
            {"void f(){\"x\".",    "reversed" },
        });
    }

    public TestAutocomplete(String text, String found) {
        TypeChecker tc = new TypeCheckerBuilder().verbose(false).addSrcDirectory(CompilerUtils.createScriptSource(text)).getTypeChecker();
        tc.process();
        nodeText = text;
        checkCompletion = found;
        assist = new AutocompleteVisitor(1, text.length()-1, tc);
    }

    @Test
    public void testCompletions() {
        final Node node = assist.findNode();
        //Check that we did find a node
        Assert.assertNotNull("No node found at " + assist.getRow() + ":" + assist.getColumn() + " for text " + nodeText, node);
        //Check that the node we found is the one we were actually looking for
        Assert.assertTrue(checkCompletion.startsWith(assist.getTextAtLocation()));
        JSONArray comps = assist.getCompletions();
        String found = null;
        for (Object o : comps) {
            JSONObject json = (JSONObject)o;
            String comp = (String)json.get("insert");
            if (comp.startsWith(checkCompletion)) {
                found = comp;
            }
        }
        //Check that the completions contain the expected one
        Assert.assertNotNull("Completion '" + checkCompletion + "' not found in " + comps, found);
    }

}
