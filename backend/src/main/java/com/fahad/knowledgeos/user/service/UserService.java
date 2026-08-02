package com.fahad.knowledgeos.user.service;

import java.util.Optional;

import com.fahad.knowledgeos.user.entity.User;

public interface UserService {

    User save(User user);

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

}