import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoldText]',
  standalone: false,
})
export class BoldText {

  @Input() appBoldText!: boolean; 

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.renderer.setStyle(this.element.nativeElement, "font-weight", this.appBoldText ? "bold" : "normal");
  }

}
