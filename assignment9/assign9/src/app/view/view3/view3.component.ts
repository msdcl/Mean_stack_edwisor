import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Route ,ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import { HttpService } from '../../http.service';
import { GoBack } from '../../goBack';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})
export class View3Component implements OnInit,GoBack {

  public countryName:string;
  public country;
  constructor(public router:Router, public activatedRoute:ActivatedRoute,public location:Location,public http:HttpService) {

   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.countryName = params.get('name');
      //business logic what changes you want on the page with this new data.
      this.getAlldetailOfCountry(this.countryName);
  });
  }

  public getAlldetailOfCountry(name:string):any{

      this.country=this.http.getCountryDetail(name).subscribe(
        data=>{
          console.log(data);
           this.country=data;
          
        },
        error =>{
          console.log("some error has occured.")
          console.log(error.errorMessage);
        }
      );
      console.log(this.country);
  }

  public goToBack(){
    return this.location.back();
  }

  public callTheFunction(event,code):any{
     
    
    console.log(event);
    if(event=='currency'){
    this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/view2",'#',code,'#']));
      }else {
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/view2",'#','#',code]));
      }
  }

}
