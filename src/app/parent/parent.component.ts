import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  channelnameinparent = "";
  msgfromchils="";  
  constructor() {

  }
  ngOnInit(): void {

  }
  recieveMessage(msg:string): void {
    console.log(msg);
    this.msgfromchils=msg;
  }
}
