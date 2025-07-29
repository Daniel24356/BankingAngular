import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-user-management',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
   dropdownOpen: number | null = null;

  toggleDropdown(index: number): void {
    if (this.dropdownOpen === index) {
      this.dropdownOpen = null;
    } else {
      this.dropdownOpen = index;
    }
  }

  // Optional: Close dropdown if clicked outside
  closeDropdown(): void {
    this.dropdownOpen = null;
  }
}
