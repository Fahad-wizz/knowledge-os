package com.fahad.knowledgeos.ai.search.dto;

import jakarta.validation.constraints.NotBlank;

public class SearchRequest {

    @NotBlank
    private String query;

    private Integer limit = 5;

    public SearchRequest() {
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }
}