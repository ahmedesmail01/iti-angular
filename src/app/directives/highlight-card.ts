import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true,
})
export class HighlightCard implements OnChanges {
  @Input('appHighlightCard') defaultColor: string = 'red';

  constructor(private ele: ElementRef) {}

  ngOnChanges(): void {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover')
  over() {
    this.ele.nativeElement.style.backgroundColor = 'white';
  }
  @HostListener('mouseout')
  out() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
