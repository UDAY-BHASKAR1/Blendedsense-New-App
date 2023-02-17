import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSubjectsComponent } from './dashboard-subjects/dashboard-subjects.component';
import { DashboardSweepblocksComponent } from './dashboard-sweepblocks/dashboard-sweepblocks.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[
    {
      path:'subjects',component:DashboardSubjectsComponent,
    },
    {
      path:'sweepblocks',component:DashboardSweepblocksComponent,
    }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
