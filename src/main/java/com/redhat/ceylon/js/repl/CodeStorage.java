package com.redhat.ceylon.js.repl;

/** An interface for components that handle storage for sharing code.
 * 
 * @author Enrique Zamudio
 */
public interface CodeStorage {

    /** Stores a code snippet and returns the key to retrieve it. */
    public String storeCode(String code);

    /** Retrieves the code snippet stored under the specified key, if it exists. */
    public String retrieveCode(String key);

}
