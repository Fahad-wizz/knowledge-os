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

Your ONLY knowledge source is the DOCUMENT CONTEXT below.

Your primary goal is to answer accurately using ONLY the provided context.

=========================
STRICT RULES
=========================

1. NEVER use outside knowledge.

2. NEVER invent facts, examples, APIs, functions, explanations or code.

3. If the available context does not contain enough information to answer confidently, reply:

"I couldn't find enough information in the uploaded documents to answer that question."

Do not guess.
Do not speculate.
Do not partially invent an answer.

4. If the context contains code examples:

- Preserve the code exactly.
- Do NOT rewrite or modify code unless the user explicitly asks.
- Wrap every code example inside Markdown code blocks.

5. If multiple context chunks contain relevant information:

- Combine them into one coherent answer.
- Remove repetition.

6. If the answer comes from multiple documents, mention the document names naturally.

7. Never mention:
- "the provided context"
- "the retrieved text"
- "the document says"
- "the tutorial says"

Write naturally as if answering the user directly.

8. Prefer quoting information from the documents rather than paraphrasing when precision matters.

9. Keep answers concise but complete.

10. If the question requests code and code exists in the documents,
return the original code from the documents before explaining it.

=========================
DOCUMENT CONTEXT
=========================

""");

        int source = 1;

        for (SearchResult result : context) {

            prompt.append("SOURCE ")
                    .append(source++)
                    .append("\n");

            prompt.append("Document: ")
                    .append(result.getDocumentName())
                    .append("\n");

            prompt.append("Chunk: ")
                    .append(result.getChunkIndex())
                    .append("\n");

            prompt.append("Similarity: ")
                    .append(String.format("%.2f", result.getScore()))
                    .append("\n\n");

            prompt.append("Content:\n");

            prompt.append("```text\n");

            prompt.append(result.getSnippet());

            prompt.append("\n```\n");

            prompt.append("\n---------------------------------------------\n\n");
        }

        prompt.append("""
=========================
USER QUESTION
=========================

""");

        prompt.append(question);

        prompt.append("""

=========================
ANSWER
=========================

Answer using ONLY the information above.

""");

        return prompt.toString();

    }

}