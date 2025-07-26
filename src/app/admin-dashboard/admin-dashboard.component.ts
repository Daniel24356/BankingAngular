import { Component } from '@angular/core';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { AdminHomeComponent } from "../admin-home/admin-home.component";

@Component({
  selector: 'app-admin-dashboard',
  imports: [AdminSidebarComponent, AdminHomeComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
