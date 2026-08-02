package com.fahad.knowledgeos.ai.vector.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Condition {

    private String key;

    private Match match;

}