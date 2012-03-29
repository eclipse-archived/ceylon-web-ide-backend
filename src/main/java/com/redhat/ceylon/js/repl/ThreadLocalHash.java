package com.redhat.ceylon.js.repl;

import java.security.GeneralSecurityException;
import java.security.MessageDigest;

public class ThreadLocalHash extends ThreadLocal<MessageDigest> {

    @Override
    protected MessageDigest initialValue() {
        try {
            return MessageDigest.getInstance("MD5");
        } catch (GeneralSecurityException ex) {
            System.err.println("Can't create MD5 MessageDigest!");
        }
        return null;
    }
}
