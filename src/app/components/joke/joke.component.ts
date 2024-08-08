import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

  joke ="loading"

  constructor(private jokeService:JokeService){

  }
  ngOnInit(){
    this.jokeService.getJoke().subscribe((data: any)=>{
      this.joke=data.value
    })
  }
  getJoke() {
    this.jokeService.getJoke().subscribe((data: any)=>{
      this.joke=data.value
    });
  }

}
