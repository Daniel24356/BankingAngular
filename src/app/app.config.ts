import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptor/base-url.interceptor';
import { provideKeycloak } from 'keycloak-angular';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
// import { keycloakInitializer } from './keycloak.service';

export const appConfig: ApplicationConfig = {
  providers:
    [provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
//     provideKeycloak({
//   config: {
//     url: 'http://localhost:8080',  // 🔁 replace this
//     realm: 'master',                        // 🔁 replace this
//     clientId: 'angular-client'                  // 🔁 replace this
//   },
//   initOptions: {
//     onLoad: 'login-required',
//     checkLoginIframe: false
//   }
// }),
provideCharts(withDefaultRegisterables()),
    // keycloakInitializer,
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }
  ]
};
