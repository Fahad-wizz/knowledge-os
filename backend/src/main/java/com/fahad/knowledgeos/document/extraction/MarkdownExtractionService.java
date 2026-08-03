package com.fahad.knowledgeos.document.extraction;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.document.extraction.model.ExtractionResult;

@Service
public class MarkdownExtractionService
        implements ExtractionService {

    @Override
    public ExtractionResult extract(Path path) {

        try {

            String text =
                    Files.readString(path);

            return ExtractionResult.builder()
                    .text(text)
                    .pageCount(1)
                    .characterCount(text.length())
                    .build();

        }

        catch (IOException ex) {

            throw new RuntimeException(
                    "Failed to read markdown.",
                    ex);

        }

    }

    @Override
    public boolean supports(
            String extension) {

        return "md".equalsIgnoreCase(extension)
                || "markdown".equalsIgnoreCase(extension);

    }

}