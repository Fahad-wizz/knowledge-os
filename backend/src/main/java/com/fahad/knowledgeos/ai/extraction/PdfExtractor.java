package com.fahad.knowledgeos.ai.extraction;

import java.io.IOException;
import java.nio.file.Path;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;

@Service
public class PdfExtractor {

    public String extract(Path file) throws IOException {

        try (PDDocument document = Loader.loadPDF(file.toFile())) {

            PDFTextStripper stripper = new PDFTextStripper();

            return stripper.getText(document);
        }
    }
}