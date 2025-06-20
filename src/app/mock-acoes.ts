export interface STOCK {
  nome: string;
  valorAtual: number;
  valorCompra: number;
  quantidade: number;
  timestamp: string,
  tipoAcao: string
}

export const MOCK_STOCKS: STOCK[] = [
  {
    nome: "PETR4",
    valorAtual: 0,
    valorCompra: 30.0,
    quantidade: 100,
    timestamp: "25/07/2005 - 20:59",
    tipoAcao: "",
  }
];
