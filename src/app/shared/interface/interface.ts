export interface data {
  id: number;
  name: string;
  date: string;
  endTime: string;
  startTime: string;
  type: string;
}

export interface data1 {
  inviteExpiry: string;
  projectDetails: { id: number; name: string; date: string }[];
  sweepList: { id: number; businessId: number; createdBy: number }[];
}

export interface getequipmentData {
 Array: {id: number;
  name: string;
  // deletedAt: null;
  createdAt: string;
  updatedAt: string;}
}
export interface getshotSettingsData{
  id: number;
  name: string;
  // deletedAt: null;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponseData{
  lastName: any;
  firstName: any;
  token:string;
  user:{id:number,
  email:string,
  firstName:string,
  lastName:string,
  profilePic:string,
};
}


export class User{
  constructor(private token :string,private email : string,private firstName,private profilePic :string){
    
  }
}