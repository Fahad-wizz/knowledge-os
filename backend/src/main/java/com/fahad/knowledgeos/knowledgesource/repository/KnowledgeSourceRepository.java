package com.fahad.knowledgeos.knowledgesource.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSource;

public interface KnowledgeSourceRepository
        extends JpaRepository<KnowledgeSource, Long> {

    List<KnowledgeSource> findByOwnerId(Long ownerId);

    Optional<KnowledgeSource> findByIdAndOwnerId(
            Long id,
            Long ownerId);

    boolean existsByOwnerIdAndRootPath(
            Long ownerId,
            String rootPath);

}