package com.fahad.knowledgeos.document.chunking.strategy;

import java.util.List;

import com.fahad.knowledgeos.document.chunking.model.Chunk;

public interface ChunkingService {
     boolean supports(String contentType);

    List<Chunk> chunk(String text);
}
