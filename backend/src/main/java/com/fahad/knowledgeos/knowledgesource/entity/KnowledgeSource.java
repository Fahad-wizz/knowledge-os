package com.fahad.knowledgeos.knowledgesource.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fahad.knowledgeos.user.entity.User;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "knowledge_sources")
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class KnowledgeSource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Friendly name shown in the UI.
     * Example:
     * "Java Notes"
     */
    @Column(nullable = false, length = 150)
    private String displayName;

    /**
     * Root folder path.
     * Example:
     * D:\Programming\Java
     */
    @Column(nullable = false, length = 2048)
    private String rootPath;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private KnowledgeSourceType type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private KnowledgeSourceStatus status;

    private LocalDateTime lastIndexedAt;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

}