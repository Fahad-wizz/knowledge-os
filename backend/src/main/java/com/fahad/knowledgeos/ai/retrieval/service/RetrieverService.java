package com.fahad.knowledgeos.ai.retrieval.service;

import com.fahad.knowledgeos.ai.retrieval.model.RetrievedContext;

public interface RetrieverService {

    RetrievedContext retrieve(String question);

}