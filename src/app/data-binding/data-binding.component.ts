import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  public age:number=23;
  public name:string="keerthi";

public isValid:boolean=false;

  public phone:string="+91";

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    alert("submit clicked")
  }
  search(){
    alert("key pressed in input");
  }

}
