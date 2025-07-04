package io.github.leonardorscarpitta.stockmanager.domain.user.dto;

import io.github.leonardorscarpitta.stockmanager.domain.user.User;
import io.github.leonardorscarpitta.stockmanager.domain.user.UserRole;

import java.util.UUID;

public record UserResponseDTO(UUID id, String email, UserRole userRole) {

    public UserResponseDTO(User user) {
        this (user.getId(), user.getEmail(), user.getRole());
    }
}
