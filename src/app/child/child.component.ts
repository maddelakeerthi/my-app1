import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public ac:string="XXXXXX"

  public bc:string="";
  //Event CREATE
  @Output() public bEvent:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  send(){
//EVENT EMITTER
 this.bEvent.emit(this.bc)
  }

}
