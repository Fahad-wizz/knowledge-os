package com.fahad.knowledgeos.ai.vector.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VectorPayload {

    private Long documentId;

    private String documentName;

    private Long chunkId;

    private Integer chunkIndex;

    private String contentType;

    private String text;

    private Long documentContentId;

    // Generate getters and setters
}