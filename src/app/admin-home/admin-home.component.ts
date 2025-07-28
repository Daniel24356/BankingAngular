import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AccountGrowthComponent } from '../account-growth/account-growth.component';
// import { AccountGrowthComponent } from "../account-growth/account-growth.component";

@Component({
  selector: 'app-admin-home',
  imports: [MatToolbarModule, MatIconModule,AccountGrowthComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {

}
