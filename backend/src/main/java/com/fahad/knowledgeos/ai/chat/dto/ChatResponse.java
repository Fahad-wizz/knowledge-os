package com.fahad.knowledgeos.ai.chat.dto;

import java.util.List;

import com.fahad.knowledgeos.ai.search.dto.SearchResult;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatResponse {

    private String answer;

<<<<<<< HEAD
=======
    private Double confidence;

>>>>>>> frontend/ProductFeatures
    private List<SearchResult> sources;

}