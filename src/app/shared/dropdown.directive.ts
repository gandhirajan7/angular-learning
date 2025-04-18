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

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}
}
