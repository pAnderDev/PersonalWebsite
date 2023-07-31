package org.web;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

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