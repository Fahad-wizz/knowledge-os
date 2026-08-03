package com.fahad.knowledgeos.dashboard.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.fahad.knowledgeos.knowledgesource.dto.response.KnowledgeSourceResponse;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DashboardResponse {

    private Long sources;

    private Long documents;

    private Long chunks;

    private LocalDateTime lastIndexedAt;

    private List<KnowledgeSourceResponse> recentSources;

} 