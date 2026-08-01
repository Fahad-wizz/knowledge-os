package com.fahad.knowledgeos.ai.vector.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "qdrant")
public class QdrantProperties {

    private String host;
    private int port;
    private String collection;

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public int getPort() {
        return port;
    }

    public String getPortUrl() {
        return "http://" + host + ":" + port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getCollection() {
        return collection;
    }

    public void setCollection(String collection) {
        this.collection = collection;
    }

}
