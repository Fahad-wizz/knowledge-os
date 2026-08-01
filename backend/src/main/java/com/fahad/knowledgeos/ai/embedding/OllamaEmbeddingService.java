package com.fahad.knowledgeos.ai.embedding;

import java.util.List;

import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.embedding.EmbeddingRequest;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OllamaEmbeddingService implements EmbeddingService {

    private final EmbeddingModel embeddingModel;

    @Override
    public float[] embed(String text) {

        return embeddingModel
                .call(new EmbeddingRequest(List.of(text), null))
                .getResult()
                .getOutput();

    }
}