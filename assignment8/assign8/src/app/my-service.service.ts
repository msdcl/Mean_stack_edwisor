import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { 
    console.log("mysevice is called");
  }
 
}
