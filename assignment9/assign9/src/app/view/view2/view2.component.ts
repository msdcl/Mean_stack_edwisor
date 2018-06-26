import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route ,ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import { GoBack } from '../../goBack';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit,GoBack {
  
  public allCountries;
  public region:string;
  public currCode:string;
  public langCode:string;

  public area:boolean;
  public currency:boolean;
  public language:boolean;
 
  constructor(public httpService:HttpService, public router:Router, public route:ActivatedRoute,private location:Location) {
   this.area=false;
   this.currency=false;
   this.language=false;
    console.log("view2 constructor called");
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currCode = params.get('currency');
      this.langCode = params.get('language');
      this.region= params.get('region');
      //business logic what changes you want on the page with this new data.
  });
   //// this.region = this.route.snapshot.paramMap.get('region');
    //this.currCode = this.route.snapshot.paramMap.get('currency');
    //this.langCode = this.route.snapshot.paramMap.get('language');
    console.log("current region : "+this.region);
    console.log("language : "+this.langCode);
    console.log("currency code  : "+this.currCode);
    if(this.langCode=='#' && this.currCode=='#'){
      this.getAllCountries(this.region);
      this.area=true;
   this.currency=false;
   this.language=false;
      
    }else if(this.langCode=='#' && this.region=='#'){
      this.getCurrencyFilter(this.currCode);
      this.area=false;
   this.currency=true;
   this.language=false;
     
    }else{
      this.getLanguageFilter(this.langCode);
      this.area=false;
   this.currency=false;
   this.language=true;
    }
   
  }
  public getLanguageFilter(code:string){
    this.allCountries=this.httpService.getAllCountriesLanguage(code).subscribe(
      data=>{
         this.allCountries=data;
         console.log("view2 language filter : "+this.allCountries);
      },
      error =>{
        console.log("some error has occured.")
        console.log(error.errorMessage);
      }
    );
  }
  public getCurrencyFilter(code:string){
    this.allCountries=this.httpService.getAllCountriesCurrencies(code).subscribe(
      data=>{
         this.allCountries=data;
         console.log("view2 currency filter : "+this.allCountries);
      },
      error =>{
        console.log("some error has occured.")
        console.log(error.errorMessage);
      }
    );
  }
  public getAllCountries(currRegion:string){
    this.allCountries= this.httpService.getAllCountriesRegion(currRegion).subscribe(
      data=>{
         this.allCountries=data;
         console.log("view2 all countries with region : "+this.allCountries);
      },
      error =>{
        console.log("some error has occured.")
        console.log(error.errorMessage);
      }
    );
   }
   public goToBack(){
    // window.history.back();
    return this.location.back();
  }
  
}
