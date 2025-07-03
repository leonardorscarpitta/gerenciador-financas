package io.github.leonardorscarpitta.stockmanager.core.stock;

import io.github.leonardorscarpitta.stockmanager.core.stock.dto.StockRequestDTO;
import io.github.leonardorscarpitta.stockmanager.core.stock.dto.StockResponseDTO;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    private final StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public StockResponseDTO addNewStock(StockRequestDTO stockRequestDTO) {
        Stock stock = new Stock(
                stockRequestDTO.stockName(),
                stockRequestDTO.quantityBought(),
                stockRequestDTO.valueBought()
        );

        Stock savedStock = stockRepository.save(stock);
        return new StockResponseDTO(savedStock);
    }

    public StockResponseDTO findStockByName(String stockName) {
        return stockRepository.findByStockName(stockName);
    }
}
