import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const matchedUser = users.find(
      (user: any) => user.emailId === this.email && user.password === this.password
    );

    if (matchedUser) {
      Swal.fire({
        icon: 'success',
        title: 'Login successful!',
        text: `Welcome back, ${matchedUser.firstName}!`,
        showConfirmButton: false
      });

      // Store current user session (fake)
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));

      // Navigate after login
      setTimeout(() => this.router.navigate(['/dashboard']), 2000);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login failed!',
        text: 'Incorrect email or password.'
      });
    }
  }
}
