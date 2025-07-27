import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card'; 
import { DashboardComponent } from "../app/Page/dashboard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banking-dashboard';
}
