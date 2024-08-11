import { Injectable, Signal, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { 
    effect(()=>{
      console.log("count :",this.count(),"double count:",this.doubleCount())
 })

  }
  private count = signal(0)

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  getCount(){
    return this.count()
  }
  incrementCount(){
    // this.count=this.count+1;
    this.count.update((oldValue)=>{
      return oldValue + 1
    })

  }
}
