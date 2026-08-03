package com.fahad.knowledgeos.document.ingestion;

import java.nio.file.Path;

import org.springframework.web.multipart.MultipartFile;

import com.fahad.knowledgeos.document.dto.response.UploadDocumentResponse;

public interface DocumentIngestionService {

    UploadDocumentResponse upload(MultipartFile file);

    UploadDocumentResponse register(
        Path path);

}