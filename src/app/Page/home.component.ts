import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {  HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //  private keycloakService = injectKeycloak();

  // ngOnInit() {
  //   const token = this.keycloakService.getKeycloakInstance().token;
  //   console.log('Access Token:', token);
  // }

}
