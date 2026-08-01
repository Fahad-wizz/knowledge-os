package com.fahad.knowledgeos.document.entity;
import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "documents")
@EntityListeners(AuditingEntityListener.class)

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String originalFileName;

    @Column(nullable = false, unique = true)
    private String storedFileName;

    @Column(nullable = false, length = 100)
    private String contentType;

    @Column(nullable = false, length = 20)
    private String extension;


    @Column(nullable = false)
    private Long fileSize;

    @Column(nullable = false, unique = true, length = 2048)
    private String storagePath;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DocumentStatus status;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime updatedAt;

}
