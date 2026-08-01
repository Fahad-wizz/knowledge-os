package com.fahad.knowledgeos.ai.retrieval.expansion;

import java.util.List;

import com.fahad.knowledgeos.ai.search.dto.SearchResult;

public interface NeighborContextExpander {

    List<SearchResult> expand(List<SearchResult> results);

}