package com.fahad.knowledgeos.document.dto.response;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UploadDocumentResponse {
    
    private Long id;

    private String originalFileName;

    private String storedFileName;

    private String status;

    private LocalDateTime uploadedAt;

}
