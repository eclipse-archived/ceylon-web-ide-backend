package com.redhat.ceylon.js.util;

import java.util.Map;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

/** Hover docs utilities.
 * 
 * @author Enrique Zamudio
 */
public class DocUtils {

    /** Transforms the reference map into a list of locations in a format that CodeMirror can understand. */
    public static JSONArray referenceMapToList(Map<String, Integer> refs) {
        JSONArray rval = new JSONArray();
        for (Map.Entry<String, Integer> entry : refs.entrySet()) {
            JSONObject ref = locationToMap(entry.getKey(), false);
            ref.put("ref", entry.getValue());
            rval.add(ref);
        }
        return rval;
    }

    /** Transforms a location of form "r:c-r:c" or just "r:c" into a map that CodeMirror can understand.
     * @param location A string in the form "r:c-r:c" or "r:c".
     * @param forceEnd if location is only r:c and this flag is true, the same position is used for the 'end' property. */
    public static JSONObject locationToMap(String location, boolean forceEnd) {
        String[] parts = location.split("-");
        JSONObject locs = new JSONObject();
        locs.put("from", encodePosition(parts[0]));
        if (parts.length == 2) {
            locs.put("to", encodePosition(parts[1]));
        } else if (forceEnd) {
            locs.put("to", locs.get("from"));
        }
        return locs;
    }

    public static JSONObject encodePosition(String pos) {
        String[] rc = pos.split(":");
        JSONObject m = new JSONObject();
        if (rc.length == 2) {
            m.put("line", Integer.parseInt(rc[0], 10));
            m.put("ch", Integer.parseInt(rc[1], 10));
        }
        return m;
    }
}
