import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { AuthInterceptor } from 'src/app/api/auth.interceptor';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';
import { LocalizedString } from '@angular/compiler';
import { Store } from '@ngrx/store';
import { loginStart } from 'src/app/state/auth.action';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent {
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  visible: boolean = true;
  changetype: boolean = true;
  login: FormGroup;
  errorlist: string = '';
  timer: any;
  userProfileImage: string;
  SlashMeData: any;

  constructor(
    private postData: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<any>
  ) {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // this.getSlashMe()

    if (!!localStorage.getItem('token')) {
      this.router.navigate(['Dashboard']);
      return true;
    } else {
      return false;
    }
  }

  onSubmit(): void {
    const user = this.login.value;
    console.log(user, 'userrrrrr');

    this.store.dispatch(loginStart({ user }));
    // this.postData.getUser(this.login.value).subscribe(
    //   (res:any) => {
    //     AuthInterceptor.accessToken = res.token
    // console.log(AuthInterceptor.accessToken,'AuthInterceptor Accestoken');

    //     localStorage.setItem('res', JSON.stringify(res))
    //     localStorage.setItem('token', res['token']);
    //     this.toastr.success(res['message'], null,{ timeOut: 1000 });
    //     this.timer = setTimeout(() => {
    //       this.router.navigate(['/Dashboard']);
    //     },1000);
    //   },
    //   (err) => {
    //     this.toastr.error('message', null,{ timeOut: 1000 });
    //   }
    // );
  }

  // getSlashMe(){
  //   this.postData.getMe().subscribe((res:any)=>{
  //  this.SlashMeData=res
  //  console.log(this.SlashMeData,'slashmedata');
   
  //   })
  // }

  inputRequiredValidation(login: FormGroup, type: string): boolean {
    return (
      (login.get(type).touched || login.get(type).dirty) &&
      login.get(type)?.errors !== null &&
      login.get(type)?.errors.required
    );
  }

  inputPatternValidation(login: FormGroup, type: string): boolean {
    return (
      (login.get(type).touched || login.get(type).dirty) &&
      login.get(type)?.errors !== null &&
      login.get(type)?.errors.email
    );
  }

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
