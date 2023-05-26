import { AuthService } from '../api/auth.service';
import { exhaustMap, map } from 'rxjs/operators';
import { loginStart, loginSuccess } from './auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService,private router:Router) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.getUser(action.user).pipe(
          map((data) => {
            const user = this.authService.formatUser(data);
            console.log(user, "user effects");
            
            return loginSuccess({user});
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(()=>{
    return this.actions$.pipe(ofType(loginSuccess),
    map((action:any)=>{
        localStorage.setItem('token',action.user.token)
        localStorage.setItem('profilePic',action.user.profilePic)
           this.router.navigate(['/Dashboard'])
    }))
  },{dispatch:false})
}