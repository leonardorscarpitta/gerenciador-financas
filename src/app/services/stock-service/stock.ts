import { Injectable } from '@angular/core';
import { MOCK_STOCKS, STOCK } from '../../mock-acoes';

@Injectable({
  providedIn: 'root'
})
export class Stock {
  private readonly STORAGE_KEY = "stocks_data";
  private stocks: STOCK[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const savedStocks = localStorage.getItem(this.STORAGE_KEY);
    
    if (savedStocks) {
      this.stocks = JSON.parse(savedStocks); // Existem ações adicionadas
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.stocks));
  }

  //addStockViaCsv(csvFile: Csv): void {}

  getStocks(): STOCK[] {
    return this.stocks;
  }

  addStock(stock: STOCK): void {
    this.stocks.push(stock);
    this.saveToStorage();
  }

  removeStock(index: number): void {
    this.stocks.splice(index, 1);
    this.saveToStorage();
  }

  updateStock(index: number, stock: STOCK): void {
    this.stocks[index] = stock;
    this.saveToStorage();
  }

  findStockByName(nome: string): STOCK | undefined {
    return this.stocks.find(s => s.nome.trim().toLowerCase() === nome.trim().toLowerCase());
  }

  clearAllStocks(): void {
    const userInput: string | null = prompt("Você tem certeza disso? (s/N)")
    if (userInput == "s") {
      this.stocks = [ ];
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  getStockUrl(stockName: string): string {
    const stockFormatedName: string = stockName.toUpperCase().replace("\n", "");
    return `https://br.tradingview.com/symbols/BMFBOVESPA-${stockFormatedName}/`;
  }

  report(): string {
    let profits = 0;
    const stockList = this.getStocks();

    const initialValue: number = (stockList[0].valorCompra * stockList[0].quantidade) - (stockList[0].valorAtual * stockList[0].quantidade);

    let bestStockName: string = stockList[0].nome;
    let worstStockName: string = stockList[0].nome;
    let bestStockValue: number = initialValue;
    let worstStockValue: number = initialValue;

    for (var stock of stockList) {
      const value: number = - (stock.valorAtual * stock.quantidade) - (stock.valorCompra * stock.quantidade);
      
      if (value > bestStockValue) {
        bestStockValue = value;
        bestStockName = stock.nome;
      }
      if (value < worstStockValue) {
        worstStockValue = value;
        worstStockName = stock.nome;
      };
      profits += value;
    }

    return profits > 0
      ? `Você está com uma margem de lucro de R$ ${profits}! Sua melhor ação até o momento é a ${bestStockName}`
      : profits == 0
        ? `Você está no meio termo com R$ ${profits} em lucros!`
        : `Você está com um prejuízo de R$ ${profits}! Sua pior ação até o momento é a ${worstStockName}`
  }
}
