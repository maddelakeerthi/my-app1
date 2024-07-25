                                                                            import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm:FormGroup=new FormGroup({
      account_name:new FormControl(),
      account_balance:new FormControl(),
      account_number:new FormControl(),
      city:new FormControl(),
      profile_picture:new FormControl(),
    });

  constructor(private _accountService:AccountService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.accountForm.value);
    this._accountService.createAccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Created successfully")
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
