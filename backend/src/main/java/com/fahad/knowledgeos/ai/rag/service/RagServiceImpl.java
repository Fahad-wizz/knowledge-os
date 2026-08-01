package com.fahad.knowledgeos.ai.rag.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.ai.llm.service.LlmService;
import com.fahad.knowledgeos.ai.rag.dto.RagResponse;
import com.fahad.knowledgeos.ai.rag.prompt.PromptBuilder;
import com.fahad.knowledgeos.ai.retrieval.model.RetrievedContext;
import com.fahad.knowledgeos.ai.retrieval.service.RetrieverService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RagServiceImpl
        implements RagService {

    private final RetrieverService retrieverService;

    private final PromptBuilder promptBuilder;

    private final LlmService llmService;

    @Override
    public RagResponse ask(String question) {

        RetrievedContext context =
                retrieverService.retrieve(question);

        if (!context.isSufficient()) {

            return RagResponse.builder()
                    .question(question)
                    .answer("I couldn't find relevant information in the uploaded documents.")
                    .confidence(context.getConfidence())
                    .sources(List.of())
                    .build();
        }

        String prompt =
                promptBuilder.build(
                        question,
                        context.getChunks());

        String answer =
                llmService.generate(prompt);

        return RagResponse.builder()
                .question(question)
                .answer(answer)
                .confidence(context.getConfidence())
                .sources(context.getChunks())
                .build();
    }

}