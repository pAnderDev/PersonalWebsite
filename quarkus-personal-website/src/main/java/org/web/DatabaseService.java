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

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;


public class DatabaseService {
    @Inject MongoClient mongoClient;

    private MongoDatabase connect(String collectionName) {
        MongoDatabase db = mongoClient.getDatabase(collectionName);
        return db;
    }

    public Document getCVData() {
        MongoDatabase db = mongoClient.getDatabase("personal-website-db");
        MongoCollection<Document> collection = db.getCollection("cv-data");
        Document cvData = collection.find().first();
        return cvData;
    }

    private void loadJsonToMongoDB(String collectionName, String jsonFilePath) throws IOException {
        MongoDatabase db = connect("personal-website-db");

        String jsonContent = new String(Files.readAllBytes(Paths.get(jsonFilePath)));
        
    }

}