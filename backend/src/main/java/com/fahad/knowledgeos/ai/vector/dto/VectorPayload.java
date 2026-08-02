package com.fahad.knowledgeos.ai.vector.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VectorPayload {

    private Long ownerId;

    private Long documentId;

    private Long documentContentId;

    private Long chunkId;

    private Integer chunkIndex;

    private String documentName;

    private String contentType;

    private String text;

    // Generate getters and setters
}