package com.fahad.knowledgeos.knowledgesource.mapper;

import com.fahad.knowledgeos.knowledgesource.dto.request.KnowledgeSourceRequest;
import com.fahad.knowledgeos.knowledgesource.dto.response.KnowledgeSourceResponse;
import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSource;
import com.fahad.knowledgeos.user.entity.User;

public final class KnowledgeSourceMapper {

    private KnowledgeSourceMapper() {
    }

    public static KnowledgeSource toEntity(
            KnowledgeSourceRequest request,
            User owner) {

        return KnowledgeSource.builder()
                .displayName(request.getDisplayName())
                .rootPath(request.getRootPath())
                .type(request.getType())
                .status(
                        com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSourceStatus.ACTIVE)
                .owner(owner)
                .build();

    }

    public static KnowledgeSourceResponse toResponse(
            KnowledgeSource source) {

        return KnowledgeSourceResponse.builder()
                .id(source.getId())
                .displayName(source.getDisplayName())
                .rootPath(source.getRootPath())
                .type(source.getType())
                .status(source.getStatus())
                .lastIndexedAt(source.getLastIndexedAt())
                .createdAt(source.getCreatedAt())
                .updatedAt(source.getUpdatedAt())
                .build();

    }

}