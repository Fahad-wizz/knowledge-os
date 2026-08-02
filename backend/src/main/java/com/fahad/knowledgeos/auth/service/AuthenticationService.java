package com.fahad.knowledgeos.auth.service;

import com.fahad.knowledgeos.auth.dto.request.LoginRequest;
import com.fahad.knowledgeos.auth.dto.request.RegisterRequest;
import com.fahad.knowledgeos.auth.dto.response.LoginResponse;
import com.fahad.knowledgeos.auth.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}