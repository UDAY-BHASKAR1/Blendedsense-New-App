import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  	@Input() type: '';
	@Output() btn = new EventEmitter<any>();
	@Input() isDisabled:boolean = false;
	@Input() label :'';


	constructor() {}
	onkk() {
		this.btn.emit();
	}
}
