package com.fahad.knowledgeos.ai.search.service;

import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.ai.embedding.EmbeddingService;
import com.fahad.knowledgeos.ai.search.config.SearchProperties;
import com.fahad.knowledgeos.ai.search.dto.SearchResponse;
import com.fahad.knowledgeos.ai.search.dto.SearchResult;
import com.fahad.knowledgeos.ai.vector.dto.ScoredPoint;
import com.fahad.knowledgeos.ai.vector.service.VectorStoreService;
import com.fahad.knowledgeos.auth.security.CurrentUserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService {

    private final EmbeddingService embeddingService;

    private final VectorStoreService vectorStoreService;

    private final SearchProperties properties;

    private final CurrentUserService currentUserService;

    @Override
    public SearchResponse search(String query, Integer limit) {

        if (limit == null) {
            limit = properties.getDefaultLimit();
        }

        float[] embedding = embeddingService.embed(query);

        Long ownerId =
        currentUserService.getCurrentUserId();

        List<ScoredPoint> points =
                vectorStoreService.search(embedding, limit, ownerId);

        List<SearchResult> results = points.stream()
                .map(this::toSearchResult)
                .sorted(Comparator.comparing(SearchResult::getScore).reversed())
                .toList();

        return SearchResponse.builder()
                .query(query)
                .totalResults(results.size())
                .message(results.isEmpty()
                        ? "No relevant documents found."
                        : "Found " + results.size() + " matching chunks.")
                .results(results)
                .build();
    }

    private SearchResult toSearchResult(ScoredPoint point) {

        return SearchResult.builder()
                .documentId(point.getPayload().getDocumentId())
                .documentContentId(
        point.getPayload().getDocumentContentId())
                .documentName(point.getPayload().getDocumentName())
                .chunkId(point.getPayload().getChunkId())
                .chunkIndex(point.getPayload().getChunkIndex())
                .snippet(createSnippet(point.getPayload().getText()))
                .score(point.getScore())
                .build();

    }

    private String createSnippet(String text) {
        if (text == null) {
            return "";
        }
        if (text.length() <= properties.getSnippetLength()) {
            return text;
        }
        return text.substring(0, properties.getSnippetLength()) + "...";
    }
}