import { Component, Input } from '@angular/core';
import { STOCK } from '../../mock-acoes';

@Component({
  selector: 'app-acao',
  imports: [],
  templateUrl: './acao.html'
})
export class Acao {
  @Input() acao!: STOCK;

  get valorInvestido(): number {
    return this.acao.valorCompra * this.acao.quantidade;
  }

  get valorAtualTotal(): number {
    return this.acao.valorAtual * this.acao.quantidade;
  }

  get resultado(): number {
    return this.valorAtualTotal - this.valorInvestido;
  }

  get resultadoCor(): string {
    return this.resultado >= 0 ? 'green' : 'red';
  }
}
