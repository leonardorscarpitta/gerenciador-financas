import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { ModalWarning } from "./components/modal-warning/modal-warning";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, ModalWarning],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerenciador-financas';
}
