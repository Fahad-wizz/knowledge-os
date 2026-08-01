package com.fahad.knowledgeos.ai.vector.dto;

public class VectorParams {

    private int size;
    private Distance distance;

    public VectorParams() {
    }

    public VectorParams(int size, Distance distance) {
        this.size = size;
        this.distance = distance;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public Distance getDistance() {
        return distance;
    }

    public void setDistance(Distance distance) {
        this.distance = distance;
    }
}