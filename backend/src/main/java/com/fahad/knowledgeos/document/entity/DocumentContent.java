package com.fahad.knowledgeos.document.entity;

import jakarta.persistence.*;
import lombok.*;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "document_contents")
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DocumentContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "document_id",
            nullable = false,
            unique = true
    )
    private Document document;

   @Column(columnDefinition = "TEXT", nullable = false)
    private String rawText;

    private Integer pageCount;

    private Integer characterCount;

    @CreatedDate
    private LocalDateTime createdAt;
}