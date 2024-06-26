import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-servers]',
  // selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer=false;
  serverCreationStatus="No server was created";
  serverName="Test";
  serverCreated=false;

  servers=["TestServer","TestServer2"]

  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus="Server was created and name is :"+this.serverName;
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event:Event){
    console.log(event);
    this.serverName=(<HTMLInputElement> event.target).value;
  }
}
