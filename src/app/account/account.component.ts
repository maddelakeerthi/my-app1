import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public accounts:any=[];
  public term:string="";
  public column:string="";
  public order:string="";
  public limit:number=0;
  public page:number=0;

  constructor(private _accountService:AccountService) {

    this._accountService.getAccount().subscribe(
      (data:any)=>{
       this.accounts=data;
      },
      (err:any)=>{
        alert("Interenal error")
      }
    )
   }

  ngOnInit(): void {
  }
  filter(){
    this._accountService.getFilteredAccount(this.term).subscribe(
     (data:any)=>{
       this.accounts=data;
     },
     (err:any)=>{
      alert("Internal error")
     }
    )
  }
  sort(){
    this._accountService.getSortedAccount(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal error")
      }
    )
  }
  pageNo(){
  this._accountService.getPagedAccount(this.limit,this.page).subscribe(
    (data:any)=>{
     this.accounts=data;
    },
    (err:any)=>{
     alert("Internal error")
    }
  )
}

}
