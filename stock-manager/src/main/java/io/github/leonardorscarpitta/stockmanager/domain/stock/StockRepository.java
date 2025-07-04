package io.github.leonardorscarpitta.stockmanager.domain.stock;

import io.github.leonardorscarpitta.stockmanager.domain.stock.dto.StockResponseDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface StockRepository extends JpaRepository<Stock, UUID> {
    StockResponseDTO findByStockName(String stockName);
}
