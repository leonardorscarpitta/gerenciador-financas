package io.github.leonardorscarpitta.stockmanager.core.stock.dto;

import java.math.BigDecimal;

public record StockRequestDTO(
        String stockName,
        short quantityBought,
        BigDecimal valueBought
) {}
