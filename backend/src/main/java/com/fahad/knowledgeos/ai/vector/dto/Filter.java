package com.fahad.knowledgeos.ai.vector.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Filter {

    private List<Condition> must;

}