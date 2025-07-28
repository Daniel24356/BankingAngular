import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-account-growth',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, MatToolbarModule, MatIconModule],
  templateUrl: './account-growth.component.html',
  styleUrls: ['./account-growth.component.scss']
})
export class AccountGrowthComponent {
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan','Feb','Mar','Apr','May'],
    datasets: [
      {
        label: 'New Users',
        data: [45,60,72,51,89],
        borderColor: '#0a65ff',
        backgroundColor: 'rgba(10,101,255,0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: { legend: { position: 'bottom' } },
    scales: { y: { beginAtZero: true } }
  };
}
