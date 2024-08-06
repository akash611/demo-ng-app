import { Component, Input, Output, booleanAttribute, numberAttribute,EventEmitter } from '@angular/core';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

function formatName(value: string){
  return "Hi, "+value;

}
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  // Recieving data from parent
  @Input({alias:"userName"}) name= ""; 
  @Input({ transform: booleanAttribute })isSingle!: boolean;
  @Input({ transform: numberAttribute })salary!: number;
  @Output() myEvent = new EventEmitter<User>()
  newSalary!: number;
  //Editing Salary
  sendData() {
    this.myEvent.emit({
      name: this.name, 
      isSingle: this.isSingle, 
      salary: this.newSalary 
    });
  }


  
}
