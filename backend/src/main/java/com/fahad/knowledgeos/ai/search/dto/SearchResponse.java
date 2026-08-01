package com.fahad.knowledgeos.ai.search.dto;

import java.util.List;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SearchResponse {

    private String query;
    private List<SearchResult> results;
    private Integer totalResults;
    private String message;
}