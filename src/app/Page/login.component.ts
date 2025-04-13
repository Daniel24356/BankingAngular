import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    // Implement your login logic here
    console.log('Logging in with:', this.email, this.password);
  }
}
