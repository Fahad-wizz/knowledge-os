package com.fahad.knowledgeos.ai.llm.config;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OllamaChatConfig {

    @Bean
    ChatClient chatClient(ChatModel chatModel) {

        return ChatClient.create(chatModel);

    }

}