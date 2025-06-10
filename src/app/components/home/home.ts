import { Component } from '@angular/core';
import { TableStock } from "../table-stock/table-stock";
import { AddStock } from "../add-stock/add-stock";
import { AddCsv } from "../add-csv/add-csv";

@Component({
  selector: 'app-home',
  imports: [TableStock, AddStock, AddCsv],
  templateUrl: './home.html'
})
export class Home {
  showOnlyTable = false;

  changeShowOnlyTableStatus(): void {
    this.showOnlyTable = !this.showOnlyTable;
  }
}
