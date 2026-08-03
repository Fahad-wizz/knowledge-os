package com.fahad.knowledgeos.document.storage.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StoredFile {

    private String originalFileName;

    private String storedFileName;

    private String extension;

    private String contentType;

    private Long fileSize;

    private String storagePath;

    private Long lastModified;

}
