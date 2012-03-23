package com.redhat.ceylon.js.repl;

import java.util.Arrays;
import java.util.List;

import junit.framework.Assert;

import org.junit.Test;

public class TestKeyGenerator {

    private List<String> plain = Arrays.asList("", "f", "fo", "foo", "foob", "fooba", "foobar");
    private List<String> enc = Arrays.asList(
            "1B2M2Y8AsgTpgAmY7PhCfg", "j6FM3XVPkcxlVMnnGSnM5w", "7tgHAkk5uAgIPwAxpW6Ycg",
            "rL0Y20zC-Fzt72VPzMSk2A", "0IcaK1PGLeXgRv7eQvP3qw", "c8-IoLShjIijmW-j1baaRg", "OFj2IjCsPJFfMAxmQxLGPw");

    @Test
    public void testVectors() {
        for (int i=0; i < plain.size(); i++) {
            String sp = plain.get(i);
            String se = enc.get(i);
            Assert.assertEquals(se, CodeKeyGenerator.generateKey(sp));
        }
    }
}
