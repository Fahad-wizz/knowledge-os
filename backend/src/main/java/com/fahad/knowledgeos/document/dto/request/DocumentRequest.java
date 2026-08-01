package com.fahad.knowledgeos.document.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class DocumentRequest {

    @NotBlank(message = "Document name is required")
    private String name;

    @NotBlank(message = "Document path is required")
    private String storagePath;

    @NotBlank(message = " Extension is required")
    private String extension;

    @NotBlank(message = "Content type is required")
    private String contentType;

    @Positive(message = "size must be greater than zero")
    private Long size;

}