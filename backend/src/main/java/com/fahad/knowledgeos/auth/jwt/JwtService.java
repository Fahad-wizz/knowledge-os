package com.fahad.knowledgeos.auth.jwt;

import com.fahad.knowledgeos.user.entity.User;

public interface JwtService {

    String generateToken(String email);

    String extractUsername(String token);

    boolean isTokenValid(
        String token,
        User user);

}