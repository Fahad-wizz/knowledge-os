package com.fahad.knowledgeos.knowledgesource.dto.response;

import java.time.LocalDateTime;

import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSourceStatus;
import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSourceType;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class KnowledgeSourceResponse {

    private Long id;

    private String displayName;

    private String rootPath;

    private KnowledgeSourceType type;

    private KnowledgeSourceStatus status;

    private LocalDateTime lastIndexedAt;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}