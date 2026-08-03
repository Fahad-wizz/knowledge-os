package com.fahad.knowledgeos.document.ingestion;

import java.nio.file.Path;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fahad.knowledgeos.document.dto.response.UploadDocumentResponse;
import com.fahad.knowledgeos.document.processing.DocumentProcessingService;
import com.fahad.knowledgeos.document.service.DocumentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DocumentIngestionServiceImpl
        implements DocumentIngestionService {

    private final DocumentService documentService;

    private final DocumentProcessingService processingService;

    @Override
    public UploadDocumentResponse upload(MultipartFile file) {

        UploadDocumentResponse response =
                documentService.upload(file);

        processingService.process(response.getId());

        return response;
    }

    @Override
    public UploadDocumentResponse register(
            Path path) {

        UploadDocumentResponse response =
                documentService.register(path);

        processingService.process(
                response.getId());

        return response;

    }

}