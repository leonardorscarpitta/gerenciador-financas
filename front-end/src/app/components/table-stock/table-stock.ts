import { Component, inject } from '@angular/core';
import { Stock } from '../../services/stock-service/stock';

@Component({
  selector: 'app-table-stock',
  imports: [],
  templateUrl: './table-stock.html'
})
export class TableStock {
  stockService: Stock = inject(Stock);

  removeStock(index: number): void {
    this.stockService.removeStock(index);
  }
}
