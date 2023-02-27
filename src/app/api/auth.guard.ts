import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  dataItem:any={}
  
  constructor(private rtr:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      {
      //   if(!!localStorage.getItem('token')){
      

        return true;
      // }
      // else{
      //   this.rtr.navigate(['/login']);
      //   return false;
        

      // }
    }
    
  }
  
}
