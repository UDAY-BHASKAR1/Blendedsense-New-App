import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PrimeuiModule } from '../prime ui/primeui/primeui.module';





@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    DropdownComponent
  ],
  exports:[
    InputComponent,
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeuiModule
  ]
})
export class SharedComponentsModule { }
