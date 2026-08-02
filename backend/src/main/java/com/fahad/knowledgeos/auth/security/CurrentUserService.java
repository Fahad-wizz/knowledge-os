package com.fahad.knowledgeos.auth.security;

import com.fahad.knowledgeos.auth.principal.AuthenticatedUser;

public interface CurrentUserService {

    public AuthenticatedUser getCurrentUser();

    Long getCurrentUserId();

}