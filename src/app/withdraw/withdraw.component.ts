import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  imports: [CommonModule, FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {
  formData = {
    accountId: '',
    transactionType: 'WITHDRAWAL',
    amount: '',
    description: '',
  };

   message = '';

  constructor(private http: HttpClient) {}

   withdrawFunds() {
    if (!this.formData.accountId || !this.formData.amount) {
      this.message = 'Please provide account ID and amount.';
      return;
    }

    this.http.post('/api/transactions', this.formData).subscribe({
      next: (res) => {
        this.message = 'Withdrawal successful.';
        this.formData.amount = '';
        this.formData.description = '';
      },
      error: (err) => {
        this.message = 'Withdrawal failed.';
        console.error(err);
      },
    });
  }
}
