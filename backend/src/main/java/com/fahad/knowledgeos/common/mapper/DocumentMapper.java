package com.fahad.knowledgeos.common.mapper;

import com.fahad.knowledgeos.document.dto.request.DocumentRequest;
import com.fahad.knowledgeos.document.dto.response.DocumentResponse;
import com.fahad.knowledgeos.document.dto.response.UploadDocumentResponse;
import com.fahad.knowledgeos.document.entity.Document;
import com.fahad.knowledgeos.document.entity.DocumentStatus;

public class DocumentMapper {

    public static Document toEntity(DocumentRequest request) {

        return Document.builder()
                .originalFileName(request.getName())
                .storagePath(request.getStoragePath())
                .extension(request.getExtension())
                .contentType(request.getContentType())
                .fileSize(request.getSize())
                .status(DocumentStatus.INDEXING)
                .build();
    }

    public static DocumentResponse toResponse(Document document) {

        return DocumentResponse.builder()
                .id(document.getId())
                .name(document.getOriginalFileName())
                .extension(document.getExtension())
                .size(document.getFileSize())
                .status(document.getStatus().name())
                .build();
    }

    public static UploadDocumentResponse toUploadResponse(Document document) {

        return UploadDocumentResponse.builder()
                .id(document.getId())
                .originalFileName(document.getOriginalFileName())
                .storedFileName(document.getStoredFileName())
                .status(document.getStatus().name())
                .uploadedAt(document.getCreatedAt())
                .build();
    }

}