"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var index_1 = require("date-fns/start_of_today/index");
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new core_1.EventEmitter();
    }
    /**
     * @hidden
     */
    CalendarTodayDirective.prototype.onClick = function () {
        this.viewDateChange.emit(index_1["default"]());
    };
    __decorate([
        core_1.Input()
    ], CalendarTodayDirective.prototype, "viewDate");
    __decorate([
        core_1.Output()
    ], CalendarTodayDirective.prototype, "viewDateChange");
    __decorate([
        core_1.HostListener('click')
    ], CalendarTodayDirective.prototype, "onClick");
    CalendarTodayDirective = __decorate([
        core_1.Directive({
            selector: '[mwlCalendarToday]'
        })
    ], CalendarTodayDirective);
    return CalendarTodayDirective;
}());
exports.CalendarTodayDirective = CalendarTodayDirective;
