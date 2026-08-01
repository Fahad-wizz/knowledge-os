package com.fahad.knowledgeos.ai.llm.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OllamaLlmService implements LlmService {

    private final ChatClient chatClient;

    @Override
    public String generate(String prompt) {

        return chatClient.prompt()
                .user(prompt)
                .call()
                .content();

    }

}