package com.fahad.knowledgeos.document.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fahad.knowledgeos.ai.embedding.EmbeddingService;
// import com.fahad.knowledgeos.ai.llm.service.LlmService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/test")
@RequiredArgsConstructor
public class AiTestController {

    private final EmbeddingService embeddingService;

    @GetMapping("/embedding")
    public float[] embedding(
            @RequestParam String text) {

        return embeddingService.embed(text);

    }
    @GetMapping("/embedding-size")
    public int embeddingSize() {

        return embeddingService
                .embed("Hello World")
                .length;
    }

    // @RestController
    // @RequestMapping("/api/llm")
    // @RequiredArgsConstructor
    // public class LlmTestController {

    //     private final LlmService llmService;

    //     @GetMapping
    //     public String ask(@RequestParam String prompt) {

    //         return llmService.generate(prompt);

    //     }

    // }


}