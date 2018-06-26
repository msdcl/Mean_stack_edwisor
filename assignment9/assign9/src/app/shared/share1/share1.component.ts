import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-share1',
  templateUrl: './share1.component.html',
  styleUrls: ['./share1.component.css']
})
export class Share1Component implements OnInit {
   @Input() country:any;
  
  constructor( public router:Router,public location:Location) {
    console.log("Shared component constructor ");
   }

  ngOnInit() {
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

  public goToCountryDetails(name:string){
    console.log("Country name : "+name);
    this.router.navigate(['/view3',name]);
  }

  public goToback():any{
    return this.location.back();
  }
}
