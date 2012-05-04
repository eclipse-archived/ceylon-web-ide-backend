package com.redhat.ceylon.js.repl;

import java.security.MessageDigest;

import com.redhat.ceylon.js.util.ThreadLocalHash;

/** Contains the method to generate a unique key for each code snippet, based on a hashing function.
 * 
 * @author Enrique Zamudio
 */
public class CodeKeyGenerator {

    private static final ThreadLocalHash md5 = new ThreadLocalHash();
    private static final String B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

    /** Generates a key for the specified code snippet. */
    public static String generateKey(String code) {
        MessageDigest md = md5.get();
        md.reset();
        md.update(code.getBytes());
        return encode(md.digest());
    }

    /** Encodes 16 bytes as a string using Base64. */
    public static String encode(byte[] input) {
        StringBuilder buf = new StringBuilder(22);

        for (int i = 0; i < 16; i += 3) {
            int indice = -1;
            int uno = 0, dos = 0, tres = 0;
            uno = input[i] & 0xff;

            buf.append(B64.charAt(uno >> 2));

            indice = (uno & 0x03) << 4;
            if (i + 1 < 16) {
                //Leer el segundo byte y pasarlo a positivo
                dos = input[i + 1] & 0xff;
                //Contar tambien los primeros 4 bits del segundo byte
                indice |= (dos & 0xf0) >> 4;
            }
            buf.append(B64.charAt(indice));

            //Leer el tercer byte y pasarlo a positivo
            if (i + 2 < 16) {
                tres = input[i + 2] & 0xff;
                //Los ultimos 4 del segundo y los primeros 2 del tercero
                indice = ((dos & 0x0f) << 2) | ((tres & 0xC0) >> 6);
                buf.append(B64.charAt(indice));
                //los ultimos 6 del tercero
                indice = tres & 0x3f;
                buf.append(B64.charAt(indice));
            } else if (i+2 == 16) {
                indice = (dos & 0x0f) << 2;
                buf.append(B64.charAt(indice));
            }
        }
        return buf.toString();
    }

}
