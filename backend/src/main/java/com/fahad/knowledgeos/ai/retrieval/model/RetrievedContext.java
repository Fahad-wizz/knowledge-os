package com.fahad.knowledgeos.ai.retrieval.model;

import java.util.List;
import com.fahad.knowledgeos.ai.search.dto.SearchResult;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RetrievedContext {
    private List<SearchResult> chunks;
    private double confidence;
    private boolean sufficient;
    
}
