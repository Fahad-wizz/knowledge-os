package com.fahad.knowledgeos.common.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import com.fahad.knowledgeos.document.chunking.ChunkingProperties;

@Configuration
@EnableConfigurationProperties(ChunkingProperties.class)
public class ChunkingConfig {
}