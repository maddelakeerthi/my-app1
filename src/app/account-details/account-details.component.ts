import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        alert(data.id);
      }
    )
  }

  ngOnInit(): void {
  }

}
