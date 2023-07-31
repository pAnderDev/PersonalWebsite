package org.web;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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
