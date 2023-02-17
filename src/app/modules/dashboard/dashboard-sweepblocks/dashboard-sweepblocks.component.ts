import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/api/auth.service';
import { ToastrService } from 'ngx-toastr';
import { faDownLeftAndUpRightToCenter, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';


@Component({
  selector: 'app-dashboard-sweepblocks',
  templateUrl: './dashboard-sweepblocks.component.html',
  styleUrls: ['./dashboard-sweepblocks.component.scss']
})
export class DashboardSweepblocksComponent {
  selectedSweep:any;
  faSearch=faSearch;
  overlayVisible: boolean = false;
  customers: any;
  data: Array<any>;
  items: MenuItem[];
  first = 0;
  cols: any[] = [];
  rows = 10;
  value3: any;
  deleteid:Number;
  displayBasic: boolean;
  displayBasic2: boolean=false;
  displayModal: boolean;
  visible:boolean;
  id = null;
  globalId:Number;
  Loader:boolean=false;
  sweepType="";
  sweepName = "";
  DurationInMinutes:Number;
  sweepTypeoptions:any[]=[];
  login:FormGroup;
  displayForm:boolean=false;
  sweepTypename:any;
  uniqueIds:Array<any> = [];
  Shot:any;
  Equip:any;
  getequipmentData:Array<any>=[]
  getshotSettingsData:Array<any>=[]
  quantity:any
  globalSweepTypeid:number;

 
  testForm= new FormGroup({
    EquippmentQuantity:new FormArray(
      [
          new FormControl(null,Validators.required),
         
      ]
    )
  })

  Add(){
    let EquippmentQuantity=this.testForm.get('EquippmentQuantity') as FormArray
    console.log(EquippmentQuantity);
    EquippmentQuantity.push(new FormControl(null,Validators.required))
  }

  remove(i:number){
     let EquippmentQuantity=this.testForm.get('EquippmentQuantity') as FormArray;
     EquippmentQuantity.removeAt(i)
     console.log(EquippmentQuantity,i)
  }
  
 

  
  constructor(
    private http: AuthService,
   
    private toastr:ToastrService,
    private fb: FormBuilder
  ) {
   
    const login = this.fb.group({
      title: [''],
      duration: [''],
      typeName:[''],
      equipment:[''],
      shotsettings:[''],
      quantity:['']
    });

    this.quantity = [
      {quantity: 1},
      {quantity: 2},
      {quantity: 3},
      {quantity: 4},
      {quantity: 5},
      {quantity: 6},
      {quantity: 7},
      {quantity: 8},
      {quantity: 9},
      
  ];
       this.login=login;
  }
  
  

  ngOnInit() {
    
    this.getSweeps();
    
  }

  

  
deleteSweep(){
  this.http.deleteSweep(this.globalId).subscribe((res) => {
    console.log(res, 'uday');
   this.toastr.success('Sweepblock deleted successfull', null, { timeOut: 1000 });
   this.getSweeps();
  });
}

 
EditData(data) {
    this.displayBasic2=true;
    console.log(data, "uuuuuuuuuuuuuuuu");
    let sweepObject = this.sweepTypeoptions.filter(sweep => sweep.id === data.sweepBlockTypeId)
    this.displayBasic2 = true;
    this.globalSweepTypeid=data.sweepBlockType.id
    this.login.patchValue({
      title: data.name,
      duration: data.durationInMinutes,
      typeName: sweepObject[0]
   })
  }

 
  addData(){
    this.login.reset()
    this.displayBasic2=true;
  //  console.log(this.login.value,"zzzzzzzz");
   this.globalSweepTypeid=this.login.get("typeName").value.id
   console.log(this.globalSweepTypeid,"zzzzzzzzzzz");
   
  }

 
  

  saveSweep(id){
  // console.log(this.login.value,"ijnuinhjm");
  console.log();
  
  this.displayBasic2=false;

  let a:Array<any>=[]

  let equipmentObject={
    quantity:this.login.value.quantity['quantity'],
    id:this.login.value.equipment.id
  }

  a.push(equipmentObject)

  let settingsData:Array<number>=[]
  // let QuickShotId=16
  let QuickShotId =this.getequipmentData[0].id
  console.log(QuickShotId,"QuickShotId");
  
  settingsData.push(QuickShotId)

  let body={
    duration:this.login.value.duration,
    equipments:a,
    settings :settingsData,
    title :this.login.value.title,
    type : this.login.value.typeName.name
  }
  console.log(body);
  
  
  
  if(this.id){
    body['id']=this.id;
    this.http.Editsweep(body,id).subscribe(
      (res)=>{
        this.getSweeps();
      }
    )
  }
  else{
    this.http.Addsweep(body).subscribe(
      (res)=>{
        this.getSweeps();
      }
    )
  }
}

//  Get Sweep data list
getSweeps() {
  this.Loader = true;
    this.http.getlistData().subscribe((result) => {
      this.data = result['data'];
      this.Loader = false;
      console.log(this.data);
      this.data.forEach(item=>{
      this.sweepTypeoptions.push(item.sweepBlockType)
       })
      console.log(this.sweepTypeoptions,"mmmmmm");
      
      this.uniqueIds=this.sweepTypeoptions.filter(ele=>{
        const isDuplicate=this.uniqueIds.includes(ele.id);
        if (!isDuplicate){
          this.uniqueIds.push(ele.id)
          return true;  
        }
        return false
      });
      this.globalSweepTypeid=this.uniqueIds[0].id
      console.log(this.globalSweepTypeid,"yyyyyyyyyyyyyyyyyyyyyyyy");
     });
    
      //  getQuickShotsettings
      this.http.getquickShot().subscribe((res)=>{
      this.Shot=res;
      //  console.log(this.Shot,'shotsssss');
      this.Shot?.data.forEach(ele =>{
        this.getequipmentData.push(ele)
      });
      console.log(this.getequipmentData,"shotsettingsData");
      
       })
   
       // getEquipmentdata
      this.http.getequipment().subscribe((res)=>{
        this.Equip=res;
        // console.log(this.Equip.data[1].name,'Equip');
        this.Equip?.data.forEach(element => {
          this.getshotSettingsData.push(element)
          
        });
        console.log(this.getshotSettingsData,"equipmentData");
      })

      

      
      
  }

  
  
 dropdown1(selectedSweepType){
  console.log(selectedSweepType,"12345");
  
     this.globalSweepTypeid = selectedSweepType.id
 }
  
// delete Dialouge
  showModalDialog() {
    this.displayModal = true;
  }
  
  
  deleteId(id){
    console.log(id);
    this.globalId=id
    
  }

  toggle() {
    this.overlayVisible = !this.overlayVisible;
  }

  
  showBasicDialog() {
    this.displayBasic = true;
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }

}
