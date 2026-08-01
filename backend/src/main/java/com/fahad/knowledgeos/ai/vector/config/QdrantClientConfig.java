package com.fahad.knowledgeos.ai.vector.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class QdrantClientConfig {

    @Bean
    public RestClient restClient(QdrantProperties properties) {

        return RestClient.builder()
                .baseUrl(properties.getPortUrl())
                .build();

    }

}