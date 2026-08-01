package com.fahad.knowledgeos.ai.retrieval.config;
import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Getter;
import lombok.Setter;

@ConfigurationProperties(prefix = "knowledgeos.retrieval")
@Getter
@Setter
public class RetrievalProperties {

    private Integer topK = 10;

    private Double minimumConfidence = 0.75;

}