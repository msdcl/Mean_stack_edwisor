import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import {Router} from '@angular/router';
import { MyServiceService } from './my-service.service';
//import { View1Component } from './view1/view1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular application : Ice and Fire';
  // category=['characters','books','houses'];
  //  public input ='houses';
  //  public selectedOption:string;
  //  public allData:any;
  //  public house:Boolean;
  //  public book:Boolean;
  //  public character:Boolean;
  constructor(public httpService:HttpService,  public router:Router, public mysevice:MyServiceService){
  //    this.selectedOption='houses';
     
  //   this.character=false;
  //   this.house=true;
  //   this.book=false;
  //  this.requestToGetData('houses');
  }


  ngOnInit(){
    
  }
//    requestToGetData(type:string){
//     // console.log("THIS TIME :::: "+type);
//     if(type=='houses'){
//       this.house=true;
//       this.character=false;
//       this.book=false;
//     }else if(type=='books'){
//       this.book= true;
//       this.character=false;
//       this.house=false;
//     }else{
//       this.character = true;
//       this.house=false;
//       this.book=false;
//     }
//     this.allData = this.httpService.getAllData(type).subscribe(
//       data=>{
//          console.log(data);
//          this.allData=data;
//       },
//       error =>{
//         console.log("some erroe has occured.")
//         console.log(error.errorMessage);
//       }
//     );
//    }
//   selectChangeHandler(event: any) {
//     //update the ui
//     console.log("Event is change happen.");
//     let givenInput=this.selectedOption ;
//     console.log("Given input is :  "+givenInput);
//     this.requestToGetData(givenInput);
//   // this.httpService.dataArrangement(givenInput);
//  //  this.router.navigate(['view1/',event]);
   
//  //  this.view1.makeRequest();
//   }
}
