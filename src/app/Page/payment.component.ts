import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  transferData = {
    fromAccount: '',
    toAccount: '',
    amount: ''
  };
   
   constructor(private http: HttpClient) {}

     onTransfer() {
    this.http.post('/fund-transfers', this.transferData).subscribe({
      next: (res) => console.log('Transfer successful', res),
      error: (err) => console.error('Transfer failed', err)
    });
  }

}
