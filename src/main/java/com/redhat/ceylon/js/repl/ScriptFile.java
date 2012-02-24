package com.redhat.ceylon.js.repl;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import com.redhat.ceylon.compiler.typechecker.io.VirtualFile;

/** The Virtual file used as input for the compiler.
 * 
 * @author Tako Schotanus
 */
class ScriptFile implements VirtualFile {
    private String script;
    public ScriptFile(String script) {
        this.script = script;
    }
    @Override
    public boolean isFolder() {
        return false;
    }
    @Override
    public String getName() {
        return "SCRIPT.ceylon";
    }
    @Override
    public String getPath() {
        return getName();
    }
    @Override
    public InputStream getInputStream() {
        try {
            return new ByteArrayInputStream(script.getBytes("UTF-8"));
        } catch (UnsupportedEncodingException e) {
            return new ByteArrayInputStream(script.getBytes());
        }
    }
    @Override
    public List<VirtualFile> getChildren() {
        return new ArrayList<VirtualFile>(0);
    }
    @Override
    public int hashCode() {
        return getPath().hashCode();
    }
    @Override
    public boolean equals(Object obj) {
        if (obj instanceof VirtualFile) {
            return ((VirtualFile) obj).getPath().equals(getPath());
        }
        else {
            return super.equals(obj);
        }
    }
}