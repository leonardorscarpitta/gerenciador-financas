import { Component, inject } from '@angular/core';
import { Stock } from '../../services/stock-service/stock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-stock',
  imports: [CommonModule],
  templateUrl: './table-stock.html'
})
export class TableStock {
  stockService: Stock = inject(Stock);

  removeStock(index: number): void {
    this.stockService.removeStock(index);
  }
}
