package io.github.leonardorscarpitta.stockmanager.domain.stock.dto;

import java.math.BigDecimal;

public record StockRequestDTO(
        String stockName,
        short quantityBought,
        BigDecimal valueBought
) {}
