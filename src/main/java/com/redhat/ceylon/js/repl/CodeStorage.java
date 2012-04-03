package com.redhat.ceylon.js.repl;

/** An interface for components that handle storage for sharing code.
 * 
 * @author Enrique Zamudio
 */
public interface CodeStorage {

    /** Stores a code snippet and returns the key to retrieve it.
     * @param code The code to store
     * @param sourceAddress The IP address of the sender. */
    public String storeCode(String code, String sourceAddress);

    /** Retrieves the code snippet stored under the specified key, if it exists.
     * @param key The key under which the code is stored
     * @param ip The IP address of the lookup request. */
    public String retrieveCode(String key, String ip);

}
