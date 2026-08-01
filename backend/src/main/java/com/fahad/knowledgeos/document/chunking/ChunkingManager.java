package com.fahad.knowledgeos.document.chunking;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.document.chunking.model.Chunk;
import com.fahad.knowledgeos.document.chunking.strategy.ChunkingService;
import com.fahad.knowledgeos.document.entity.DocumentContent;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChunkingManager {

    private final List<ChunkingService> chunkers;

    public List<Chunk> chunk(DocumentContent content) {

        return chunkers.stream()
                .filter(c -> c.supports("text/plain"))
                .findFirst()
                .orElseThrow(() ->
                        new IllegalArgumentException("No chunker found"))
                .chunk(content.getRawText());
    }

}