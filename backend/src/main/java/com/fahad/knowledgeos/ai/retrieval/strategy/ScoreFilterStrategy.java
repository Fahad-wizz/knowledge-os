package com.fahad.knowledgeos.ai.retrieval.strategy;

import java.util.List;

import org.springframework.stereotype.Component;

import com.fahad.knowledgeos.ai.retrieval.config.RetrievalProperties;
import com.fahad.knowledgeos.ai.search.dto.SearchResult;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ScoreFilterStrategy implements ContextFilter {

    private final RetrievalProperties properties;

    @Override
    public List<SearchResult> filter(List<SearchResult> results) {

        return results.stream()
                .filter(r ->
                        r.getScore() >=
                        properties.getMinimumConfidence())
                .toList();
    }

}