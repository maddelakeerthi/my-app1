import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name:string="";
  public price:number=0;
  public rating:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
