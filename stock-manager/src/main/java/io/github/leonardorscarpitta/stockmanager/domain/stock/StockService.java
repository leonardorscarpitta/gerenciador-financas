package io.github.leonardorscarpitta.stockmanager.domain.stock;

import io.github.leonardorscarpitta.stockmanager.domain.stock.dto.StockRequestDTO;
import io.github.leonardorscarpitta.stockmanager.domain.stock.dto.StockResponseDTO;
import io.github.leonardorscarpitta.stockmanager.domain.user.User;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    private final StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public StockResponseDTO addNewStock(StockRequestDTO stockRequestDTO, User userOwner) {
        Stock stock = new Stock(
                stockRequestDTO.stockName(),
                stockRequestDTO.quantityBought(),
                stockRequestDTO.valueBought()
        );

        stock.setUserOwner(userOwner);
        Stock savedStock = stockRepository.save(stock);

        return new StockResponseDTO(savedStock);
    }

    public StockResponseDTO findStockByName(String stockName) {
        return stockRepository.findByStockName(stockName);
    }
}
