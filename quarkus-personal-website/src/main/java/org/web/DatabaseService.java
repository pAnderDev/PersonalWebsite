package org.web;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;


public class DatabaseService {
    @Inject MongoClient mongoClient;

    public Document getCVData() {
        MongoDatabase db = mongoClient.getDatabase("personal-website-db");
        MongoCollection<Document> collection = db.getCollection("cv-data");
        Document cvData = collection.find().first();
        return cvData;
    }
}