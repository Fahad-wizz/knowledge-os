package com.fahad.knowledgeos.ai.retrieval.strategy;

import java.util.List;

import com.fahad.knowledgeos.ai.search.dto.SearchResult;

public interface ContextFilter {

    List<SearchResult> filter(List<SearchResult> results);

}