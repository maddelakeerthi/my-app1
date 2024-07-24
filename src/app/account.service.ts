import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpclient:HttpClient) { }

  getAccount():Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
  getFilteredAccount(term:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term)
  }
  getSortedAccount(column:string,order:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order)
  }
  getPagedAccount(limit:number,page:number):Observable<any>{
   return this._httpclient.get("https://                                                                        6128991386a213001729f9df.mockapi.io/test/v1/principals?Limit="+limit+"&page="+page);
  }
}
