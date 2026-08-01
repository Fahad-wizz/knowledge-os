package com.fahad.knowledgeos.ai.vector.dto;

public class PointStruct {

    private Long id;
    private float[] vector;
    private VectorPayload payload;

    public PointStruct() {
    }

    public PointStruct(Long id, float[] vector, VectorPayload payload) {
        this.id = id;
        this.vector = vector;
        this.payload = payload;
    }

    public Long getId() {
        return id;
    }

    public float[] getVector() {
        return vector;
    }

    public VectorPayload getPayload() {
        return payload;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setVector(float[] vector) {
        this.vector = vector;
    }

    public void setPayload(VectorPayload payload) {
        this.payload = payload;
    }
}