import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
   standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    user = {
    firstName: '',
    lastName: '',
    emailId: '',
    contactNumber: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

   onRegister() {
    this.http.post('/api/users/register', this.user).subscribe({
      next: res => console.log('Registration successful', res),
      error: err => console.error('Error registering', err)
    });
  }
}
