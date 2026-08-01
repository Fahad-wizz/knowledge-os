package com.fahad.knowledgeos.common.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import com.fahad.knowledgeos.ai.search.config.SearchProperties;

@Configuration
@EnableConfigurationProperties(SearchProperties.class)
public class SearchConfig {
}