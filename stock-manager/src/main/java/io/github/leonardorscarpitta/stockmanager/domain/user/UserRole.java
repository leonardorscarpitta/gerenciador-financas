package io.github.leonardorscarpitta.stockmanager.domain.user;

import lombok.Getter;

@Getter
public enum UserRole {
    DEFAULTUSER("default_user");

    private final String role;

    UserRole(String role) {
        this.role = role;
    }
}
