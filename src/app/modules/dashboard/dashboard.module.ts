import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';



import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSubjectsComponent } from './dashboard-subjects/dashboard-subjects.component';
import { DashboardSweepblocksComponent } from './dashboard-sweepblocks/dashboard-sweepblocks.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { PrimeuiModule } from 'src/app/shared/prime ui/primeui/primeui.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
// import { AuthenticatonModule } from '../authenticaton/authenticaton.module';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSubjectsComponent,
    DashboardSweepblocksComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimeuiModule,
    FontAwesomeModule,
    SharedComponentsModule,
    // AuthenticatonModule

   ],
   exports:[
    DashboardComponent
   ]
})
export class DashboardModule { }
