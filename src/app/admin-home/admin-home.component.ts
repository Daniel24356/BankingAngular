import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-admin-home',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {
   chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'New Users',
      data: [45, 60, 72, 51, 89],
      borderColor: '#0a65ff',
      backgroundColor: 'rgba(10,101,255,0.1)',
      fill: true,
    },
  ],
};

chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
  },
};

}
