package io.github.leonardorscarpitta.stockmanager.core.user;

import io.github.leonardorscarpitta.stockmanager.core.user.dto.UserRequestDTO;
import io.github.leonardorscarpitta.stockmanager.core.user.dto.UserResponseDTO;
import io.github.leonardorscarpitta.stockmanager.core.user.dto.token.TokenService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager manager;
    private final TokenService tokenService;

    public UserService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            AuthenticationManager manager,
            TokenService tokenService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenService = tokenService;
        this.manager = manager;
    }

    public UserResponseDTO createUser(UserRequestDTO userRequestDTO) {
        String encryptedPassword = passwordEncoder.encode(userRequestDTO.password());
        User user = new User(
                userRequestDTO.email(),
                encryptedPassword
        );
        User savedUser = userRepository.save(user);
        return new UserResponseDTO(savedUser);
    }

    public String logUser(UserRequestDTO userRequestDTO) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                userRequestDTO.email(),
                userRequestDTO.password()
        );
        Authentication authentication = manager.authenticate(usernamePasswordAuthenticationToken);
        User user = (User) authentication.getPrincipal();
        return tokenService.generateToken(user);
    }
}
