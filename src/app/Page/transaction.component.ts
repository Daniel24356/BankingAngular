import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactions: any[] = [];
  balance: number = 1000;

  getAbs(value: number): number {
  return Math.abs(value);
}

  ngOnInit(): void {
    // Fake transaction history
    this.transactions = [
      {
        name: 'Withdraw - ATM',
        amount: -500,
        status: 'Success',
        date: 'Mon 10:15am',
        category: 'Withdrawal'
      },
      {
        name: 'Transfer to Igwe Daniel',
        amount: -1200,
        status: 'Success',
        date: 'Tue 1:30pm',
        category: 'Transfer'
      }
    ];
  }
}
