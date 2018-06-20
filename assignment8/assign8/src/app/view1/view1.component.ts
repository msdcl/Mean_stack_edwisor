import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  
  public selectedOption:string;  // option book/character/house
  public allData:any;           // all data of a particular option
  public house:Boolean;
  public book:Boolean;
  public character:Boolean;
  
  public event:string;
  category=['characters','books','houses']; // option available
  constructor(public httpService:HttpService,public router:Router, public route: ActivatedRoute) {
    this.event = this.route.snapshot.paramMap.get('event');
    this.selectedOption=this.event;
    this.character=false;
    this.house=true;
    this.book=false;
   this.requestToGetData(this.selectedOption);
   }

  ngOnInit() {
    
  }
  
   // function to get all data of one option book/character/house at time
  requestToGetData(type:string){
    // console.log("THIS TIME :::: "+type);
    if(type=='houses'){
      this.house=true;
      this.character=false;
      this.book=false;
    }else if(type=='books'){
      this.book= true;
      this.character=false;
      this.house=false;
    }else{
      this.character = true;
      this.house=false;
      this.book=false;
    }
    this.allData = this.httpService.getAllData(type).subscribe(
      data=>{
         this.allData=data;
         console.log("view1 all data : "+this.allData);
      },
      error =>{
        console.log("some error has occured.")
        console.log(error.errorMessage);
      }
    );
   }

   // function ill trigger whenever an option is selected from dropdown
  selectChangeHandler(event: any) {
    //update the ui
    console.log("Event is change happen.");
    let givenInput=this.selectedOption ;
  //  console.log("Given input is :  "+givenInput);
    this.requestToGetData(givenInput);
   this.router.navigate(['view1/',event]);   // got to view page
   
 //  this.view1.makeRequest();
  }
}
