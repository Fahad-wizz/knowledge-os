package com.fahad.knowledgeos.document.dto.response;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DocumentResponse {

    private Long id;

    private String originalFileName;

    private String extension;

    private Long fileSize;

    private String status;

}