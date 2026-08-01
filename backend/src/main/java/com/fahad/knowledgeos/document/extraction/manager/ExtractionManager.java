package com.fahad.knowledgeos.document.extraction.manager;

import java.nio.file.Paths;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.common.exception.UnsupportedDocumentTypeException;
import com.fahad.knowledgeos.document.entity.Document;
import com.fahad.knowledgeos.document.extraction.ExtractionService;
import com.fahad.knowledgeos.document.extraction.model.ExtractionResult;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExtractionManager {

    private final List<ExtractionService> extractors;

    public ExtractionResult extract(Document document) {

        return extractors.stream()

                .filter(extractor ->
                        extractor.supports(document.getExtension()))

                .findFirst()

                .orElseThrow(() ->
                        new UnsupportedDocumentTypeException(
                                document.getExtension()))

                .extract(Paths.get(document.getStoragePath()));

    }

}
