package com.fahad.knowledgeos.knowledgesource.dto.request;

import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSourceType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class KnowledgeSourceRequest {

    @NotBlank(message = "Display name is required")
    private String displayName;

    @NotBlank(message = "Root path is required")
    private String rootPath;

    @NotNull(message = "Knowledge source type is required")
    private KnowledgeSourceType type;

}