package com.fahad.knowledgeos.ai.retrieval.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.ai.retrieval.config.RetrievalProperties;
import com.fahad.knowledgeos.ai.retrieval.expansion.NeighborContextExpander;
import com.fahad.knowledgeos.ai.retrieval.model.RetrievedContext;
import com.fahad.knowledgeos.ai.retrieval.strategy.ScoreFilterStrategy;
import com.fahad.knowledgeos.ai.search.dto.SearchResponse;
import com.fahad.knowledgeos.ai.search.dto.SearchResult;
import com.fahad.knowledgeos.ai.search.service.SearchService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RetrieverServiceImpl
        implements RetrieverService {

    private final SearchService searchService;

    private final RetrievalProperties properties;

    private final ScoreFilterStrategy scoreFilter;

    private final NeighborContextExpander expander;

    @Override
    public RetrievedContext retrieve(String question) {

        SearchResponse response =
                searchService.search(
                        question,
                        properties.getTopK());

        List<SearchResult> context =
                scoreFilter.filter(response.getResults());
        
        context = expander.expand(context);

        double confidence =
                context.stream()
                        .mapToDouble(SearchResult::getScore)
                        .max()
                        .orElse(0.0);

        boolean sufficient =
                !context.isEmpty()
                && confidence >= properties.getMinimumConfidence();

        return RetrievedContext.builder()
                .chunks(context)
                .confidence(confidence)
                .sufficient(sufficient)
                .build();
    }

}