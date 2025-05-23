import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onSignup() {
    // Implement your signup logic here
    console.log('Signing up with:', this.name, this.email, this.password);
  }
}
