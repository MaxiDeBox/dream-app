import  { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExapmleBold]'
})
export class ExapmleBoldDirective {

  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseover') onMouseEnter() {
    this.setFontWeight('bold');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('normal');
  }

  private setFontWeight(weight: string) {
    this.elementRef.nativeElement.style.fontWeight = weight;
  }

}
