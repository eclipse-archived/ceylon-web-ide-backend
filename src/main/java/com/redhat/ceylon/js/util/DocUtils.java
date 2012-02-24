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

    /** Transforms the reference map into a list of locations in a format that ACE can understand. */
    public static List<Object> referenceMapToList(Map<String, Integer> refs) {
        ArrayList<Object> rval = new ArrayList<Object>(refs.size());
        for (Map.Entry<String, Integer> entry : refs.entrySet()) {
            Map<String, Object> ref = new HashMap<String, Object>();
            ref.put("loc", locationToMap(entry.getKey(), false));
            ref.put("ref", entry.getValue());
            rval.add(ref);
        }
        return rval;
    }

    /** Transforms a location of form "r:c-r:c" or just "r:c" into a map that ACE can understand.
     * @param location A string in the form "r:c-r:c" or "r:c".
     * @param forceEnd if location is only r:c and this flag is true, the same position is used for the 'end' property. */
    public static Map<String, Object> locationToMap(String location, boolean forceEnd) {
        String[] parts = location.split("-");
        Map<String, Object> locs = new HashMap<String, Object>();
        locs.put("start", encodePosition(parts[0]));
        if (parts.length == 2) {
            locs.put("end", encodePosition(parts[1]));
        } else if (forceEnd) {
            locs.put("end", locs.get("start"));
        }
        return locs;
    }

    public static Map<String, Object> encodePosition(String pos) {
        String[] rc = pos.split(":");
        Map<String, Object> m = new HashMap<String, Object>();
        if (rc.length == 2) {
            m.put("row", rc[0]);
            m.put("col", rc[1]);
        }
        return m;
    }
}
