package io.github.leonardorscarpitta.stockmanager.core.stock;

import io.github.leonardorscarpitta.stockmanager.core.stock.dto.StockRequestDTO;
import io.github.leonardorscarpitta.stockmanager.core.stock.dto.StockResponseDTO;
import io.github.leonardorscarpitta.stockmanager.utils.ManageResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<HashMap<String, Object>> addNewStock(@RequestBody StockRequestDTO stockRequestDTO) {
        StockResponseDTO stockResponseDTO = stockService.addNewStock(stockRequestDTO);

        HashMap<String, Object> response = ManageResponse.manage(
                HttpStatus.CREATED,
                "stock added",
                stockResponseDTO
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{name}")
    public ResponseEntity<HashMap<String, Object>> findStockByName(@PathVariable String name) {
        StockResponseDTO stockResponseDTO = stockService.findStockByName(name);

        HashMap<String, Object> response = ManageResponse.manage(
                HttpStatus.OK,
                "stock founded",
                stockResponseDTO
        );

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
