package org.web;

import jakarta.inject.Inject;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

public class DatabseResource {
    @Path("/cv")
    public class CVResource {

        @Inject
        DatabaseService dbService;

        @GET
        @Produces(MediaType.APPLICATION_JSON)
        public String getCV() {
            return dbService.getCVData().toJson();
        }
    }
}
