import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online {
    color: white;
  }`]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  babar = true;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? '#56c95e' : '#ff213b';
  }


}
