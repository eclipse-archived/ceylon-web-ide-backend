package com.redhat.ceylon.js.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/** Hover docs utilities.
 * 
 * @author Enrique Zamudio
 */
public class DocUtils {

    /** Transforms the reference map into a list of locations in a format that CodeMirror can understand. */
    public static List<Map<String, Object>> referenceMapToList(Map<String, Integer> refs) {
        ArrayList<Map<String, Object>> rval = new ArrayList<Map<String, Object>>(refs.size());
        for (Map.Entry<String, Integer> entry : refs.entrySet()) {
            Map<String, Object> ref = new HashMap<String, Object>();
            ref.put("loc", locationToMap(entry.getKey(), false));
            ref.put("ref", entry.getValue());
            rval.add(ref);
        }
        return rval;
    }

    /** Transforms a location of form "r:c-r:c" or just "r:c" into a map that CodeMirror can understand.
     * @param location A string in the form "r:c-r:c" or "r:c".
     * @param forceEnd if location is only r:c and this flag is true, the same position is used for the 'end' property. */
    public static Map<String, Map<String, Number>> locationToMap(String location, boolean forceEnd) {
        String[] parts = location.split("-");
        Map<String, Map<String, Number>> locs = new HashMap<String, Map<String, Number>>();
        locs.put("from", encodePosition(parts[0]));
        if (parts.length == 2) {
            locs.put("to", encodePosition(parts[1]));
        } else if (forceEnd) {
            locs.put("to", locs.get("from"));
        }
        return locs;
    }

    public static Map<String, Number> encodePosition(String pos) {
        String[] rc = pos.split(":");
        Map<String, Number> m = new HashMap<String, Number>();
        if (rc.length == 2) {
            m.put("line", Integer.parseInt(rc[0], 10));
            m.put("ch", Integer.parseInt(rc[1], 10));
        }
        return m;
    }
}
