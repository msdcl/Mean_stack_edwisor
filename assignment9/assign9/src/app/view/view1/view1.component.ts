import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {


  public regions = [{'image':'asian.jpg','name':'asia'},{'image':'ocenia.jpg','name':'oceania'},{'image':'africa.jpg','name':'africa'},{'image':'Europe.png','name':'europe'},{'image':'americas.jpg','name':'americas'}];
  
  constructor(public router: Router) { }

  ngOnInit() {
  }
   
}
