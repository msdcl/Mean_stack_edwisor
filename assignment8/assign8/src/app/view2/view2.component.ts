import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css'],
  providers :[Location]
})
export class View2Component implements OnInit {

  public currentId: number;// current id of book/character/house
  public allData;
  public currentData: any;  // data of particular book/character/house
  public type: string;      // book/character/house
  public house:Boolean;     // check for type
  public book:Boolean;
  public character:Boolean;
  constructor(public http: HttpService, public route: ActivatedRoute, public router: Router,private location:Location) {
    this.character=false;
    this.house=true;
    this.book=false;
  }

  ngOnInit() {
    this.currentId = Number(this.route.snapshot.paramMap.get('id'));
    this.type = this.route.snapshot.paramMap.get('type');
    if(this.type=='houses'){
      this.house=true;
      this.character=false;
      this.book=false;
    }else if(this.type=='books'){
      this.book= true;
      this.character=false;
      this.house=false;
    }else{
      this.character = true;
      this.house=false;
      this.book=false;
    }
    console.log("this time id : " + this.currentId);
    this.func(this.currentId, this.type);   
  }

  // function to get data of particular book/character/house
  public func(id: number, type: string): any {
    this.currentData = this.http.getDataForView(this.type, this.currentId).subscribe(
      data => {
       console.log(data);
        this.currentData = data;
       
      },
      error => {
        console.log("some error has occured.")
        console.log(error.errorMessage);
      }
    );
    console.log(this.currentData);
  }


  // function to go back to previous page
  public goBackFunction():any{
    return this.location.back();
  }
}
