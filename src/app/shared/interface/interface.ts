export interface data {
  id: number,
  name: string,
  date: string,
  endTime: string,
  startTime: string,
  type: string,
}


export interface data1 {
  inviteExpiry:string,
  projectDetails: {id: number, name: string, date:string} [],
  sweepList:{id: number,  businessId: number, createdBy: number }[]
}