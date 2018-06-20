import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';
//import { View1Component } from './view1/view1.component'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    View2Component,
    View1Component,
    //View1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"view2/:type/:id",component: View2Component},
      {path :"view1/:event", component : View1Component },
      {path:'' ,redirectTo :'view1/books',pathMatch:'full'},
      {path :"**",component: NotFoundComponent}
    ])
  ],
  providers: [MyServiceService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
