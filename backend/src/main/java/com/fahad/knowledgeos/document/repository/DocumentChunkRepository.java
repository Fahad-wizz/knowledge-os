package com.fahad.knowledgeos.document.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fahad.knowledgeos.document.entity.DocumentChunk;

public interface DocumentChunkRepository
        extends JpaRepository<DocumentChunk, Long> {

          List<DocumentChunk> findByDocumentContentIdAndChunkIndexBetweenOrderByChunkIndexAsc(
        Long documentContentId,
        Integer start,
        Integer end
);

        boolean existsByDocumentContentId(Long documentContentId);

}