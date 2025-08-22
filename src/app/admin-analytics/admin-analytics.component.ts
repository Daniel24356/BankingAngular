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

 successFailureData = [
    { name: 'Success', value: 1932 },
    { name: 'Failure', value: 68 }
  ];

  total = this.successFailureData.reduce((sum, item) => sum + item.value, 0);

getPercentage(value: number): string {
  return ((value / this.total) * 100).toFixed(1);
}

latencyData = [
  { name: '0–100 ms', value: 5 },
  { name: '101–200 ms', value: 1270 },
  { name: '201–300 ms', value: 682 },
  { name: '301–400 ms', value: 38 },
  { name: '401+ ms', value: 5 }
];

concurrentLatencyData = [
  {
    name: 'Avg Latency',
    series: [
      { name: '10', value: 160 },
      { name: '50', value: 210 },
      { name: '100', value: 275 },
      { name: '200', value: 470 },
      { name: '500', value: 1100 }
    ]
  }
];

retryFrequencyData = [
  {
    name: 'Retries',
    series: [
      { name: '0 Retries', value: 1950 },
      { name: '1 Retry', value: 45 },
      { name: '2 Retries', value: 3 },
      { name: '3+ (Failed)', value: 2 }
    ]
  }
];





  //   colorScheme = {
  //   domain: ['#4CAF50', '#F44336']
  // };

    // Formatter for labels (lookup value by name)
  labelFormatting = (label: string): string => {
    const item = this.successFailureData.find(d => d.name === label);
    if (!item) return label;

    const total = this.successFailureData.reduce((sum, d) => sum + d.value, 0);
    const percent = ((item.value / total) * 100).toFixed(1);

    return `${label}: ${item.value} (${percent}%)`;
  };

  // Formatter for tooltip (hover info)
  tooltipFormatting = (item: any): string => {
    const total = this.successFailureData.reduce((sum, d) => sum + d.value, 0);
    const percent = ((item.value / total) * 100).toFixed(1);
    return `${item.name}: ${item.value} (${percent}%)`;
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
