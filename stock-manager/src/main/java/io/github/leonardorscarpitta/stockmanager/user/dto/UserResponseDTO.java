package io.github.leonardorscarpitta.stockmanager.user.dto;

import io.github.leonardorscarpitta.stockmanager.user.User;

import java.util.UUID;

public record UserResponseDTO(UUID id, String username, String email, String password) {

    public UserResponseDTO(User user) {
        this (user.getId(), user.getUsername(), user.getEmail(), user.getPassword());
    }
}
