package com.fahad.knowledgeos.document.processing;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fahad.knowledgeos.ai.embedding.EmbeddingPipelineService;
import com.fahad.knowledgeos.common.exception.DocumentNotFoundException;
import com.fahad.knowledgeos.document.chunking.ChunkingManager;
import com.fahad.knowledgeos.document.chunking.model.Chunk;
import com.fahad.knowledgeos.document.dto.response.ExtractionResponse;
import com.fahad.knowledgeos.document.entity.Document;
import com.fahad.knowledgeos.document.entity.DocumentChunk;
import com.fahad.knowledgeos.document.entity.DocumentContent;
import com.fahad.knowledgeos.document.extraction.manager.ExtractionManager;
import com.fahad.knowledgeos.document.extraction.model.ExtractionResult;
import com.fahad.knowledgeos.document.repository.DocumentChunkRepository;
import com.fahad.knowledgeos.document.repository.DocumentContentRepository;
import com.fahad.knowledgeos.document.repository.DocumentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DocumentProcessingServiceImpl
        implements DocumentProcessingService {

    private final DocumentRepository documentRepository;

    private final DocumentContentRepository documentContentRepository;

    private final ExtractionManager extractionManager;
    private final ChunkingManager chunkingManager;
    private final DocumentChunkRepository chunkRepository;
    private final EmbeddingPipelineService embeddingPipelineService;
    @Transactional
    @Override
    public ExtractionResponse process(Long id) {

        Document document = documentRepository.findById(id)
                .orElseThrow(() -> new DocumentNotFoundException(id));

        Optional<DocumentContent> existing =
                documentContentRepository.findByDocumentId(id);

        if (existing.isPresent()) {

            return ExtractionResponse.builder()
                    .documentId(id)
                    .extractedText(existing.get().getRawText())
                    .build();
        }

        ExtractionResult result =
                extractionManager.extract(document);

        DocumentContent content =
                DocumentContent.builder()
                        .document(document)
                        .rawText(result.getText())
                        .pageCount(result.getPageCount())
                        .characterCount(result.getCharacterCount())
                        .build();

        DocumentContent savedContent = documentContentRepository.save(content);
        List<Chunk> chunks = chunkingManager.chunk(savedContent);
        List<DocumentChunk> chunkEntities = chunks.stream()
        .map(chunk -> DocumentChunk.builder()
                .documentContent(savedContent)
                .chunkIndex(chunk.getChunkIndex())
                .chunkText(chunk.getContent())
                .characterCount(chunk.getCharacterCount())
                .build())
        .toList();
        List<DocumentChunk> savedChunks = chunkRepository.saveAll(chunkEntities);

        embeddingPipelineService.process(savedChunks);


        return ExtractionResponse.builder()
                .documentId(id)
                .extractedText(result.getText())
                .build();
    }

}
