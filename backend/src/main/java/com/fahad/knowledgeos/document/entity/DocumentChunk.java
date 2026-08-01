package com.fahad.knowledgeos.document.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Table(name = "document_chunks")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DocumentChunk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "document_content_id", nullable = false)
    private DocumentContent documentContent;

    @Column(nullable = false)
    private Integer chunkIndex;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String chunkText;

    @Column(nullable = false)
    private Integer characterCount;

}
