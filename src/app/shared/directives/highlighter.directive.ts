import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[tgHighlighter]',
})
export class HighlighterDirective {

  @HostListener('mouseover')
  onMouseOver() {
    this.er.nativeElement.classList.add('highlighted');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.er.nativeElement.classList.remove('highlighted');
  }

  constructor(private er: ElementRef) { }

}
