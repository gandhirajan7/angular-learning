import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  swap: boolean;
  collapsed: boolean;

  constructor() {
    this.swap = false;
    this.collapsed = true;
  }

  @Output() emitScreenChange = new EventEmitter<boolean>();

  emit(val: boolean) {
    this.swap = val;
    this.emitScreenChange.emit(this.swap);
  }
}
