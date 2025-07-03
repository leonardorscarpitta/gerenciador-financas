package io.github.leonardorscarpitta.stockmanager.core.stock.dto;

import io.github.leonardorscarpitta.stockmanager.core.stock.Stock;

import java.math.BigDecimal;
import java.util.UUID;

public record StockResponseDTO(UUID id, String email, String stockName, short quantityBought, BigDecimal valueBought) {

    public StockResponseDTO(Stock stock) {
        this (stock.getId(), stock.getUserOwner().getEmail(), stock.getStockName(), stock.getQuantityBought(), stock.getValueBought());
    }

}
