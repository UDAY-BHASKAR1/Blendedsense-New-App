import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms'; 
// import { ToastrModule} from 'ngx-toastr'

import { AuthenticatonRoutingModule } from './authenticaton-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { PrimeuiModule } from 'src/app/shared/prime ui/primeui/primeui.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from 'src/app/state/auth.selector';
import { AuthReducer } from 'src/app/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/state/auth.effects';
// import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';



@NgModule({
  declarations: [
    LoginformComponent,
    
  ],
  imports: [
    CommonModule,
    AuthenticatonRoutingModule,
    SharedComponentsModule,
    // ReactiveFormsModule,
    // FormsModule,
    // ToastrModule.forRoot(),
    PrimeuiModule,
    DashboardModule,
    StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  
  
  ],

  exports:[
    LoginformComponent
  ]
})
export class AuthenticatonModule { }
