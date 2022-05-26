import { Directive, ElementRef, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @Input()
  durata!: number;

    constructor(private el: ElementRef) { }

    ngOnInit(){
      let num: number = this.durata;
      if (this.durata<8){
        this.el.nativeElement.style.backgroundColor = 'green';
      }
    }
    
}