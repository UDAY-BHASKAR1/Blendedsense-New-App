import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl = environment.base_URL;
  constructor(private http: HttpClient) { }

  getUser(user: any) {
    let url = `${this.apiUrl}/login`;
      return this.http.post(url, user);
  }


  getData() {
    let url1 = `${this.apiUrl}/users/events`;
    let params = new HttpParams();
    params = params.set('businessId', '722');
    return this.http.get(url1, { params: params });
  }

  deleteSweep(id:Number):Observable<any>{
    let deleteapi = `${this.apiUrl}/sweepblocks/delete`;
    const token=localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    const headers ={headers :header}
    return this.http.delete(deleteapi+"/"+id,headers)
  }

  Addsweep(body){
    let url= `${this.apiUrl}/sweepblocks/create`;
    const token=localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    const headers ={headers :header}
    return this.http.post(url,body,headers)
  }
 
  Editsweep(body,id){
  let url=`${this.apiUrl}/sweepblocks/update`;
  const token=localStorage.getItem('token')
  const header = new HttpHeaders().set('Authorization','Bearer '+ token)
  const headers ={headers :header}
  return this.http.put(url="/"+id,body,headers)
}

  getTeamData() {
    let url2 = `${this.apiUrl}/users/dashboard`;
    return this.http.get(url2)
  }
  
  getlistData() {
    let list = `${this.apiUrl}/sweepblocks/list`;
    return this.http.get(list)
  }

  getquickShot(){
    let shot =`${this.apiUrl}/sweepblocks/shot-settings`;
    return this.http.get(shot)
  }

  getequipment(){
    let Equip =`${this.apiUrl}/sweepblocks/equipment`;
    return this.http.get(Equip)
  }
}
