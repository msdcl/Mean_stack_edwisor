import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDatePipe } from './pipe/calendar-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarDatePipe]
})
export class SharedModule { }
