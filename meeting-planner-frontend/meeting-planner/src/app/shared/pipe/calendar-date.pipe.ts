import { Pipe, PipeTransform, LOCALE_ID, Inject  } from '@angular/core';
import { CalendarDateFormatter } from '../classes/calendar-date-formatter.provider';
@Pipe({
  name: 'calendarDate'
})
export class CalendarDatePipe implements PipeTransform {

  constructor(
    private dateFormatter: CalendarDateFormatter,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  transform(date: Date, method: string, locale: string = this.locale): string {
    return this.dateFormatter[method]({ date, locale });
  }

}
