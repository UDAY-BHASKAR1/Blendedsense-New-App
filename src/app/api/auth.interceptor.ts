import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    // console.log(token);
    // upcoming 
    const authrequest = request.clone({
      headers: request.headers.set(
        'Authorization', 'Bearer ' + token)
        .set('client-id', '4CD884F88F476F647CC4446D4593D')
        .set('client-secret', 'A955BEBD27BFC49E8CE12129346A4')
    });
    return next.handle(authrequest);
  }
}
