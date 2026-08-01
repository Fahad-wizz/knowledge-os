package com.fahad.knowledgeos.ai.vector.service;

import java.util.List;

import com.fahad.knowledgeos.ai.vector.dto.ScoredPoint;
import com.fahad.knowledgeos.document.entity.DocumentChunk;

public interface VectorStoreService {

    void initializeCollection();

    void store(
        DocumentChunk chunk,
        float[] embedding
    );

    List<ScoredPoint> search(
        float[] embedding,
        int limit
);

}