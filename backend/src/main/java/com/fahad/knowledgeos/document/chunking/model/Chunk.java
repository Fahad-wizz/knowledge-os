package com.fahad.knowledgeos.document.chunking.model;

import lombok.*;
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Chunk {

    private Integer chunkIndex;

    private String content;

    private Integer characterCount;

}