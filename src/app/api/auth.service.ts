import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
 
  

  
  

  constructor(private http: HttpClient) { }

  getUser(user: any) {
    let url = 'https://stage.blendedsense.com/api/login';
      return this.http.post(url, user);
  }


  getData() {
    let url1 = 'https://stage.blendedsense.com/api/users/events';
    let params = new HttpParams();
    params = params.set('businessId', '722');
    return this.http.get(url1, { params: params });
  }

  deleteSweep(id:Number):Observable<any>{
    let deleteapi = 'https://stage.blendedsense.com/api/sweepblocks/delete';
    const token=localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    const headers ={headers :header}
    return this.http.delete(deleteapi+"/"+id,headers)
  }

  Addsweep(body){
    let url= 'https://stage.blendedsense.com/api/sweepblocks/create';
    const token=localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    const headers ={headers :header}
    return this.http.post(url,body,headers)
  }
 
  Editsweep(body,id){
  let url='https://stage.blendedsense.com/api/sweepblocks/update';
  const token=localStorage.getItem('token')
  const header = new HttpHeaders().set('Authorization','Bearer '+ token)
  const headers ={headers :header}
  return this.http.post(url="/"+id,body,headers)
}

  getTeamData() {
    let url2 = 'https://stage.blendedsense.com/api/users/dashboard'
    return this.http.get(url2)
  }
  
  getlistData() {
    let list = 'https://stage.blendedsense.com/api/sweepblocks/list';
    return this.http.get(list)
  }

  getquickShot(){
    let shot ='https://stage.blendedsense.com/api/sweepblocks/shot-settings';
    return this.http.get(shot)
  }

  getequipment(){
    let Equip ='https://stage.blendedsense.com/api/sweepblocks/equipment';
    return this.http.get(Equip)
  }
}
