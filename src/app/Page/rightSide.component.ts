import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-right-side',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterModule],
  templateUrl: './rightSide.component.html',
  styleUrls: ['./rightSide.component.scss'],
})
export class RightSideComponent {
  // Any logic for the right side (e.g., dynamic content) can go here
}
