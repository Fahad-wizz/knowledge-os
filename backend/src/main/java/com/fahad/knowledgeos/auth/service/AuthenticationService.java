package com.fahad.knowledgeos.auth.service;

import com.fahad.knowledgeos.auth.dto.request.RegisterRequest;
import com.fahad.knowledgeos.auth.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

}