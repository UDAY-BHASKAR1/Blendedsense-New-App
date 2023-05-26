import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faImage} from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  faHouse = faHouse;
  faBusinessTime=faBriefcase;
  faImage=faImage;
  faCalendar=faCalendar;
  faGear=faGear;
  faArrowUpFromBracket=faArrowUpFromBracket;
  faFileLines=faFileLines;
  faHouseChimneyWindow=faHouseChimneyWindow;
  faBars=faBars;
  faBell=faBell;
  faAngleDown=faAngleDown;
  faEllipsis=faEllipsis;

  overlayVisible: boolean = false;
  userProfileImage: any;
  profilePic: any;

  constructor(private router: Router) { }


  ngOnInit() {
    // console.log(this.userProfileImage);
   this.profilePic= localStorage.getItem('profilePic')
    // const res = localStorage.getItem('res')
    // const objectData = JSON.parse(res);
    // this.profilePic=this.profilePic;
   
  }
 
 
  Logout(): void {
   
    localStorage.clear();
    this.router.navigate(['/login']);
   }
  
   toggle() {
    this.overlayVisible = !this.overlayVisible;
  }

// changeSideBarScreenWidthStatus:boolean=false;
// minimizeSideBarStatus(minimizeSideBar:boolean)
// {
//     //  console.log(minimizeSideBar);
      
//     this.changeSideBarScreenWidthStatus = minimizeSideBar;
    
// } 
}
