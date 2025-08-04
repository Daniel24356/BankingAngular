import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-transaction',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './admin-transaction.component.html',
  styleUrls: ['./admin-transaction.component.scss']
})
export class AdminTransactionComponent {
  transactions = [
    {
      id: 'TXN001',
      name: 'Igwe Daniel',
      type: 'Transfer',
      amount: 2450,
      status: 'Complete'
    },
    {
      id: 'TXN002',
      name: 'Jane Smith',
      type: 'Withdrawal',
      amount: 1200,
      status: 'Complete'
    },
  ];
}
