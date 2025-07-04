package io.github.leonardorscarpitta.stockmanager.domain.stock.dto;

import io.github.leonardorscarpitta.stockmanager.domain.stock.Stock;

import java.math.BigDecimal;
import java.util.UUID;

public record StockResponseDTO(UUID id, UUID userOwner, String stockName, short quantityBought, BigDecimal valueBought) {

    public StockResponseDTO(Stock stock) {
        this (stock.getId(), stock.getUserOwner().getId(), stock.getStockName(), stock.getQuantityBought(), stock.getValueBought());
    }

}
