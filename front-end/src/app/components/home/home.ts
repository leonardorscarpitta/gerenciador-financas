import { Component } from '@angular/core';
import { TableStock } from "../acao/table-stock/table-stock";
import { AddStock } from "../acao/add-stock/add-stock";

@Component({
  selector: 'app-home',
  imports: [TableStock, AddStock],
  templateUrl: './home.html'
})
export class Home {
  showOnlyTable = false;

  changeShowOnlyTableStatus(): void {
    this.showOnlyTable = !this.showOnlyTable;
  }
}
