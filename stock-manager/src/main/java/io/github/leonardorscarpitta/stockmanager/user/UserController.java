package io.github.leonardorscarpitta.stockmanager.user;

import io.github.leonardorscarpitta.stockmanager.stock.dto.StockResponseDTO;
import io.github.leonardorscarpitta.stockmanager.user.dto.UserRequestDTO;
import io.github.leonardorscarpitta.stockmanager.user.dto.UserResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public HashMap<String, Object> createUser(@RequestBody UserRequestDTO userRequestDTO) {
        UserResponseDTO userResponseDTO = userService.createUser(userRequestDTO);
        HashMap<String, Object> response = new HashMap<>();
        response.put("status", HttpStatus.CREATED);
        response.put("created_user", userResponseDTO.id());
        return response;
    }
}
