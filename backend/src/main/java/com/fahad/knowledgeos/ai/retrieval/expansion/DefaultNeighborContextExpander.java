package com.fahad.knowledgeos.ai.retrieval.expansion;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.fahad.knowledgeos.ai.search.dto.SearchResult;
import com.fahad.knowledgeos.document.entity.DocumentChunk;
import com.fahad.knowledgeos.document.repository.DocumentChunkRepository;


import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class DefaultNeighborContextExpander
        implements NeighborContextExpander {

    private final DocumentChunkRepository repository;

    @Override
        public List<SearchResult> expand(List<SearchResult> results) {

        List<SearchResult> expandedResults = new ArrayList<>();

        for (SearchResult result : results) {

                List<DocumentChunk> neighbors =
                        repository.findByDocumentContentIdAndChunkIndexBetweenOrderByChunkIndexAsc(
                                result.getDocumentContentId(),
                                Math.max(0, result.getChunkIndex() - 1),
                                result.getChunkIndex() + 1);

                String mergedText =
                        neighbors.stream()
                                .map(DocumentChunk::getChunkText)
                                .collect(Collectors.joining("\n\n"));

                SearchResult expandedResult = SearchResult.builder()
                        .documentId(result.getDocumentId())
                        .documentContentId(result.getDocumentContentId())
                        .documentName(result.getDocumentName())
                        .chunkId(result.getChunkId())
                        .chunkIndex(result.getChunkIndex())
                        .snippet(mergedText)      // Expanded context
                        .score(result.getScore())
                        .build();

                expandedResults.add(expandedResult);
        }

        return expandedResults;
        }

}