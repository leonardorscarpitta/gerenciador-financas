export interface STOCK {
  nome: string;
  valorAtual: number;
  valorCompra: number;
  quantidade: number;
}

export const MOCK_STOCKS: STOCK[] = [
  {
    nome: "PETR4",
    valorAtual: 0,
    valorCompra: 30.0,
    quantidade: 100,
  },
  {
    nome: "VALE3",
    valorAtual: 0,
    valorCompra: 55.0,
    quantidade: 50,
  },
  {
    nome: "AAPL",
    valorAtual: 0,
    valorCompra: 180.0,
    quantidade: 20,
  },
  {
    nome: "ITUB4",
    valorAtual: 0,
    valorCompra: 25.0,
    quantidade: 80,
  },
  {
    nome: "AMZN",
    valorAtual: 0,
    valorCompra: 3100.0,
    quantidade: 5,
  },
];
