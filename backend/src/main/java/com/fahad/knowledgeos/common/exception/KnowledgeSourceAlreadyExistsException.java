package com.fahad.knowledgeos.common.exception;

/**
 * KnowledgeSourceAlreadyExistsException
 */
public class KnowledgeSourceAlreadyExistsException extends RuntimeException {

    public KnowledgeSourceAlreadyExistsException(String name) {
        super("Knowledge source with name " + name + " already exists.");
    }

}
