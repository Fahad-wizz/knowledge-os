package com.fahad.knowledgeos.document.extraction;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;

import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.document.extraction.model.ExtractionResult;

@Service
public class DocxExtractionService
        implements ExtractionService {

    @Override
    public ExtractionResult extract(Path path) {

        try (InputStream input = Files.newInputStream(path);
             XWPFDocument document = new XWPFDocument(input);
             XWPFWordExtractor extractor = new XWPFWordExtractor(document)) {

            String text = extractor.getText();

            return ExtractionResult.builder()
                    .text(text)
                    .pageCount(1) // DOCX doesn't expose pages reliably
                    .characterCount(text.length())
                    .build();

        } catch (IOException ex) {

            throw new RuntimeException(
                    "Failed to extract DOCX.",
                    ex);

        }

    }

    @Override
    public boolean supports(String extension) {

        return "docx".equalsIgnoreCase(extension)
                || "doc".equalsIgnoreCase(extension);

    }

}