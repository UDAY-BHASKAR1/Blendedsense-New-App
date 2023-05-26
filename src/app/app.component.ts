import { Component } from '@angular/core';
import { AuthService } from './api/auth.service';
import { loginSuccess } from './state/auth.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blendedSense-new';
  constructor(    private postData: AuthService,
    private store: Store<any>

    ){
  }
  ngOnInit(){
      this.postData.getMe().subscribe((res:any)=>{
        console.log(res.user,"me");
        res.token = localStorage.getItem('token')
        const user = this.postData.formatUser(res);
        console.log(user,"user app");
        this.store.dispatch(loginSuccess({ user }));
      })
  }
}
