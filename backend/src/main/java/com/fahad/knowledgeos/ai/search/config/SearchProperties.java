package com.fahad.knowledgeos.ai.search.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Getter;
import lombok.Setter;

@ConfigurationProperties(prefix = "knowledgeos.search")
@Getter
@Setter
public class SearchProperties {

    private Float scoreThreshold;

    private Integer defaultLimit;

    private Integer snippetLength;


}