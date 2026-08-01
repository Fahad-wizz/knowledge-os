package com.fahad.knowledgeos.ai.vector.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QueryResult {

    private List<ScoredPoint> points;

}