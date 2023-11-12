package org.web;
import io.quarkus.mongodb.panache.PanacheMongoEntity;
import io.quarkus.mongodb.panache.common.MongoEntity;
import io.quarkus.mongodb.*;
import org.bson.types.ObjectId;

@MongoEntity(collection = "cv-data")
public class CVData extends PanacheMongoEntity{
    private String name;
    private String email;
    private String phone;
    private String major;
    
    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getMajor() {
        return major;
    }
}
