import { Component, Input } from '@angular/core';
import { STOCK } from '../../mock-acoes';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.html'
})
export class Acao {
  @Input() stock!: STOCK;

  get valorInvestido(): number {
    return this.stock.valorCompra * this.stock.quantidade;
  }

  get valorAtualTotal(): number {
    return this.stock.valorAtual * this.stock.quantidade;
  }

  get resultado(): number {
    return this.valorAtualTotal - this.valorInvestido;
  }

  get resultadoCor(): string {
    return this.resultado >= 0 ? 'green' : 'red';
  }
}
