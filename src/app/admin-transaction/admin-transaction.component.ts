import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-admin-transaction',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './admin-transaction.component.html',
  styleUrl: './admin-transaction.component.scss'
})
export class AdminTransactionComponent {
  
}
