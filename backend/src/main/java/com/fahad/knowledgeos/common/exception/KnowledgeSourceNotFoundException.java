package com.fahad.knowledgeos.common.exception;

public class KnowledgeSourceNotFoundException extends RuntimeException {

    public KnowledgeSourceNotFoundException(
        Long knowledgeSourceId) {
        super("Knowledge source not found with ID: " + knowledgeSourceId);
    }
    
}
