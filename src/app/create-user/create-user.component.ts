import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-create-user',
  imports: [MatToolbarModule, MatIconModule, CommonModule, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
   formData = {
    accountType: '',
    userId: ''
  };

   message = '';
  loading = false;

   constructor(private http: HttpClient) {}

    createAccount() {
    if (!this.formData.accountType || !this.formData.userId) {
      this.message = 'All fields are required.';
      return;
    }

    this.loading = true;
    this.http.post('/accounts', this.formData).subscribe({
      next: (res: any) => {
        this.message = 'Account successfully created!';
        this.loading = false;
      },
      error: (err) => {
        this.message = 'Failed to create account.';
        console.error(err);
        this.loading = false;
      }
    });
  }

}
