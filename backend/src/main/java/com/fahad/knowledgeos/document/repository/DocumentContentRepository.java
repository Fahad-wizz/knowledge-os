package com.fahad.knowledgeos.document.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fahad.knowledgeos.document.entity.DocumentContent;
public interface DocumentContentRepository extends          JpaRepository<DocumentContent, Long> {

    Optional<DocumentContent> findByDocumentId(Long documentId);
}
