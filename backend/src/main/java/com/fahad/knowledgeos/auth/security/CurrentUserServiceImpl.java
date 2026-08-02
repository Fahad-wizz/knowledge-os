package com.fahad.knowledgeos.auth.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.fahad.knowledgeos.auth.principal.AuthenticatedUser;

@Service
public class CurrentUserServiceImpl
        implements CurrentUserService {

    @Override
    public AuthenticatedUser getCurrentUser() {

        Authentication authentication =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication();

        return (AuthenticatedUser)
                authentication.getPrincipal();
    }

    @Override
    public Long getCurrentUserId() {
        return getCurrentUser().getId();
    }

}