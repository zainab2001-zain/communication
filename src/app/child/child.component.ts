import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
  @Input()
  channelname="Zainab Farooq";
  @Output()
  sendMessageEmmitter=new EventEmitter();
  constructor(){

  }
  ngOnInit(): void {
      
  }
  
  sendmaessagetoparent(e:Event):void{
    const inputElement = e.target as HTMLInputElement;
    this.sendMessageEmmitter.emit(inputElement.value);
  }
}
