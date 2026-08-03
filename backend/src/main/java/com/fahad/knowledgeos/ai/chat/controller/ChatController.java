package com.fahad.knowledgeos.ai.chat.controller;

import org.springframework.web.bind.annotation.*;

import com.fahad.knowledgeos.ai.chat.dto.ChatRequest;
import com.fahad.knowledgeos.ai.chat.dto.ChatResponse;
import com.fahad.knowledgeos.ai.rag.dto.RagResponse;
import com.fahad.knowledgeos.ai.rag.service.RagService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final RagService ragService;

    @PostMapping
    public ChatResponse chat(

            @Valid
            @RequestBody
            ChatRequest request) {

        RagResponse rag =

                ragService.ask(

                        request.getMessage()

                );

        return ChatResponse.builder()

                .answer(rag.getAnswer())

                .sources(rag.getSources())

                .build();

    }

}