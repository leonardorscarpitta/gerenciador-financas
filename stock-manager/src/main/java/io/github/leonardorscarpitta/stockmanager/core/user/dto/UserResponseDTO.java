package io.github.leonardorscarpitta.stockmanager.core.user.dto;

import io.github.leonardorscarpitta.stockmanager.core.user.User;
import io.github.leonardorscarpitta.stockmanager.core.user.UserRole;

import java.util.UUID;

public record UserResponseDTO(UUID id, String email, UserRole userRole) {

    public UserResponseDTO(User user) {
        this (user.getId(), user.getEmail(), user.getRole());
    }
}
