package com.fahad.knowledgeos.document.storage;

import java.nio.file.Path;

import org.springframework.web.multipart.MultipartFile;

import com.fahad.knowledgeos.document.storage.model.StoredFile;

public interface StorageService {
    StoredFile store(MultipartFile file);

    StoredFile register(Path path);
}
