package com.fahad.knowledgeos.ai.search.service;

import com.fahad.knowledgeos.ai.search.dto.SearchResponse;

public interface SearchService {

    SearchResponse search(
            String query,
            Integer limit
    );

}