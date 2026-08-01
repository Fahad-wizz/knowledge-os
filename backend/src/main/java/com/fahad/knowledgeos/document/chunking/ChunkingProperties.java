package com.fahad.knowledgeos.document.chunking;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Getter;
import lombok.Setter;

@ConfigurationProperties(prefix = "chunking")
@Getter
@Setter
public class ChunkingProperties {

    private int maxSize = 1000;
    private int overlap = 150;

}
