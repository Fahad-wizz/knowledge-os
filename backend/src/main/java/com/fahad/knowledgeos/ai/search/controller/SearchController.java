package com.fahad.knowledgeos.ai.search.controller;

import org.springframework.web.bind.annotation.*;

import com.fahad.knowledgeos.ai.search.dto.SearchResponse;
import com.fahad.knowledgeos.ai.search.service.SearchService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/search")
@RequiredArgsConstructor
public class SearchController {

    private final SearchService searchService;

    @GetMapping
    public SearchResponse search(

            @RequestParam String query,

            @RequestParam(required = false)
            Integer limit) {

        return searchService.search(query, limit);

    }

}