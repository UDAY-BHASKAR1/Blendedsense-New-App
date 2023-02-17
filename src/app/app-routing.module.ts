import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './api/auth.guard'; 


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',loadChildren:()=>import('./modules/authenticaton/authenticaton.module').then((m)=>m.AuthenticatonModule)
  },
  {
    path:'Dashboard',loadChildren:()=>import('./modules/dashboard/dashboard.module').then((m)=>m.DashboardModule),canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]

})
export class AppRoutingModule { }
