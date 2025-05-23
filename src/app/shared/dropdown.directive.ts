import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';
@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event']) closeOnOutsideClick(
    event: Event
  ) {
    if (!this.elRef.nativeElement.contains(event.target)) this.isOpen = false;
  }

  constructor(private elRef: ElementRef) {}
}
