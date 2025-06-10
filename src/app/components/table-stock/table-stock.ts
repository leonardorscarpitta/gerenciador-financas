import { Component } from '@angular/core';
import { MOCK_STOCKS, STOCK } from '../../mock-acoes';

@Component({
  selector: 'app-table-stock',
  imports: [],
  templateUrl: './table-stock.html'
})
export class TableStock {
  stocks: STOCK[] = MOCK_STOCKS;

  removeStock(index: number): void {
    this.stocks.splice(index, 1);
    alert("Ação removida com sucesso!");
  }
}
