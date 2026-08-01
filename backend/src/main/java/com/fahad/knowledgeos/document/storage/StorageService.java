package com.fahad.knowledgeos.document.storage;

import org.springframework.web.multipart.MultipartFile;

import com.fahad.knowledgeos.document.storage.model.StoredFile;

public interface StorageService {
    StoredFile store(MultipartFile file);
}
