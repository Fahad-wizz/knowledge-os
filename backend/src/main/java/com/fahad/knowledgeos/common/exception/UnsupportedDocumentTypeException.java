package com.fahad.knowledgeos.common.exception;

public class UnsupportedDocumentTypeException extends RuntimeException {

    public UnsupportedDocumentTypeException(String extension) {
        super("Unsupported document type: " + extension);
    }
}
