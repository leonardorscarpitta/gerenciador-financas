package io.github.leonardorscarpitta.stockmanager.domain.user.dto;

public record UserRequestDTO(
        String email,
        String password
) {}
