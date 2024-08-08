import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  // httpClient: HttpClient
  constructor(private httpClient: HttpClient) {
    // this.httpClient=httpClient
   }
  // private httpClient = inject(HttpClient) //using inject keyword
   getJoke(){
    return this.httpClient.get("https://api.chucknorris.io/jokes/random?category=dev")
   
   }
}
