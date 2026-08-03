package com.fahad.knowledgeos.document.processing;
import com.fahad.knowledgeos.document.dto.response.ExtractionResponse;

public interface DocumentProcessingService {

    ExtractionResponse process(Long documentId);

    ExtractionResponse reprocess(Long documentId);

    void deleteArtifacts(Long documentId);

}