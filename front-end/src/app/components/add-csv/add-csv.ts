import { Component } from '@angular/core';

@Component({
  selector: 'app-add-csv',
  imports: [],
  templateUrl: './add-csv.html'
})
export class AddCsv {
  fileName: string = '';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = '';
    }
  }
}
