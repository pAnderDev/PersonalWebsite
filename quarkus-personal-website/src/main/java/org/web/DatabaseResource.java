package org.web;

import java.io.InputStream;

import javax.swing.text.Document;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;


public class DatabaseResource {
    @Inject MongoClient mongoClient;

    public Document getCVData() {
        MongoDatabase db = mongoClient.getDatabase("personal-website-db");
        MongoCollection<Document> collection = db.getCollection("cv-data");
        Document cvData = collection.find().first();
        return cvData;
    }
}