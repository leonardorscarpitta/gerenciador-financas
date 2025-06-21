import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockApi {
  private lastRequestTime = 0;
  private readonly MIN_REQUEST_INTERVAL = 2000;

  constructor() { }

  async getStockQuote(stockName: string): Promise<number> {
    const cleanStockName: string = stockName.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');

    if (!cleanStockName) throw new Error("Nome de ação inválida!");

    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;

    if (timeSinceLastRequest < this.MIN_REQUEST_INTERVAL) {
      await new Promise(resolve => setTimeout(resolve, this.MIN_REQUEST_INTERVAL - timeSinceLastRequest))
    }

    try {
      // URL simplificada para apenas um "símbolo"
      const url = `https://brapi.dev/api/quote/${cleanStockName}`;
      
      const response = await fetch(url, {
        headers: {
          "Authorization": "Bearer key"
        }
      });

      this.lastRequestTime = Date.now();

      if (response.status === 429) {
        throw new Error('Muitas requisições. Aguarde alguns segundos e tente novamente.');
      }

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        throw new Error(`Ação ${cleanStockName} não encontrada.`);
      }

      const result = data.results[0];
      return result.regularMarketPrice || 0;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
