package com.fahad.knowledgeos.knowledgesource.scanner;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Component;

@Component
public class LocalFolderScanner implements FolderScanner {

    private static final Set<String> SUPPORTED_EXTENSIONS = Set.of(
            "pdf",
            "doc", "docx",
            "txt",
            "md", "markdown");

    @Override
    public List<Path> scan(Path root) {

        validateRoot(root);

        try {

            return Files.walk(root)
                    .filter(Files::isRegularFile)
                    .filter(this::isSupported)
                    .sorted()
                    .toList();

        } catch (IOException e) {

            throw new RuntimeException(
                    "Failed to scan folder: " + root,
                    e);

        }

    }

    private void validateRoot(Path root) {

        if (root == null) {

            throw new IllegalArgumentException(
                    "Folder path cannot be null");

        }

        if (!Files.exists(root)) {

            throw new IllegalArgumentException(
                    "Folder does not exist: " + root);

        }

        if (!Files.isDirectory(root)) {

            throw new IllegalArgumentException(
                    "Path is not a directory: " + root);

        }

    }

    private boolean isSupported(Path path) {

        String filename =
                path.getFileName().toString();

        int dot =
                filename.lastIndexOf('.');

        if (dot == -1) {

            return false;

        }

        String extension =
                filename.substring(dot + 1)
                        .toLowerCase();

        return SUPPORTED_EXTENSIONS
                .contains(extension);

    }

}