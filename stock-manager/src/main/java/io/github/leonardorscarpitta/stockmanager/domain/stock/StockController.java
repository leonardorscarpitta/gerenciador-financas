package io.github.leonardorscarpitta.stockmanager.domain.stock;

import io.github.leonardorscarpitta.stockmanager.domain.stock.dto.StockRequestDTO;
import io.github.leonardorscarpitta.stockmanager.domain.stock.dto.StockResponseDTO;
import io.github.leonardorscarpitta.stockmanager.domain.user.User;
import io.github.leonardorscarpitta.stockmanager.utils.B3ApiService;
import io.github.leonardorscarpitta.stockmanager.utils.ManageResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;

@RestController
@RequestMapping("/api/stock")
public class StockController {

    private final StockService stockService;
    private final B3ApiService b3ApiService;

    public StockController(StockService stockService, B3ApiService b3ApiService) {
        this.stockService = stockService;
        this.b3ApiService = b3ApiService;
    }

    @PostMapping("/add")
    public ResponseEntity<HashMap<String, Object>> addNewStock(
            @RequestBody StockRequestDTO stockRequestDTO,
            Authentication authentication) {
        User currentUser = (User) authentication.getPrincipal();
        StockResponseDTO stockResponseDTO = stockService.addNewStock(stockRequestDTO, currentUser);

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
                "stock found",
                stockResponseDTO
        );

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/symbol/{symbol}")
    public ResponseEntity<String> checkSymbolPrice(@PathVariable String symbol) throws IOException, InterruptedException {
        String response = b3ApiService.checkSymbolPrice(symbol);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
    }
}
