package com.fahad.knowledgeos.dashboard.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.auth.security.CurrentUserService;
import com.fahad.knowledgeos.knowledgesource.mapper.KnowledgeSourceMapper;import com.fahad.knowledgeos.dashboard.dto.DashboardResponse;
import com.fahad.knowledgeos.document.repository.DocumentChunkRepository;
import com.fahad.knowledgeos.document.repository.DocumentRepository;
import com.fahad.knowledgeos.knowledgesource.dto.response.KnowledgeSourceResponse;
import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSource;
import com.fahad.knowledgeos.knowledgesource.repository.KnowledgeSourceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl
        implements DashboardService {

    private final CurrentUserService currentUserService;

    private final KnowledgeSourceRepository knowledgeSourceRepository;

    private final DocumentRepository documentRepository;

    private final DocumentChunkRepository chunkRepository;

    @Override
    public DashboardResponse getDashboard() {

        Long ownerId =
                currentUserService.getCurrentUserId();

        long sourceCount =
                knowledgeSourceRepository.countByOwnerId(ownerId);

        long documentCount =
                documentRepository.countByOwnerId(ownerId);

        long chunkCount =
                chunkRepository.countByDocumentContentDocumentOwnerId(ownerId);

        List<KnowledgeSourceResponse> recentSources =
                knowledgeSourceRepository
                        .findTop5ByOwnerIdOrderByUpdatedAtDesc(ownerId)
                        .stream()
                        .map(KnowledgeSourceMapper::toResponse)
                        .toList();

        LocalDateTime lastIndexedAt =
                knowledgeSourceRepository
                        .findTopByOwnerIdAndLastIndexedAtIsNotNullOrderByLastIndexedAtDesc(ownerId)
                        .map(KnowledgeSource::getLastIndexedAt)
                        .orElse(null);

        return DashboardResponse.builder()
                .sources(sourceCount)
                .documents(documentCount)
                .chunks(chunkCount)
                .lastIndexedAt(lastIndexedAt)
                .recentSources(recentSources)
                .build();
    }

}