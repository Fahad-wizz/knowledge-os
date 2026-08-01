package com.fahad.knowledgeos.ai.rag.prompt;

import java.util.List;

import org.springframework.stereotype.Component;

import com.fahad.knowledgeos.ai.search.dto.SearchResult;

@Component
public class PromptBuilder {

    public String build(
        String question,
        List<SearchResult> context) {

    StringBuilder prompt = new StringBuilder();

    prompt.append("""
    You are KnowledgeOS AI.

    You answer questions ONLY using the provided document context.

    Rules:

    1. Never invent information.
    2. If the answer is not present in the context, reply:
    "I couldn't find that information in the uploaded documents."
    3. Be concise and accurate.
    4. Use bullet points when appropriate.
    5. Mention the document name whenever possible.
    6. Do not use outside knowledge.

    ========================
    DOCUMENT CONTEXT
    ========================

    """);

        for (SearchResult result : context) {

            prompt.append("Document: ")
                .append(result.getDocumentName())
                .append("\n");

            prompt.append("Chunk: ")
                .append(result.getChunkIndex())
                .append("\n");

            prompt.append(result.getSnippet());

            prompt.append("\n\n---------------------------------\n\n");
        }

        prompt.append("""
    ========================
    QUESTION
    ========================

    """);

        prompt.append(question);

        prompt.append("""

    ========================
    ANSWER
    ========================

    """);

        return prompt.toString();
    }

}