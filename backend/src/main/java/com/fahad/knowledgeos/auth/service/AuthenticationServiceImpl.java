package com.fahad.knowledgeos.auth.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.auth.dto.request.LoginRequest;
import com.fahad.knowledgeos.auth.dto.request.RegisterRequest;
import com.fahad.knowledgeos.auth.dto.response.LoginResponse;
import com.fahad.knowledgeos.auth.dto.response.RegisterResponse;
import com.fahad.knowledgeos.auth.jwt.JwtService;
import com.fahad.knowledgeos.user.entity.User;
import com.fahad.knowledgeos.user.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public RegisterResponse register(RegisterRequest request) {

        if (userService.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already registered.");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        User saved = userService.save(user);

        return RegisterResponse.builder()
                .id(saved.getId())
                .fullName(saved.getFullName())
                .email(saved.getEmail())
                .message("Registration successful.")
                .build();
    }


    @Override
    public LoginResponse login(LoginRequest request) {

        User user =
                userService.findByEmail(request.getEmail())
                        .orElseThrow(() ->
                                new IllegalArgumentException(
                                        "Invalid email or password."));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new IllegalArgumentException(
                    "Invalid email or password.");
        }

        String token =
                jwtService.generateToken(
                        user.getEmail());

        return LoginResponse.builder()
                .accessToken(token)
                .tokenType("Bearer")
                .userId(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .build();
    }
    
}
