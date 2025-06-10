import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-warning',
  imports: [],
  templateUrl: './modal-warning.html'
})
export class ModalWarning {
  showAlert = true;

  closeModal() {
    this.showAlert = false;
  }
}
