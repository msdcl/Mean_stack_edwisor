import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import {RouterModule, Routes} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DummyComponent } from './dummy/dummy.component';
import { View3Component } from './view3/view3.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'view2/:region/:currency/:language',component:View2Component,runGuardsAndResolvers:'always'},
      {path:'view3/:name',component:View3Component}
    ])
  ],
  declarations: [View1Component, View2Component, DummyComponent, View3Component]
})
export class ViewModule { }
