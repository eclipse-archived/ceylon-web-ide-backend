package com.redhat.ceylon.js.util;

import static org.junit.Assert.*;

import java.io.IOException;
import java.io.StringWriter;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;

import com.redhat.ceylon.compiler.SimpleJsonEncoder;

public class TestJsonEncoder {

    private final SimpleJsonEncoder json = new SimpleJsonEncoder();

    @Test
    public void testEncode() throws IOException {
        StringWriter sw = new StringWriter();
        Map<String, Object> empty = Collections.emptyMap();
        json.encode(empty, sw);
        assertEquals("{}", sw.toString());
        empty = new HashMap<String, Object>();
        empty.put("string1", "string");
        empty.put("list", Arrays.asList(new Object[]{"string2", Collections.emptyMap(), "string3"}));
        Map<String,Object> m2 = new HashMap<String, Object>();
        m2.put("string4",1);
        m2.put("list2", Collections.emptyList());
        empty.put("map", m2);
        String expected = "{\"string1\":\"string\",\"map\":{\"list2\":[],\"string4\":1},\"list\":[\"string2\",{},\"string3\"]}";
        sw = new StringWriter();
        json.encode(empty, sw);
        assertEquals(expected, sw.toString());
    }

    @Test
    public void testEncodeString() throws IOException {
        String[] origs = {"plain", "'single quoted'", "\"double quoted\"", "\\backslashed\\", "\\'mixed\\\"" };
        String[] encs = {"\"plain\"", "\"'single quoted'\"", "\"\\\"double quoted\\\"\"", "\"\\\\backslashed\\\\\"",
                "\"\\\\'mixed\\\\\\\"\""};
        for (int i = 0; i <origs.length; i++) {
            StringWriter sb = new StringWriter();
            json.encodeString(origs[i], sb);
            assertEquals(encs[i], sb.toString());
        }
    }

    @Test
    public void testEncodeList() throws IOException {
        List<Object> empty = Collections.emptyList();
        StringWriter sb = new StringWriter();
        json.encodeList(empty, sb);
        assertEquals("[]", sb.toString());
    }

}
