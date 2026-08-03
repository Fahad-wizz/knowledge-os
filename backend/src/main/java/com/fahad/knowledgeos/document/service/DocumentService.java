package com.fahad.knowledgeos.document.service;

import com.fahad.knowledgeos.document.dto.request.DocumentRequest;
import com.fahad.knowledgeos.document.dto.response.DocumentResponse;
import com.fahad.knowledgeos.document.dto.response.UploadDocumentResponse;
import com.fahad.knowledgeos.document.entity.Document;

import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

public interface DocumentService {

    DocumentResponse saveDocument(DocumentRequest document);

    List<DocumentResponse> getAllDocuments();

    DocumentResponse getDocumentById(Long id);

    void deleteDocument(Long id);

    UploadDocumentResponse upload(MultipartFile file);

    UploadDocumentResponse register(Path path);

    Optional<Document> findIndexedDocument(Path path);

}