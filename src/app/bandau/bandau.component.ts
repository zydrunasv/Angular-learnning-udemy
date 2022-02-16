import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandau',
  templateUrl: "./bandau.component.html",
  styleUrls: ['./bandau.component.css']
})
export class BandauComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    } ,2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created! '+ this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName= event.target.value;
  }
}
