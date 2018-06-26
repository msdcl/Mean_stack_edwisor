import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { SharedModule } from './shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { View1Component } from './view/view1/view1.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewModule,
    SharedModule,
    RouterModule.forRoot([
      {path:'view1',component:View1Component},
      {path:'', redirectTo :'view1',pathMatch:'full'},
      {path:'*',redirectTo :'view1',pathMatch:'full'},
      {path:'**', redirectTo :'view1',pathMatch:'full'}

    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
