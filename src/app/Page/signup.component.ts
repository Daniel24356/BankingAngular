import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
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

  constructor() {}

  onRegister() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const exists = users.find((u: any) => u.emailId === this.user.emailId);

    if (exists) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'User with this email already exists!',
        confirmButtonColor: '#d33'
      });
      return;
    }

    users.push({ ...this.user, createdAt: new Date() });
    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Registration completed successfully.',
      confirmButtonColor: '#3085d6'
    });

    // Optionally reset form
    this.user = {
      firstName: '',
      lastName: '',
      emailId: '',
      contactNumber: '',
      password: ''
    };
  }
}
