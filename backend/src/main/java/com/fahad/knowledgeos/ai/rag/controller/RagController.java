package com.fahad.knowledgeos.ai.rag.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fahad.knowledgeos.ai.rag.dto.RagResponse;
import com.fahad.knowledgeos.ai.rag.service.RagService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/rag")
@RequiredArgsConstructor
public class RagController {

    private final RagService ragService;

    @GetMapping
    public RagResponse ask(
            @RequestParam String question) {

        return ragService.ask(question);

    }

}