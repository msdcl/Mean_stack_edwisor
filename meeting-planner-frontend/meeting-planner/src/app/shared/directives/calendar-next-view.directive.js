"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var index_1 = require("date-fns/add_days/index");
var index_2 = require("date-fns/add_weeks/index");
var index_3 = require("date-fns/add_months/index");
/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = /** @class */ (function () {
    function CalendarNextViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new core_1.EventEmitter();
    }
    /**
     * @hidden
     */
    CalendarNextViewDirective.prototype.onClick = function () {
        var addFn = {
            day: index_1["default"],
            week: index_2["default"],
            month: index_3["default"]
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, 1));
    };
    __decorate([
        core_1.Input()
    ], CalendarNextViewDirective.prototype, "view");
    __decorate([
        core_1.Input()
    ], CalendarNextViewDirective.prototype, "viewDate");
    __decorate([
        core_1.Output()
    ], CalendarNextViewDirective.prototype, "viewDateChange");
    __decorate([
        core_1.HostListener('click')
    ], CalendarNextViewDirective.prototype, "onClick");
    CalendarNextViewDirective = __decorate([
        core_1.Directive({
            selector: '[mwlCalendarNextView]'
        })
    ], CalendarNextViewDirective);
    return CalendarNextViewDirective;
}());
exports.CalendarNextViewDirective = CalendarNextViewDirective;
