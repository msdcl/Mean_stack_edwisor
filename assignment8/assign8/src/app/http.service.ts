import { Injectable } from '@angular/core';


import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public allData;
  public house: Boolean;
  public book: Boolean;
  public character: Boolean;
  public finalData;
  public baseUrl = 'https://anapioficeandfire.com/api/';

  constructor(private http_get: HttpClient) {
    console.log('service constructor is called.');
  }
 // function to make http get request to get all data of book/character/house one at a time
  public getAllData(dataType): any {
    let myResponse = this.http_get.get(this.baseUrl + dataType);
    this.allData =myResponse;
   /// console.log("all data : "+this.allData);
    return myResponse;
  }
   
  // function to make http get request to get data of particular book/character/house
  public getDataForView(type:string,id:number):any{
    console.log("Hamara url : "+this.baseUrl +type+'/'+id);
    let response =this.http_get.get(this.baseUrl +type+'/'+id);
    return response;
  }
}
