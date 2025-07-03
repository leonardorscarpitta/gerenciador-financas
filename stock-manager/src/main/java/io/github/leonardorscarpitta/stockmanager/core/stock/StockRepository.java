package io.github.leonardorscarpitta.stockmanager.core.stock;

import io.github.leonardorscarpitta.stockmanager.core.stock.dto.StockResponseDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface StockRepository extends JpaRepository<Stock, UUID> {
    StockResponseDTO findByStockName(String stockName);
}
