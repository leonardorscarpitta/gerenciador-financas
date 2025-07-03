package io.github.leonardorscarpitta.stockmanager.utils;

import org.springframework.http.HttpStatus;

import java.util.HashMap;

public class ManageResponse {

    public static HashMap<String, Object> manage(HttpStatus statusCode, String message, Object data) {
        HashMap<String, Object> response = new HashMap<>();
        response.put("status", statusCode.value());
        response.put("message", message);
        response.put("data", data);
        return response;
    }
}
