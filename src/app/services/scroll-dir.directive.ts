import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirDirective {
  @Output() setScroll = new EventEmitter();
  private scroll!: number;

  constructor(private el: ElementRef) { }

  @HostListener('scroll', ['$event'])
  // scrollIt() { this.scroll = this.el.nativeElement }

  reset() {  this.el.nativeElement.scrollTop = this.scroll }
}