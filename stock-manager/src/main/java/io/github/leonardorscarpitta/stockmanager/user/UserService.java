package io.github.leonardorscarpitta.stockmanager.user;

import io.github.leonardorscarpitta.stockmanager.user.dto.UserRequestDTO;
import io.github.leonardorscarpitta.stockmanager.user.dto.UserResponseDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponseDTO createUser(UserRequestDTO userRequestDTO) {
        User user = new User(
                userRequestDTO.username(),
                userRequestDTO.email(),
                userRequestDTO.password()
        );
        User savedUser = userRepository.save(user);
        return new UserResponseDTO(savedUser);
    }
}
