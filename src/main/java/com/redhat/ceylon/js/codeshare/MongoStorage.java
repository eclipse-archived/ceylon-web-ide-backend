package com.redhat.ceylon.js.codeshare;

import java.net.UnknownHostException;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
import com.mongodb.MongoException;
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
        String host = System.getenv("OPENSHIFT_NOSQL_DB_HOST");
        String sport = System.getenv("OPENSHIFT_NOSQL_DB_PORT");
        String dbname = System.getenv("OPENSHIFT_GEAR_NAME");
        if (dbname==null) {
            dbname="ceyloncodez";
        }
        String user = System.getenv("OPENSHIFT_NOSQL_DB_USERNAME");
        String password = System.getenv("OPENSHIFT_NOSQL_DB_PASSWORD");
        int port = sport == null ? 27017 : Integer.decode(sport);
        if (host == null) {
            host = "127.0.0.1";
        }
        mongo = new Mongo(host, port);
        db = mongo.getDB(dbname);
        if (user != null && password!=null) {
            if (!db.authenticate(user, password.toCharArray())) {
                throw new IllegalStateException("MongoDB AUTH failed");
            }
        }
    }

    @Override
    public String storeCode(String code) {
        String key = CodeKeyGenerator.generateKey(code);
        BasicDBObject snip = new BasicDBObject();
        snip.put("key", key);
        snip.put("code", code);
        DBCollection coll = db.getCollection("codez");
        coll.insert(snip);
        return key;
    }

    @Override
    public String retrieveCode(String key) {
        DBCollection coll = db.getCollection("codez");
        DBCursor res = coll.find(new BasicDBObject("key", key));
        return res.hasNext() ?  res.next().get("code").toString() : null;
    }

}
