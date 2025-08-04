import { CommonModule, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-user-management',
  imports: [MatToolbarModule, MatIconModule, CommonModule, TitleCasePipe, DecimalPipe],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  dropdownOpen: number | null = null;

  users = [
    {
      id: '1',
      name: 'Igwe Daniel',
      email: 'igwedaniel128@email.com',
      status: 'active',
      balance: 0,
      joinedDate: '2025-08-1',
      lastLogin: '2025-08-1',
    }
  ];

  toggleDropdown(index: number): void {
    this.dropdownOpen = this.dropdownOpen === index ? null : index;
  }

  closeDropdown(): void {
    this.dropdownOpen = null;
  }

  getInitials(name: string): string {
    const [first, last] = name.split(' ');
    return (first[0] + (last?.[0] ?? '')).toUpperCase();
  }
}

