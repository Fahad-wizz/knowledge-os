package com.fahad.knowledgeos.document.service;

import com.fahad.knowledgeos.auth.security.CurrentUserService;
import com.fahad.knowledgeos.common.exception.DocumentNotFoundException;
import com.fahad.knowledgeos.common.mapper.DocumentMapper;
import com.fahad.knowledgeos.document.dto.request.DocumentRequest;
import com.fahad.knowledgeos.document.dto.response.DocumentResponse;
import com.fahad.knowledgeos.document.dto.response.UploadDocumentResponse;
import com.fahad.knowledgeos.document.entity.Document;
import com.fahad.knowledgeos.document.entity.DocumentStatus;
import com.fahad.knowledgeos.document.repository.DocumentRepository;
import com.fahad.knowledgeos.document.storage.StorageService;
import com.fahad.knowledgeos.document.storage.model.StoredFile;
import com.fahad.knowledgeos.user.entity.User;
import com.fahad.knowledgeos.user.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DocumentServiceImpl implements DocumentService {

    private final DocumentRepository documentRepository;
    private final StorageService storageService;
    private final CurrentUserService currentUserService;
    private final UserService userService;

    @Override
    public DocumentResponse saveDocument(DocumentRequest request) {

        Document document = DocumentMapper.toEntity(request);

        Document saved = documentRepository.save(document);

        return DocumentMapper.toResponse(saved);
    }

    @Override
    public List<DocumentResponse> getAllDocuments() {
        Long ownerId = currentUserService.getCurrentUserId();
        return documentRepository
                .findByOwnerId(ownerId)
                .stream()
                .map(DocumentMapper::toResponse)
                .toList();
    }

    @Override
    public DocumentResponse getDocumentById(Long id) {

        Long ownerId = currentUserService.getCurrentUserId();

        Document document =
                documentRepository
                        .findByIdAndOwnerId(id, ownerId)
                        .orElseThrow(() ->
                            new DocumentNotFoundException(id));


        return DocumentMapper.toResponse(document);
    }

    @Override
    public void deleteDocument(Long id) {

        Long ownerId = currentUserService.getCurrentUserId();

        Document document =
                documentRepository
                        .findByIdAndOwnerId(id, ownerId)
                        .orElseThrow(() ->
                                new DocumentNotFoundException(id));

        documentRepository.delete(document);
    }

    @Override
    public UploadDocumentResponse upload(MultipartFile file) {

        if (file.isEmpty()) {
            throw new IllegalArgumentException("File is empty");
        }

        StoredFile storedFile = storageService.store(file);

        Long ownerId =
        currentUserService.getCurrentUserId();

        User owner =
        userService.findById(ownerId)
                .orElseThrow();

        Document document = Document.builder()
                .owner(owner)
                .originalFileName(storedFile.getOriginalFileName())
                .storedFileName(storedFile.getStoredFileName())
                .contentType(storedFile.getContentType())
                .extension(storedFile.getExtension())
                .fileSize(storedFile.getFileSize())
                .storagePath(storedFile.getStoragePath())
                .status(DocumentStatus.UPLOADED)
                .build();

        Document saved = documentRepository.save(document);

        return DocumentMapper.toUploadResponse(saved);
    }

}