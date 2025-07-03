package io.github.leonardorscarpitta.stockmanager.core.stock.dto;

import io.github.leonardorscarpitta.stockmanager.core.stock.Stock;
import io.github.leonardorscarpitta.stockmanager.core.user.User;

import java.math.BigDecimal;
import java.util.UUID;

public record StockResponseDTO(UUID id, User userOwner, String stockName, short quantityBought, BigDecimal valueBought) {

    public StockResponseDTO(Stock stock) {
        this (stock.getId(), stock.getUserOwner(), stock.getStockName(), stock.getQuantityBought(), stock.getValueBought());
    }

}
