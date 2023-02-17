import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms'; 
// import { ToastrModule} from 'ngx-toastr'

import { AuthenticatonRoutingModule } from './authenticaton-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { PrimeuiModule } from 'src/app/shared/prime ui/primeui/primeui.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';



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
    PrimeuiModule
  
  ],
  
})
export class AuthenticatonModule { }
