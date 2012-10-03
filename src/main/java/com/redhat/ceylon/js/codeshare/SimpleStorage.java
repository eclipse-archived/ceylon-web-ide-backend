package com.redhat.ceylon.js.codeshare;

import java.util.concurrent.ConcurrentHashMap;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Alternative;
import javax.enterprise.inject.Default;

import com.redhat.ceylon.js.repl.CodeKeyGenerator;
import com.redhat.ceylon.js.repl.CodeStorage;

/** A simple option to store code snippets: an internal Map.
 * 
 * @author Enrique Zamudio
 */
//@ApplicationScoped @Default
@Alternative
public class SimpleStorage implements CodeStorage {

    private final ConcurrentHashMap<String, String> tehcodez = new ConcurrentHashMap<String, String>();

    public SimpleStorage() {
        System.out.println("Using simple code sharing storage");
    }

    @Override
    public String storeCode(String code, String ip) {
        String key = CodeKeyGenerator.generateKey(code);
        tehcodez.putIfAbsent(key, code);
        return key;
    }

    @Override
    public String retrieveCode(String key, String ip) {
        return tehcodez.get(key);
    }

}
