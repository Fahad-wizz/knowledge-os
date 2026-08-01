package com.fahad.knowledgeos.ai.embedding;

import java.util.List;

import com.fahad.knowledgeos.document.entity.DocumentChunk;

public interface EmbeddingPipelineService {

    void process(List<DocumentChunk> chunks);

}