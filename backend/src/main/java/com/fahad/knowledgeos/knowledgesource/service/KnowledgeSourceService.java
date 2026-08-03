package com.fahad.knowledgeos.knowledgesource.service;

import java.util.List;

import com.fahad.knowledgeos.knowledgesource.dto.request.KnowledgeSourceRequest;
import com.fahad.knowledgeos.knowledgesource.dto.response.KnowledgeSourceResponse;

public interface KnowledgeSourceService {

    KnowledgeSourceResponse create(
            KnowledgeSourceRequest request);

    List<KnowledgeSourceResponse> findAll();

    KnowledgeSourceResponse findById(Long id);

    void delete(Long id);

}