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
  stockService: Stock = inject(Stock);

  nome: string = '';
  valorAtual: number = 0;
  valorCompra: number = 0;
  quantidade: number = 0;

  private searchTimeout: any;
  isSearching: boolean = false;

  onStockNameChange(value: string): void {
    this.nome = value;
    
    // Limpar timeout anterior
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Aguardar 1.5 segundos após parar de digitar
    this.searchTimeout = setTimeout(async () => {
      if (value.trim().length >= 3) {
        await this.fetchStockPrice(value.trim());
      }
    }, 1500);
  }

  private async fetchStockPrice(stockName: string): Promise<void> {
    this.isSearching = true;
    
    try {
      this.valorAtual = await this.stockService.getStockPrice(stockName);
    } catch (error) {
      console.log('Erro ao buscar preço:', error);
      this.valorAtual = 0;
    } finally {
      this.isSearching = false;
    }
  }

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
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours().toString().padStart(2, "0");
    const minute = currentDate.getMinutes().toString().padStart(2, "0");

    const formatedTime = `${day}/${month}/${year} - ${hour}:${minute}`;

    const newStock: STOCK = {
      nome: this.nome,
      quantidade: this.quantidade,
      valorCompra: this.valorCompra,
      valorAtual: this.valorAtual,
      timestamp: formatedTime,
      tipoAcao: this.formatStockType(this.nome)
    };

    this.stockService.addStock(newStock);

    // Limpar formulário
    this.nome = "";
    this.quantidade = 0;
    this.valorCompra = 0;
    this.valorAtual = 0;
  }
}
