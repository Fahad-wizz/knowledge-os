package com.fahad.knowledgeos.auth.controller;

import com.fahad.knowledgeos.auth.dto.request.RegisterRequest;
import com.fahad.knowledgeos.auth.dto.response.RegisterResponse;
import com.fahad.knowledgeos.auth.service.AuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public RegisterResponse register(
            @Valid @RequestBody RegisterRequest request) {

        return authenticationService.register(request);
    }

}