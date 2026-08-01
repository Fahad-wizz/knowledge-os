package com.fahad.knowledgeos.document.repository;

import com.fahad.knowledgeos.document.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Long> {

}