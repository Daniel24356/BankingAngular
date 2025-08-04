import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, MatToolbarModule, MatIconModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  formData = {
    accountType: '',
    userId: ''
  };

  loading = false;

  createAccount() {
    if (!this.formData.accountType || !this.formData.userId) {
      Swal.fire('Error', 'All fields are required.', 'error');
      return;
    }

    this.loading = true;

    // Simulate account storage in localStorage
    const existingAccounts = JSON.parse(localStorage.getItem('accounts') || '[]');

    const newAccount = {
      accountType: this.formData.accountType,
      userId: this.formData.userId,
      accountNumber: 'ACCT' + Math.floor(100000 + Math.random() * 900000), // Random 6-digit
      balance: 0
    };

    existingAccounts.push(newAccount);
    localStorage.setItem('accounts', JSON.stringify(existingAccounts));

    setTimeout(() => {
      this.loading = false;
      Swal.fire('Success', 'Account created successfully!', 'success');
      this.formData = { accountType: '', userId: '' };
    }, 1000);
  }
}
