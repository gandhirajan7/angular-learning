import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent {
  serverId: number = 10;
  serverStatus: string = '';
  allowNewServer: boolean = true;
  serverCreationStatus: string = 'testServer';
  userName: string = '';
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {}
  getColor() {
    return this.serverStatus === 'online' ? 'teal' : 'pink';
  }

  onReset() {
    this.userName = '';
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server Was created';
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverCreationStatus = (<HTMLInputElement>event.target).value;
  }
}
