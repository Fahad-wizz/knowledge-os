package com.fahad.knowledgeos.auth.principal;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AuthenticatedUser {

    private Long id;

    private String email;

    private String fullName;

}