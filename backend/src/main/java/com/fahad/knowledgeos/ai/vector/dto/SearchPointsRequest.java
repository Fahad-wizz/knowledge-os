package com.fahad.knowledgeos.ai.vector.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SearchPointsRequest {

    private float[] query;

    private Integer limit;

    private Filter filter;

    @JsonProperty("with_payload")
    @Builder.Default
    private Boolean withPayload = true;

}