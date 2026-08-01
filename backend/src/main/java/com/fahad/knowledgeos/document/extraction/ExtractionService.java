package com.fahad.knowledgeos.document.extraction;

import java.nio.file.Path;

import com.fahad.knowledgeos.document.extraction.model.ExtractionResult;

public interface ExtractionService {

    boolean supports(String extension);

    ExtractionResult extract(Path path);

}