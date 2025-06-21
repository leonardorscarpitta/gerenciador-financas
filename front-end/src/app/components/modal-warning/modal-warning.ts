import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-warning',
  imports: [],
  templateUrl: './modal-warning.html'
})
export class ModalWarning {
  private readonly MODAL_KEY = "modalAppeared";
  showModal: boolean = true;

  checkToShowAlert() {
    if (!(localStorage.getItem("modalAppeared") == "true")) {
      return true;
    } else {
      return false;
    }
  }
  
  closeModal() {
    localStorage.setItem(this.MODAL_KEY, "true");
    this.showModal = !this.showModal;  
  }
}
