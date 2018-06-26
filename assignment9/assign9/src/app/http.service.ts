import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

   public baseUrl='https://restcountries.eu/rest/v2/';
  constructor(private http : HttpClient) { }

  public getAllCountriesRegion(region:string):Observable<any>{
   // console.log("hamara url : "+this.baseUrl +'region/'+region+'?fields=name;capital;currencies;languages;timezones;flag');
    let myResponse = this.http.get(this.baseUrl +'region/'+region+'?fields=name;nativeName;subregion;capital;currencies;languages;timezones;flag');
     return myResponse;
  }

  public getAllCountriesCurrencies(code:string):Observable<any>{
    let myResponse =this.http.get(this.baseUrl+'currency/'+code+'?fields=name;nativeName;subregion;capital;currencies;languages;timezones;flag');
     return myResponse;
  }

  public getAllCountriesLanguage(code:string):Observable<any>{
   // console.log(this.baseUrl+'lang/'+code+'?fields=name;subregion;capital;currencies;languages;timezones;flag');
    let myResponse =this.http.get(this.baseUrl+'lang/'+code+'?fields=name;nativeName;subregion;capital;currencies;languages;timezones;flag');
     return myResponse;
  }

  public getCountryDetail(name:string):Observable<any>{
  // console.log("hamara url : "+this.baseUrl+'name/'+name+'?fullText=true?fields=name;nativeName;subregion;capital;currencies;languages;timezones;flag');
    let myResponse =this.http.get(this.baseUrl+'name/'+name+'?fullText=true');
     return myResponse;
  }
}
