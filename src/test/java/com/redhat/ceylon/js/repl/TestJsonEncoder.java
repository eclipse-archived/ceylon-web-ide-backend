package com.redhat.ceylon.js.repl;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;

public class TestJsonEncoder {

    private final SimpleJsonEncoder json = new SimpleJsonEncoder();

    @Test
    public void testEncode() {
        Map<String, Object> empty = Collections.emptyMap();
        assertEquals("{}", json.encode(empty));
        empty = new HashMap<String, Object>();
        empty.put("string1", "string");
        empty.put("list", Arrays.asList(new Object[]{"string2", Collections.emptyMap(), "string3"}));
        Map<String,Object> m2 = new HashMap<String, Object>();
        m2.put("string4",1);
        m2.put("list2", Collections.emptyList());
        empty.put("map", m2);
        String expected = "{\"string1\":\"string\",\"map\":{\"list2\":[],\"string4\":\"1\"},\"list\":[\"string2\",{},\"string3\"]}";
        assertEquals(expected, json.encode(empty));
    }

    @Test
    public void testEncodeString() {
        String[] origs = {"plain", "'single quoted'", "\"double quoted\"", "\\backslashed\\", "\\'mixed\\\"" };
        String[] encs = {"\"plain\"", "\"\\\"single quoted\\\"\"", "\"\\\"double quoted\\\"\"", "\"\\\\backslashed\\\\\"",
                "\"\\\\\\\"mixed\\\\\\\"\""};
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i <origs.length; i++) {
            sb.setLength(0);
            json.encodeString(origs[i], sb);
            assertEquals(encs[i], sb.toString());
        }
    }

    @Test
    public void testEncodeList() {
        List<Object> empty = Collections.emptyList();
        StringBuilder sb = new StringBuilder();
        json.encodeList(empty, sb);
        assertEquals("[]", sb.toString());
    }

}
