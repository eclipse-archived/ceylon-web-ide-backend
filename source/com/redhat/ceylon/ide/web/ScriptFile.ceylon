import ceylon.interop.java {
    javaString
}

import com.redhat.ceylon.compiler.typechecker.io {
    VirtualFile
}

import java.io {
    ByteArrayInputStream,
    InputStream,
    UnsupportedEncodingException
}
import java.util {
    ArrayList
}

class ScriptFile satisfies VirtualFile {
    
    shared actual String name;
    shared actual ArrayList<VirtualFile> children;
    shared actual Boolean folder;
    shared String? script;
    shared actual String path;
    
    shared new (String name, String path, String script) {
        this.name = name;
        this.script = script;
        this.children = ArrayList<VirtualFile>(0);
        this.folder = false;
        this.path = path;
    }
    
    shared new withChildren(String name, String path, 
            {ScriptFile*} children) {
        this.name = name;
        this.children = ArrayList<VirtualFile>();
        for (file in children) {
            this.children.add(file);
        }
        this.folder = true;
        this.script = null;
        this.path = path;
    }
    
    \iexists() => true;
    
    shared actual InputStream? inputStream {
        if (exists script) {
            value js = javaString(script);
            try {
                return ByteArrayInputStream(js.getBytes("UTF-8"));
            }
            catch (UnsupportedEncodingException e) {
                return ByteArrayInputStream(js.bytes);
            }
        }
        else {
            return null;
        }
    }
    
    equals(Object obj) 
            => if (is VirtualFile obj) 
            then obj.path==path 
            else super.equals(obj);
    
    hash => path.hash;
    
    compareTo(VirtualFile o) => -1;
}
