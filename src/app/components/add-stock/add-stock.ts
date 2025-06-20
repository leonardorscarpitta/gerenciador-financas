import { Component, inject } from '@angular/core';
import { STOCK } from '../../mock-acoes';
import { CommonModule } from '@angular/common';
import { Stock } from '../../services/stock-service/stock';

@Component({
  selector: 'app-add-stock',
  imports: [CommonModule],
  templateUrl: './add-stock.html'
})
export class AddStock {
  stockSerivce: Stock = inject(Stock);

  nome: string = '';
  valorAtual: number = 0;
  valorCompra: number = 0;
  quantidade: number = 0;

  formatStockType(name: string): string {
    const stockValue = name.match(/\d+$/);
    const stockNumber = stockValue ? parseInt(stockValue[0]) : null;
    
    if (stockNumber == null || isNaN(stockNumber)) return "Código inválido";

    switch (stockNumber) {
      case 1:
        return "Ação ordinária: VOTO";
      case 2:
        return "Ação preferencial classe A";
      case 3:
        return "Ação ordinária";
      case 4:
        return "Ação preferencial";
      case 11:
        return "Units";
      case 33:
        return "BDRs";
      case 34:
        return "BDRs";
      default:
        return "Código Inválido";
    }
  }

  addStock(): void {
    const alreadyExists = this.stockSerivce.findStockByName(this.nome);

    if (!this.nome || this.nome.trim().length == 0) {
      alert("O nome não pode estar vazio!")
      return;
    }

    if (this.valorCompra <= 0 || this.quantidade <= 0) {
      alert("Preenhcha os dados corretamente!")
      return;
    }
    
    if (alreadyExists) {
      alreadyExists.valorCompra += this.valorCompra;
    } else {
      const currentDate = new Date();
      const formatedTime = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} - ${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, "0")}`;

      const newStock: STOCK = {
        nome: this.nome.toUpperCase(),
        valorAtual: this.valorAtual,
        valorCompra: this.valorCompra,
        quantidade: this.quantidade,
        timestamp: formatedTime,
        tipoAcao: this.formatStockType(this.nome)
      }
      this.nome = "";
      this.quantidade = 0;
      this.valorCompra = 0;
      this.quantidade = 0;
      this.stockSerivce.addStock(newStock);
    }

  }
}
