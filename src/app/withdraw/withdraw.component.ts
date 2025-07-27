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

  
}
