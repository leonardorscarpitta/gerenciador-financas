import { Injectable } from '@angular/core';
import { STOCK } from '../../mock-acoes';
import { StockApi } from '../stock-api/stock-api';

@Injectable({
  providedIn: 'root'
})
export class Stock {
  private readonly STORAGE_KEY = "stocks_data";
  private stocks: STOCK[] = [];

  constructor(private stockApiService: StockApi) {
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

  async getStockPrice(stockName: string): Promise<number> {
    try {
      return await this.stockApiService.getStockQuote(stockName);
    } catch (error) {
      throw error;
    }
  }

  async addStock(stock: STOCK): Promise<void> {
    if (!stock.nome || stock.nome.trim().length == 0) {
      alert("O nome não pode estar vazio!")
      return;
    }

    if (stock.valorCompra <= 0 || stock.quantidade <= 0) {
      alert("Preenhcha os dados corretamente!")
      return;
    }

    const newQuantidade = Number(stock.quantidade);
    const newValorCompra = Number(stock.valorCompra);

    try {
      stock.valorAtual = await this.stockApiService.getStockQuote(stock.nome);
  
      const alreadyExists = this.findStockByName(stock.nome);
  
      if (alreadyExists) {
        const stockId = this.stocks.findIndex(s => s.nome == alreadyExists.nome);
        
        const existingQuantidade = Number(this.stocks[stockId].quantidade);
        const existingValorCompra = Number(this.stocks[stockId].valorCompra);
        
        // SOMAR os valores ao invés de calcular média
        this.stocks[stockId].quantidade = existingQuantidade + newQuantidade;
        this.stocks[stockId].valorCompra = existingValorCompra + newValorCompra; // SOMA
        this.stocks[stockId].valorAtual = Number(stock.valorAtual);
        this.stocks[stockId].timestamp = stock.timestamp;
        
        this.saveToStorage();        
        return;
      }
  
      this.stocks.push(stock);
      this.saveToStorage();
    } catch (error) {
      console.log(error);
    }
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

  report(): number {
    let countValue: number = 0;

    for (var stock of this.stocks) {
      const gains: number = (stock.valorAtual - stock.valorCompra / stock.quantidade) * stock.quantidade;
      countValue += gains;
    }

    return countValue;
  }
}
