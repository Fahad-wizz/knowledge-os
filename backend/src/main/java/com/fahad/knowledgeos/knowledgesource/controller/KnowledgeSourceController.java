package com.fahad.knowledgeos.knowledgesource.controller;

import java.nio.file.Path;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.fahad.knowledgeos.knowledgesource.dto.request.KnowledgeSourceRequest;
import com.fahad.knowledgeos.knowledgesource.dto.response.KnowledgeSourceResponse;
import com.fahad.knowledgeos.knowledgesource.scanner.FolderScanner;
import com.fahad.knowledgeos.knowledgesource.service.KnowledgeSourceService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/knowledge-sources")
@RequiredArgsConstructor
public class KnowledgeSourceController {

    private final KnowledgeSourceService service;
    private final FolderScanner folderScanner;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public KnowledgeSourceResponse create(

            @Valid
            @RequestBody
            KnowledgeSourceRequest request) {

        return service.create(request);

    }

    @GetMapping
    public List<KnowledgeSourceResponse> findAll() {

        return service.findAll();

    }

    @GetMapping("/{id}")
    public KnowledgeSourceResponse findById(

            @PathVariable Long id) {

        return service.findById(id);

    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(

            @PathVariable Long id) {

        service.delete(id);

    }

    @GetMapping("/scan")

    public List<String> scan(

            @RequestParam String path) {

        return folderScanner

                .scan(Path.of(path))

                .stream()

                .map(Path::toString)

                .toList();

    }

}