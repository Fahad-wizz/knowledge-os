package com.fahad.knowledgeos.user.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.user.entity.User;
import com.fahad.knowledgeos.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl
        implements UserService {

    private final UserRepository repository;

    @Override
    public User save(User user) {
        return repository.save(user);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }

    @Override
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }

}