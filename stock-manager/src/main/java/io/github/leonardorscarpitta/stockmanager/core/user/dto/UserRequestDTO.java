package io.github.leonardorscarpitta.stockmanager.user.dto;

public record UserRequestDTO(
        String username,
        String email,
        String password
) {}
