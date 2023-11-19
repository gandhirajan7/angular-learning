import { getLocaleTimeFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
})
export class WarningAlertComponent {
  serverStatus: string = '';
  showParagraph: boolean;
  timestampArr: number[];

  ngOnInit() {}

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.showParagraph = true;
    this.timestampArr = [];
  }

  getColor() {
    return this.serverStatus === 'online' ? 'teal' : 'pink';
  }

  onToggle() {
    this.showParagraph = !this.showParagraph;
    this.timestampArr.push(this.timestampArr.length + 1);
    console.log(this.timestampArr);
  }

  getNowUTC() {
    const now = new Date();
    return new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  }
}
