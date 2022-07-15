import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  elems:string="10px 10px 10px gray"


  constructor(private elem:ElementRef) {
      this.elem.nativeElement.style.boxShadow = `${this.elems}`;
  }

  @HostListener('mouseover')onMouseover(){
    this.elem.nativeElement.style.boxShadow = `10px 5px 10px #0dcaf0`;
    this.elem.nativeElement.style.borderRadius = `10%`;

    }

    @HostListener('mouseout')onMouseout(){
      this.elem.nativeElement.style.boxShadow = `${this.elems}`;
      this.elem.nativeElement.style.borderRadius = `0`;
      }
}
