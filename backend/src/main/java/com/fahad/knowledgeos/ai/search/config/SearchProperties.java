package com.fahad.knowledgeos.ai.search.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Getter;
import lombok.Setter;

@ConfigurationProperties(prefix = "knowledgeos.search")
@Getter
@Setter
public class SearchProperties {

    private Double scoreThreshold = 0.75;

    private Integer defaultLimit = 5;

    private Integer snippetLength = 200;


}