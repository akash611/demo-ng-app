import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from "../user-details/user-details.component";
import { User } from '../../../models/user';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, UserDetailsComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {


  name="Akash"
  status="single";
  salary=40000
  isBtnDisabled= true
  inputval= "demo";
  users: User[] =[
    {name: "Sujay", isSingle:true,salary:10000},
    {name: "Rubi", isSingle:false,salary:60000},
    {name: "Subir", isSingle:true,salary:90000}
  ]
  //function to listen to input event
  // onChange(e: Event){
  //   const value= (e.target as HTMLInputElement).value
  //   console.log("Called ")
  //   this.inputval= value;
  // }
  recievedData(e: User) {
    const index= this.users.findIndex(user=>user.name===e.name)
    console.log(e)
    if(index>=0){
      this.users[index].salary=e.salary
    }
    }
}
