import { Directive, ElementRef, Renderer2, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appChangeFontSize]',
  standalone: false,
})
export class ChangeFontSize {

  @Input() appChangeFontSize!: number

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.appChangeFontSize) {
      this.renderer.setStyle(this.element.nativeElement, "font-size", `${this.appChangeFontSize}px`);
    }
  }

}
