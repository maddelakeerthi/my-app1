import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  public height:number=0;
  public weight:number=0;
  public result:number=0;
  public check:string="";

  constructor() { }

  ngOnInit(): void {
  }
  calculate(){
    this.result=Math.round(this.weight/((this.height/100)*(this.height/100)));

    if(this.result<18.5){
    this.check="underweight";
    }
    else if(this.result<18.5&&this.result<29.9){
      this.check="normal weight;"
    }
    else if(this.result<29.00&&this.result<70){
      this.check="over weight";
    }
    
  }

}
