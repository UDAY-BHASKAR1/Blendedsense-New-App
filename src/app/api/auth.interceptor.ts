import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  
  apiUrl = environment.base_URL;
  static accessToken ='';

  constructor(private http:HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token');
    // console.log(token);
    // upcoming 
    const authrequest = request.clone({
      headers: request.headers.set(
        'Authorization', `Bearer ${token}`)
        .set('client-id', '4CD884F88F476F647CC4446D4593D')
        .set('client-secret', 'A955BEBD27BFC49E8CE12129346A4')
    });
    return next.handle(authrequest)
  //   .pipe(catchError((err:HttpErrorResponse)=>{
  //     if (err.status === 401){
  //  return this.http.post('https://stage.blendedsense.com/api/users/me',{},{withCredentials:true}).pipe(
  //   switchMap((res:any)=>{
  //     AuthInterceptor.accessToken = res.token
  //     return next.handle(request.clone({
  //       setHeaders:{
  //         Authorization :`Bearer ${AuthInterceptor.accessToken}`
          
  //       }
  //     }))
  //   })
  //  )
  //     }
  //     return throwError(()=>{

  //     })
  //   }))
    ;
  }
}
