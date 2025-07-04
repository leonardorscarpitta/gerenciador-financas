package io.github.leonardorscarpitta.stockmanager.domain.user;

import io.github.leonardorscarpitta.stockmanager.domain.user.dto.UserRequestDTO;
import io.github.leonardorscarpitta.stockmanager.domain.user.dto.UserResponseDTO;
import io.github.leonardorscarpitta.stockmanager.utils.ManageResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<HashMap<String, Object>> createUser(@RequestBody UserRequestDTO userRequestDTO) {
        UserResponseDTO userResponseDTO = userService.createUser(userRequestDTO);

        HashMap<String, Object> response = ManageResponse.manage(
                HttpStatus.CREATED,
                "user registered",
                userResponseDTO
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> logUser(@RequestBody UserRequestDTO userRequestDTO) {
        String tokenJWT = userService.logUser(userRequestDTO);

        Map<String, Object> response = Map.of("token", tokenJWT);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
    }
}
