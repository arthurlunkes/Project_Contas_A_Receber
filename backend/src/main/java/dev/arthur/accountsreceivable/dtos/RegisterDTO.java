package dev.arthur.accountsreceivable.dtos;

import dev.arthur.accountsreceivable.security.UserRole;

public record RegisterDTO(String login, String password, UserRole role) {
}