package com.fahad.knowledgeos.document.chunking.strategy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.document.chunking.ChunkingProperties;
import com.fahad.knowledgeos.document.chunking.model.Chunk;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RecursiveChunkingService
        implements ChunkingService {
            private final ChunkingProperties properties;

    @Override
    public List<Chunk> chunk(String text) {

        List<String> pieces = splitRecursively(text);

        return mergeWithOverlap(pieces);
    }

    private List<String> splitRecursively(String text) {
        List<String> result = new ArrayList<>();
        recursiveSplit(text, result);
        return result;
    }

    private void recursiveSplit(String text,
                            List<String> output) {
        if (text.length() <= properties.getMaxSize()) {
            output.add(text.trim());
            return;
        }
        List<String> paragraphs = splitByParagraph(text);
        if (paragraphs.size() > 1) {
            for (String paragraph : paragraphs) {
                recursiveSplit(paragraph, output);
            }
            return;
        }
        List<String> sentences = splitBySentence(text);
        if (sentences.size() > 1) {
            output.addAll(mergeSentences(sentences));
            return;
        }
        output.addAll(splitLargeText(text));
    }

    private List<String> mergeSentences(List<String> sentences) {
        List<String> result = new ArrayList<>();
        StringBuilder current = new StringBuilder();
        for (String sentence : sentences) {
            if (current.length() + sentence.length()
                    <= properties.getMaxSize()) {
                if (current.length() > 0) {
                    current.append(" ");
                }
                current.append(sentence);
            } else {
                if (current.length() > 0) {
                    result.add(current.toString());
                }
                current = new StringBuilder(sentence);
            }
        }

        if (current.length() > 0) {
            result.add(current.toString());
        }
        return result;
    }

    private List<String> splitLargeText(String text) {
        List<String> result = new ArrayList<>();
        int max = properties.getMaxSize();
        int start = 0;
        while (start < text.length()) {
            int end = Math.min(start + max, text.length());
            result.add(text.substring(start, end));
            start = end;
        }
        return result;
    }

    private List<String> splitByParagraph(String text) {
        return Arrays.stream(text.split("\\n\\s*\\n"))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .toList();
    }

    private List<String> splitBySentence(String text) {
        return Arrays.stream(text.split("(?<=[.!?])\\s+"))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .toList();
    }

    // private List<String> splitByWord(String text) {
    //     return Arrays.stream(text.split("\\s+"))
    //             .filter(s -> !s.isBlank())
    //             .toList();
    // }

    private List<Chunk> mergeWithOverlap(List<String> pieces) {
        List<Chunk> chunks = new ArrayList<>();

        StringBuilder current = new StringBuilder();

        int index = 0;

        for (String piece : pieces) {

            if (current.length() + piece.length() <= properties.getMaxSize()) {

                if (current.length() > 0) {
                    current.append("\n\n");
                }

                current.append(piece);

            } else {

                if (current.length() > 0) {
                    chunks.add(createChunk(index++, current.toString()));
                }
                if (piece.length() > properties.getMaxSize()) {
                    List<String> smallerPieces = splitBySentence(piece);
                    for (String small : smallerPieces) {
                        if (small.length() <= properties.getMaxSize()) {
                            chunks.add(createChunk(index++, small));
                        } else {
                            List<String> words = splitLargeText(small);
                            for (String wordChunk : words) {
                                chunks.add(createChunk(index++, wordChunk));

                            }
                        }
                    }

                    current = new StringBuilder();

                } else {

                    current = new StringBuilder(piece);

                }
            }
        }

        if (current.length() > 0) {
            chunks.add(createChunk(index, current.toString()));
        }

        return chunks;
    }
    private Chunk createChunk(int index, String text) {

        return Chunk.builder()
                .chunkIndex(index)
                .content(text)
                .characterCount(text.length())
                .build();
    }

    @Override
    public boolean supports(String contentType) {
        return true;
    }

}