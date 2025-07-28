// // src/app/keycloak-init.provider.ts
// import { APP_INITIALIZER, Provider } from '@angular/core';
// import { KeycloakService } from 'keycloak-angular';

// export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
//   return () =>
//     keycloak.init({
//       config: {
//         url: 'http://localhost:8080',
//         realm: 'master',
//         clientId: 'angular-client',
//       },
//       initOptions: {
//         onLoad: 'login-required',
//         checkLoginIframe: false,
//       },
//     });
// }

// export const keycloakInitializer: Provider = {
//   provide: APP_INITIALIZER,
//   useFactory: initializeKeycloak,
//   multi: true,
//   deps: [KeycloakService],
// };
