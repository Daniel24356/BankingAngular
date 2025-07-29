import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BaseChartDirective } from 'ng2-charts';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-admin-analytics',
  imports: [MatToolbarModule, MatIconModule,CommonModule,NgxChartsModule],
  templateUrl: './admin-analytics.component.html',
  styleUrl: './admin-analytics.component.scss'
})
export class AdminAnalyticsComponent {
  colorScheme: Color = {
  name: 'cool',
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ['#3b82f6', '#6366f1', '#06b6d4'],
};

  revenueData = [
    { name: 'Jan', value: 32000 },
    { name: 'Feb', value: 45000 },
    { name: 'Mar', value: 38000 },
    { name: 'Apr', value: 61000 },
    { name: 'May', value: 52000 },
    { name: 'Jun', value: 70000 }
  ];

  userGrowthData = [
    {
      name: 'Users',
      series: [
        { name: 'Jan', value: 1200 },
        { name: 'Feb', value: 1800 },
        { name: 'Mar', value: 2500 },
        { name: 'Apr', value: 3100 },
        { name: 'May', value: 4000 },
        { name: 'Jun', value: 5000 }
      ]
    }
  ];
}
