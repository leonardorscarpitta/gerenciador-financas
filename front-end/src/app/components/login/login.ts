import { Component } from '@angular/core';
import { Register } from '../../services/register/register';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
})
export class Login {
  userAlreadyHasAccount: boolean = false;

  constructor(private registerService: Register) { }

  changeToRegisterScreen() {
    this.userAlreadyHasAccount = !this.userAlreadyHasAccount;
  }
  
  login() {
    this.registerService.login();
  }

  register() {
    this.registerService.register();
  }

}
