import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentData = {
    fromAccount: '',
    toAccount: '',
    amount: ''
  };

  onTransfer() {
    const { toAccount, amount } = this.paymentData;
    const formattedAmount = parseFloat(amount).toLocaleString();

    Swal.fire({
      icon: 'success',
      title: 'Transfer Successful',
      text: `₦${formattedAmount} sent to ${toAccount}`
    });

    // Reset the form (optional)
    this.paymentData = { fromAccount: '', toAccount: '', amount: '' };
  }
}
