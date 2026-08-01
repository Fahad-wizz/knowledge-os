package com.fahad.knowledgeos.document.extraction.model;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExtractionResult {

    private String text;

    private Integer pageCount;

    private Integer characterCount;

}