package com.fahad.knowledgeos.ai.vector;

import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fahad.knowledgeos.ai.vector.service.VectorStoreService;

@Configuration
public class VectorInitializer {

    @Bean
    ApplicationRunner initialize(VectorStoreService vectorStoreService) {

        return args -> vectorStoreService.initializeCollection();

    }

}