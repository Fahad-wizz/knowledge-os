package com.fahad.knowledgeos.document.ingestion;

import org.springframework.web.multipart.MultipartFile;

import com.fahad.knowledgeos.document.dto.response.UploadDocumentResponse;

public interface DocumentIngestionService {

    UploadDocumentResponse upload(MultipartFile file);

}