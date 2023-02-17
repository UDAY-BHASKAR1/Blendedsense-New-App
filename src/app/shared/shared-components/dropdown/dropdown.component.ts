import { Component,EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() selectedType: string;
  @Input() TypeList: Array<any>;
 
  @Input() editable;
  @Input() optionsType:any;
  @Input() formGroup:FormGroup;
  @Input() formControlName='';
  @Input() optionallabelType;
  @Output() selectedTypeInfo = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  selectedSweepType(TypeSelected) {
    console.log(TypeSelected,"TypeSelected");
    
    this.selectedTypeInfo.emit(TypeSelected);
  }
}
