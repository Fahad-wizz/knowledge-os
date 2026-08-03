package com.fahad.knowledgeos.knowledgesource.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class IndexingSummary {

    private Long knowledgeSourceId;

    private Integer totalFiles;

    private Integer indexed;

    private Integer skipped;

    private Integer failed;

    private Long durationMs;

}