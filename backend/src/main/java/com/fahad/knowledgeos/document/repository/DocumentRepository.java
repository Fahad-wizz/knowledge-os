package com.fahad.knowledgeos.document.repository;

import com.fahad.knowledgeos.document.entity.Document;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findByOwnerId(Long ownerId);

    Optional<Document> findByIdAndOwnerId(
        Long documentId,
        Long ownerId);

    Optional<Document> findByOwnerIdAndStoragePath(
        Long ownerId,
        String storagePath);

    long countByOwnerId(Long ownerId);
}