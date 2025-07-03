package io.github.leonardorscarpitta.stockmanager.core.stock;

import io.github.leonardorscarpitta.stockmanager.core.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "app_stock")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "userOwner")
@EqualsAndHashCode(exclude = "userOwner")
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userOwner;

    @Column(name = "stock_name", nullable = false, length = 5)
    private String stockName;

    @Column(nullable = false, name = "quantity_bought")
    private short quantityBought;

    @Column(nullable = false, name = "value_bought")
    private BigDecimal valueBought;

    public Stock(String stockName, short quantityBought, BigDecimal valueBought) {
        this.stockName = stockName;
        this.quantityBought = quantityBought;
        this.valueBought = valueBought;
    }
}
