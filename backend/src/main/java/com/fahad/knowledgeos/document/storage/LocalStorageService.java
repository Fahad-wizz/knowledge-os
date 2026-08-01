package com.fahad.knowledgeos.document.storage;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fahad.knowledgeos.document.storage.model.StoredFile;


@Service
public class LocalStorageService implements StorageService{
    
   @Value("${storage.upload-dir}")
    private String uploadDir;

    @Override
    public StoredFile store(MultipartFile file) {

        try {

            String originalFileName = file.getOriginalFilename();

            if (originalFileName == null || originalFileName.isBlank()) {
                throw new IllegalArgumentException("Invalid file name.");
            }

            String extension = getExtension(originalFileName);

            String storedFileName = UUID.randomUUID() + "." + extension;

            Path directory = Paths.get(uploadDir, extension);

            Files.createDirectories(directory);

            Path destination = directory.resolve(storedFileName);

            Files.copy(
                file.getInputStream(),
                destination,
                StandardCopyOption.REPLACE_EXISTING
            );

            return StoredFile.builder()
                    .originalFileName(originalFileName)
                    .storedFileName(storedFileName)
                    .extension(extension)
                    .contentType(file.getContentType())
                    .fileSize(file.getSize())
                    .storagePath(destination.toString())
                    .build();

        } catch (IOException e) {
            throw new RuntimeException("Failed to store file.", e);
        }
    }

    private String getExtension(String filename) {

        int index = filename.lastIndexOf('.');

        if (index == -1) {
            throw new IllegalArgumentException("File has no extension.");
        }

        return filename.substring(index + 1).toLowerCase();
    }

}
