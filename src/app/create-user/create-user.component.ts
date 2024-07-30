import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public userForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

}
