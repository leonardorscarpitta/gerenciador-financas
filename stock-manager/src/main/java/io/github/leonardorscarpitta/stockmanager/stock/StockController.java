package io.github.leonardorscarpitta.stockmanager.stock;

import io.github.leonardorscarpitta.stockmanager.stock.dto.StockRequestDTO;
import io.github.leonardorscarpitta.stockmanager.stock.dto.StockResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/stock")
public class StockController {

    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @PostMapping("/add")
    public HashMap<String, Object> addNewStock(@RequestBody StockRequestDTO stockRequestDTO) {
        StockResponseDTO stockResponseDTO = stockService.addNewStock(stockRequestDTO);
        HashMap<String, Object> response = new HashMap<>();
        response.put("status", HttpStatus.CREATED);
        response.put("stockCreated", stockResponseDTO);
        return response;
    }
}
