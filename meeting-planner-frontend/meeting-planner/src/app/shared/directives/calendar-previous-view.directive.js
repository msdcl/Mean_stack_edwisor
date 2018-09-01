"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var index_1 = require("date-fns/sub_days/index");
var index_2 = require("date-fns/sub_weeks/index");
var index_3 = require("date-fns/sub_months/index");
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new core_1.EventEmitter();
    }
    /**
     * @hidden
     */
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var subFn = {
            day: index_1["default"],
            week: index_2["default"],
            month: index_3["default"]
        }[this.view];
        this.viewDateChange.emit(subFn(this.viewDate, 1));
    };
    __decorate([
        core_1.Input()
    ], CalendarPreviousViewDirective.prototype, "view");
    __decorate([
        core_1.Input()
    ], CalendarPreviousViewDirective.prototype, "viewDate");
    __decorate([
        core_1.Output()
    ], CalendarPreviousViewDirective.prototype, "viewDateChange");
    __decorate([
        core_1.HostListener('click')
    ], CalendarPreviousViewDirective.prototype, "onClick");
    CalendarPreviousViewDirective = __decorate([
        core_1.Directive({
            selector: '[mwlCalendarPreviousView]'
        })
    ], CalendarPreviousViewDirective);
    return CalendarPreviousViewDirective;
}());
exports.CalendarPreviousViewDirective = CalendarPreviousViewDirective;
