package com.fahad.knowledgeos.ai.vector.dto;

public class CreateCollectionRequest {

    private VectorParams vectors;

    public CreateCollectionRequest() {
    }

    public CreateCollectionRequest(VectorParams vectors) {
        this.vectors = vectors;
    }

    public VectorParams getVectors() {
        return vectors;
    }

    public void setVectors(VectorParams vectors) {
        this.vectors = vectors;
    }
}