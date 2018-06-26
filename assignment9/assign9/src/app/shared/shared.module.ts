import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Share1Component } from './share1/share1.component';
import {RouterModule, Routes} from '@angular/router';
import { View2Component } from '../view/view2/view2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'view2/:region/:currency/:language',component:View2Component}
    ])
  ],
  declarations: [Share1Component],
  exports:[Share1Component,CommonModule]
})
export class SharedModule { }
