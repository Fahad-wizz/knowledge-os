package com.fahad.knowledgeos.ai.rag.dto;

import java.util.List;

import com.fahad.knowledgeos.ai.search.dto.SearchResult;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RagResponse {

    private String question;

    private String answer;

    private List<SearchResult> sources;

    private Double confidence;

}