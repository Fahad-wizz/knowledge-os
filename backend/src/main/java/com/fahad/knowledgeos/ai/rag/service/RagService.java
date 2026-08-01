package com.fahad.knowledgeos.ai.rag.service;

import com.fahad.knowledgeos.ai.rag.dto.RagResponse;

public interface RagService {

    RagResponse ask(String question);

}