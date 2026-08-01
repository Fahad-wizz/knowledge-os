package com.fahad.knowledgeos.common.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import com.fahad.knowledgeos.ai.vector.config.QdrantProperties;

@Configuration
@EnableConfigurationProperties(QdrantProperties.class)
public class QdrantConfig {

}