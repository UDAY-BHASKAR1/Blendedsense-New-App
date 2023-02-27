import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from 'src/app/api/auth.service';
import { data } from 'src/app/shared/interface/interface';
import { data1 } from 'src/app/shared/interface/interface';

@Component({
  selector: 'app-dashboard-subjects',
  templateUrl: './dashboard-subjects.component.html',
  styleUrls: ['./dashboard-subjects.component.scss']
})
export class DashboardSubjectsComponent {
  items:any;
  data1:any;
  data:data[];
  Loader:boolean=false;
  constructor(private userData: AuthService, private router: Router,) { }
ngOnInit(){
   this.get()
}

get(){
  this.Loader = true;
  this.userData.getData().subscribe((result) => {
    // this.items = result;
    this.data = result['events'];
    this.Loader = false;
    // console.log(this.data,'uhuhuhuhhjuhuhu')
  })

  this.userData.getTeamData().subscribe((res) => {
    // this.items = res;
    this.data1 = res;
    console.log(this.data1,"uhuhuhuhhjuhuhu")
  })
  
}
}
