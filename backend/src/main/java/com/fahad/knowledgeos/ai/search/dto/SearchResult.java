package com.fahad.knowledgeos.ai.search.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SearchResult {

    private Long documentId;

    private String documentName;

    private Long chunkId;

    private Integer chunkIndex;

    private String snippet;

    private Double score;

    private Long documentContentId;
}