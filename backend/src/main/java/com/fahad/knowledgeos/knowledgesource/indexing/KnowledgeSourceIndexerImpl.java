package com.fahad.knowledgeos.knowledgesource.indexing;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.common.exception.KnowledgeSourceNotFoundException;
import com.fahad.knowledgeos.document.entity.Document;
import com.fahad.knowledgeos.document.ingestion.DocumentIngestionService;
import com.fahad.knowledgeos.document.processing.DocumentProcessingService;
import com.fahad.knowledgeos.document.service.DocumentService;
import com.fahad.knowledgeos.knowledgesource.dto.response.IndexingSummary;
import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSource;
import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSourceStatus;
import com.fahad.knowledgeos.knowledgesource.repository.KnowledgeSourceRepository;
import com.fahad.knowledgeos.knowledgesource.scanner.FolderScanner;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class KnowledgeSourceIndexerImpl
        implements KnowledgeSourceIndexer {

    private final KnowledgeSourceRepository repository;

    private final FolderScanner folderScanner;

    private final DocumentIngestionService ingestionService;

    private final DocumentService documentService;

    private final DocumentProcessingService processingService;

    @Override
    public IndexingSummary index(Long knowledgeSourceId) {
        long start = System.currentTimeMillis();

        KnowledgeSource source =
                repository.findById(knowledgeSourceId)
                        .orElseThrow(() ->
                                new KnowledgeSourceNotFoundException(
                                        knowledgeSourceId));

        try {

            source.setStatus(
                    KnowledgeSourceStatus.INDEXING);

            List<Path> files =
                    folderScanner.scan(
                            Path.of(source.getRootPath()));

            int indexed = 0;
            int skipped = 0;
            int failed = 0;

            for (Path file : files) {

                try {

                    Optional<Document> existing =
                            documentService.findIndexedDocument(file);

                    if (existing.isPresent()) {

                        long currentLastModified =
                                Files.getLastModifiedTime(file)
                                        .toMillis();

                        if (existing.get().getLastModified()
                                == currentLastModified) {

                                skipped++;
                                continue;

                        }

                        processingService.reprocess(
                                existing.get().getId());

                        indexed++;

                        continue;

                }

                    ingestionService.register(file);

                    indexed++;

                }

                catch (Exception ex) {

                    failed++;

                    log.warn(
                            "Failed to index {}",
                            file,
                            ex);

                }

            }

            log.info(
                    "Indexing complete. Indexed={}, Skipped={}, Failed={}",
                    indexed,
                    skipped,
                    failed);

            source.setStatus(
                    KnowledgeSourceStatus.ACTIVE);

            long duration = System.currentTimeMillis() - start;

            return IndexingSummary.builder()
                    .knowledgeSourceId(source.getId())
                    .totalFiles(files.size())
                    .indexed(indexed)
                    .skipped(skipped)
                    .failed(failed)
                    .durationMs(duration)
                    .build();

        }

        catch (Exception ex) {

            source.setStatus(
                    KnowledgeSourceStatus.FAILED);

            throw ex;

        }

    }

}