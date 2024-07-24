import { Component, OnInit } from '@angular/core';
import { Flipkart2Service } from '../flipkart2.service';

@Component({
  selector: 'app-flipkart2',
  templateUrl: './flipkart2.component.html',
  styleUrls: ['./flipkart2.component.css']
})
export class Flipkart2Component implements OnInit {

  public products:any=[];

  constructor(private _flipkart2:Flipkart2Service) { 

    this._flipkart2.getProducts().subscribe(
    (data:any)=>{
     this.products=data;
    },
    (error:any)=>{
      alert("Internal error")
    }
    )
  }

  ngOnInit(): void {
  }

}
