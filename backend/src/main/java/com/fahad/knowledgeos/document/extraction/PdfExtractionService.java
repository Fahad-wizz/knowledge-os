package com.fahad.knowledgeos.document.extraction;
import java.io.IOException;
import java.nio.file.Path;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.document.extraction.model.ExtractionResult;

@Service
public class PdfExtractionService implements ExtractionService {

    @Override
    public ExtractionResult extract(Path path) {

        try (PDDocument document = Loader.loadPDF(path.toFile())) {

            PDFTextStripper stripper = new PDFTextStripper();

            String text = stripper.getText(document);

            return ExtractionResult.builder()
                    .text(text)
                    .pageCount(document.getNumberOfPages())
                    .characterCount(text.length())
                    .build();

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public boolean supports(String extension) {
        return "pdf".equalsIgnoreCase(extension);
    }
}
