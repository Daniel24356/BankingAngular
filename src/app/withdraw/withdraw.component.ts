import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule, FormsModule, MatToolbarModule, MatIconModule],
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


withdrawFunds() {
  if (!this.formData.accountId || !this.formData.amount) {
    Swal.fire({
      icon: 'error',
      title: 'Missing Details',
      text: 'Please provide account ID and amount.',
    });
    return;
  }

  // Simulate success (remove this part if connecting to backend)
  Swal.fire({
    icon: 'success',
    title: 'Withdrawal Successful',
    text: `₦${parseFloat(this.formData.amount).toLocaleString()} has been withdrawn from account ${this.formData.accountId}.`
  });

  // Clear form (optional)
  this.formData.amount = '';
  this.formData.description = '';
}

}
