import { Component } from '@angular/core';
import { MOCK_STOCKS, STOCK } from '../../mock-acoes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-stock',
  imports: [CommonModule],
  templateUrl: './add-stock.html'
})
export class AddStock {
  stock: STOCK[] = MOCK_STOCKS;

  nome: string = '';
  valorAtual: number = 0;
  valorCompra: number = 0;
  quantidade: number = 0;

  addStock(): void {
    const newStock: STOCK = {
      nome: this.nome,
      valorAtual: this.valorAtual,
      valorCompra: this.valorCompra,
      quantidade: this.quantidade
    }

    this.stock.push(newStock);
  }
}
