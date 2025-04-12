import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { RightSideComponent } from './rightSide.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],  // Import both components
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // Any logic for the dashboard can go here
}
