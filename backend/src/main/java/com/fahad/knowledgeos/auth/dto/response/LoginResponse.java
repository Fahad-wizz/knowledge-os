package com.fahad.knowledgeos.auth.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResponse {

    private String token;

    private String type;

    private String fullName;

    private String email;

}