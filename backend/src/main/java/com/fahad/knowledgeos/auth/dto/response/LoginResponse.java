package com.fahad.knowledgeos.auth.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResponse {

    private String accessToken;

    private String tokenType;

    private Long userId;

    private String fullName;

    private String email;

}