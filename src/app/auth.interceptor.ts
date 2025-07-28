// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
// import { KeycloakService } from './keycloak.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private keycloakService: KeycloakService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const token = this.keycloakService.getToken();

//     if (token) {
//       const authReq = req.clone({
//         setHeaders: { Authorization: `Bearer ${token}` }
//       });
//       return next.handle(authReq);
//     }

//     return next.handle(req);
//   }
// }
