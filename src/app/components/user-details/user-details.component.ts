import { Component, Input, Output, booleanAttribute, numberAttribute,EventEmitter, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';

function formatName(value: string){
  return "Hi, "+value;

}
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  // Recieving data from parent
  @Input({alias:"userName"}) name= ""; 
  @Input({ transform: booleanAttribute })isSingle!: boolean;
  @Input({ transform: numberAttribute })salary!: number;
  @Output() myEvent = new EventEmitter<User>()
  @ViewChild('salaryInput') salaryInput!: ElementRef; // Reference to the input element
  // newSalary:any;
  //Editing Salary
  sendData() {
    const newSalary= +this.salaryInput.nativeElement.value; // Get value from input
    console.log(newSalary)
    // console.log(this.newSalary)
    console.log(this.salary)
    this.myEvent.emit({
      name: this.name, 
      isSingle: this.isSingle, 
      salary: newSalary 
      // salary:this.newSalary
    });
  }
  @ViewChild("myheading")
  heading!: ElementRef;

  constructor(){
    //init properties
    //dependency injection
    //event register
    console.log(formatName("Akash")+" Constructor is called for "+this.name)
  }
  ngOnInit(){
    //init properties
    //event register
    //initial API calling
    console.log(formatName("Akash")+" ngOnInit is called for "+this.name)
    console.log("Checking the view for ngOnInit for "+this.name,this.heading?.nativeElement.textContent);

  }

  ngOnDestroy(){
    //event unregister
    console.log(formatName("Akash")+" ngOnDestroy is called for "+this.name)
  }
    
  ngOnChanges(changes:SimpleChanges){
    //
    console.log(formatName("Akash")+" ngOnChanges is called for "+this.name)
    console.log("changes",changes)
    console.log("Checking the view for onChanges for "+this.name, this.heading?.nativeElement.textContent);
  }

  ngAfterViewInit(){
    //
    console.log(formatName("Akash")+" ngAfterViewInit is called for "+this.name)
    console.log("Checking the view ngAfterViewInit for "+this.name, this.heading?.nativeElement.textContent);
  }

  
}
