package com.fahad.knowledgeos.ai.vector.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScoredPoint {

    private Long id;

    private Double score;

    private VectorPayload payload;

}