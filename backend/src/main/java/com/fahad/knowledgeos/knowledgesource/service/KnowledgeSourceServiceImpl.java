package com.fahad.knowledgeos.knowledgesource.service;

import java.nio.file.Paths;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fahad.knowledgeos.auth.security.CurrentUserService;
import com.fahad.knowledgeos.common.exception.KnowledgeSourceAlreadyExistsException;
import com.fahad.knowledgeos.knowledgesource.dto.request.KnowledgeSourceRequest;
import com.fahad.knowledgeos.knowledgesource.dto.response.KnowledgeSourceResponse;
import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSource;
import com.fahad.knowledgeos.knowledgesource.entity.KnowledgeSourceStatus;
import com.fahad.knowledgeos.knowledgesource.mapper.KnowledgeSourceMapper;
import com.fahad.knowledgeos.knowledgesource.repository.KnowledgeSourceRepository;
import com.fahad.knowledgeos.user.entity.User;
import com.fahad.knowledgeos.user.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class KnowledgeSourceServiceImpl
        implements KnowledgeSourceService {

    private final KnowledgeSourceRepository repository;

    private final CurrentUserService currentUserService;

    private final UserService userService;

    @Override
    public KnowledgeSourceResponse create(
            KnowledgeSourceRequest request) {

        Long ownerId = currentUserService.getCurrentUserId();

        String normalizedPath = Paths.get(request.getRootPath())
                .normalize()
                .toAbsolutePath()
                .toString();

        if (repository.existsByOwnerIdAndRootPath(
                ownerId,
                normalizedPath)) {

            throw new KnowledgeSourceAlreadyExistsException(
                    normalizedPath);

        }

        User owner = userService
                .findById(ownerId)
                .orElseThrow(() ->
                        new IllegalStateException(
                                "Authenticated user not found."));

        KnowledgeSource source =
                KnowledgeSourceMapper.toEntity(
                        request,
                        owner);

        // Set business fields here
        source.setRootPath(normalizedPath);
        source.setStatus(KnowledgeSourceStatus.INDEXING);

        KnowledgeSource saved =
                repository.save(source);

        return KnowledgeSourceMapper
                .toResponse(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public List<KnowledgeSourceResponse> findAll() {

        Long ownerId =
                currentUserService.getCurrentUserId();

        return repository.findByOwnerId(ownerId)
                .stream()
                .map(KnowledgeSourceMapper::toResponse)
                .toList();

    }

    @Override
    @Transactional(readOnly = true)
    public KnowledgeSourceResponse findById(
            Long id) {

        Long ownerId =
                currentUserService.getCurrentUserId();

        KnowledgeSource source =
                repository.findByIdAndOwnerId(
                        id,
                        ownerId)
                        .orElseThrow(() ->
                                new IllegalArgumentException(
                                        "Knowledge source not found."));

        return KnowledgeSourceMapper
                .toResponse(source);

    }

    @Override
    public void delete(Long id) {

        Long ownerId =
                currentUserService.getCurrentUserId();

        KnowledgeSource source =
                repository.findByIdAndOwnerId(
                        id,
                        ownerId)
                        .orElseThrow(() ->
                                new IllegalArgumentException(
                                        "Knowledge source not found."));

        repository.delete(source);

    }

}