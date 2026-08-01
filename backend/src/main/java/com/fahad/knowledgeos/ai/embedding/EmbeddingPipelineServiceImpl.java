package com.fahad.knowledgeos.ai.embedding;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.ai.vector.service.VectorStoreService;
import com.fahad.knowledgeos.document.entity.DocumentChunk;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmbeddingPipelineServiceImpl
        implements EmbeddingPipelineService {

    private final EmbeddingService embeddingService;

    private final VectorStoreService vectorStoreService;

    @Override
    public void process(List<DocumentChunk> chunks) {

        for (DocumentChunk chunk : chunks) {

            float[] embedding =
                    embeddingService.embed(chunk.getChunkText());

            vectorStoreService.store(
                chunk,
                embedding
            );

        }

    }

}