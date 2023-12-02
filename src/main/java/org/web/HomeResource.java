package org.web;

import java.io.InputStream;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("")
public class HomeResource {
    @GET
    @Produces(MediaType.TEXT_HTML)
    public InputStream home() {
        return getClass().getResourceAsStream("/META-INF/resources/pages/index.html");
    }



}