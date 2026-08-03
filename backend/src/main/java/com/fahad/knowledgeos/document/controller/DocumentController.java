package com.fahad.knowledgeos.document.controller;

import com.fahad.knowledgeos.document.dto.request.DocumentRequest;
import com.fahad.knowledgeos.document.dto.response.DocumentResponse;
import com.fahad.knowledgeos.document.dto.response.ExtractionResponse;
import com.fahad.knowledgeos.document.dto.response.UploadDocumentResponse;
import com.fahad.knowledgeos.document.ingestion.DocumentIngestionService;
import com.fahad.knowledgeos.document.processing.DocumentProcessingService;
import com.fahad.knowledgeos.document.service.DocumentService;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/documents")
@RequiredArgsConstructor
public class DocumentController {

    private final DocumentService documentService;
    private final DocumentProcessingService processingService;
    private final DocumentIngestionService ingestionService;

    @PostMapping
    public DocumentResponse createDocument(
            @Valid @RequestBody DocumentRequest request) {

        return documentService.saveDocument(request);
    }

    @GetMapping
    public List<DocumentResponse> getAllDocuments() {

        return documentService.getAllDocuments();
    }

    @GetMapping("/{id}")
    public DocumentResponse getDocumentById(
            @PathVariable Long id) {

        return documentService.getDocumentById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteDocument(
            @PathVariable Long id) {

        documentService.deleteDocument(id);
    }

     @PostMapping(
            value = "/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<UploadDocumentResponse> upload(
            @RequestParam("file") MultipartFile file) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ingestionService.upload(file));
    }

    @Hidden
    @PostMapping("/{id}/extract")
    public ResponseEntity<ExtractionResponse> extractDocument(
            @PathVariable Long id) {

        return ResponseEntity.ok(processingService.process(id));
    }
}