package com.redhat.ceylon.js.codeshare;

import java.net.UnknownHostException;
import java.util.Date;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.Mongo;
import com.mongodb.MongoException;
import com.mongodb.MongoOptions;
import com.mongodb.ServerAddress;
import com.redhat.ceylon.js.repl.CodeKeyGenerator;
import com.redhat.ceylon.js.repl.CodeStorage;

/** This component stored code snippets using MongoDB.
 * 
 * @author Enrique Zamudio
 */
@ApplicationScoped @Default
public class MongoStorage implements CodeStorage {

    private Mongo mongo;
    private DB db;

    public MongoStorage() throws UnknownHostException, MongoException {
        System.out.println("Using MongoDB storage");
        String host = System.getenv("OPENSHIFT_MONGODB_DB_HOST");
        String sport = System.getenv("OPENSHIFT_MONGODB_DB_PORT");
        String dbname = System.getenv("OPENSHIFT_GEAR_NAME");
        if (dbname==null) {
            dbname="ceyloncodez";
        }
        String user = System.getenv("OPENSHIFT_MONGODB_DB_USERNAME");
        String password = System.getenv("OPENSHIFT_MONGODB_DB_PASSWORD");
        int port = sport == null ? 27017 : Integer.decode(sport);
        if (host == null) {
            host = "127.0.0.1";
        }
        MongoOptions opts = new MongoOptions();
        opts.connectTimeout=1000;
        opts.socketTimeout=5000;
        mongo = new Mongo(new ServerAddress(host, port), opts);
        db = mongo.getDB(dbname);
        if (user != null && password!=null) {
            if (!db.authenticate(user, password.toCharArray())) {
                throw new IllegalStateException("MongoDB AUTH failed");
            }
        }
    }

    @Override
    public String storeCode(final String code, final String ip) {
        String key = CodeKeyGenerator.generateKey(code);
        BasicDBObject snip = new BasicDBObject();
        snip.put("key", key);
        DBCollection coll = db.getCollection("codez");
        DBCursor res = coll.find(snip);
        if (!res.hasNext()) {
            //Only store it if it's not already stored
            snip.put("code", code);
            snip.put("created", new Date());
            snip.put("ip", ip);
            coll.insert(snip);
            return key;
        }
        return key;
    }

    @Override
    public String retrieveCode(String key, String ip) {
        DBCollection coll = db.getCollection("codez");
        DBCursor res = coll.find(new BasicDBObject("key", key));
        return res.hasNext() ?  res.next().get("code").toString() : null;
    }

}
