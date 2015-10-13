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
public class ScriptFile implements VirtualFile {
    private String name;
    private String script;
    private ArrayList<VirtualFile> children;
    private boolean folder;
    private ScriptFile parent;
    public ScriptFile(String name, String script) {
        this.name = name;
        this.script = script;
        this.children = new ArrayList<VirtualFile>(0);
        this.folder = false;
    }
    public ScriptFile(String name, ScriptFile... children) {
        this.name = name;
        this.children = new ArrayList<VirtualFile>(children.length);
        for (ScriptFile f : children) {
            f.setParent(this);
            this.children.add(f);
        }
        this.folder = true;
    }
    private void setParent(ScriptFile parent) {
        this.parent = parent;
    }
    @Override
    public boolean exists() {
        return true;
    }
    @Override
    public boolean isFolder() {
        return folder;
    }
    @Override
    public String getName() {
        return name;
    }
    @Override
    public String getPath() {
        return (parent != null) ? parent.getPath() + "/" + name : name;
    }
    @Override
    public InputStream getInputStream() {
        if (script != null) {
            try {
                return new ByteArrayInputStream(script.getBytes("UTF-8"));
            } catch (UnsupportedEncodingException e) {
                return new ByteArrayInputStream(script.getBytes());
            }
        } else {
            return null;
        }
    }
    @Override
    public List<VirtualFile> getChildren() {
        return children;
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
    @Override
    public int compareTo(VirtualFile o) {
        return -1;
    }
}