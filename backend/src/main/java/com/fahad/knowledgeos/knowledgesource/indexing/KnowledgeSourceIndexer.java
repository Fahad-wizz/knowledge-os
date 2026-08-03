package com.fahad.knowledgeos.knowledgesource.indexing;

import com.fahad.knowledgeos.knowledgesource.dto.response.IndexingSummary;

public interface KnowledgeSourceIndexer {

    IndexingSummary index(Long knowledgeSourceId);
}