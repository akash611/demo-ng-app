import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  el: ElementRef
  constructor(el: ElementRef) { 
    this.el=el
    
  }
  @HostBinding("style.backgroundColor")
  bgColor="red"
  @HostListener("mouseenter")
  onMouseEnter(){
    this.bgColor="yellow"
    // this.el.nativeElement.style.backgroundColor="yellow"
    this.el.nativeElement.style.fontSize="50px"
  }
  @HostListener("mouseleave")
  onMouseLeave(){
    this.bgColor="red"
    // this.el.nativeElement.style.backgroundColor="red"
    this.el.nativeElement.style.fontSize="20px"
  }
}
