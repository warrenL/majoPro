import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * The class used to support functions for group calendar page.
 *
 */
@IonicPage({
  name: 'group-calendar-page',
  segment: 'group-calendar',
  priority: 'high'
})
@Component({
  selector: 'page-group-calendar',
  templateUrl: 'group-calendar.html'
})
export class GroupCalendarPage {
    eventSource;
    viewTitle;
    dateList:Array<number> = [];
    currentTempDate: number = new Date().getDate();

    isToday:boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
        dateFormatter: {
            formatMonthViewDay: function(date:Date) {
                return date.getDate().toString();
            },
            formatMonthViewDayHeader: function(date:Date) {
                return 'MonMH';
            },
            formatMonthViewTitle: function(date:Date) {
                return 'testMT';
            },
            formatWeekViewDayHeader: function(date:Date) {
                return 'MonWH';
            },
            formatWeekViewTitle: function(date:Date) {
                return 'testWT';
            },
            formatWeekViewHourColumn: function(date:Date) {
                return 'testWH';
            },
            formatDayViewHourColumn: function(date:Date) {
                return 'testDH';
            },
            formatDayViewTitle: function(date:Date) {
                return 'testDT';
            }
        }
    };

    constructor(private navController:NavController) {
        this.calendar.mode = 'day';
        this.eventSource = this.createRandomEvents();
        this.initDateArray(this.calendar.currentDate);
        this.generateDateRange(this.calendar.currentDate);
    }

    initDateArray(inputDate: Date) {
        this.dateList = [];
        this.dateList.push(new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()-3).getDate());
        this.dateList.push(new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()-2).getDate());
        this.dateList.push(new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()-1).getDate());
        this.dateList.push(new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()).getDate());
        this.dateList.push(new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()+1).getDate());
        this.dateList.push(new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()+2).getDate());
        this.dateList.push(new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()+3).getDate());
    }   

    generateDateRange(currentTempDate: Date) {
        let isGenerateDateRange = true;
        for (let i = 0; i < this.dateList.length; i ++) {
            if (this.dateList[i] == currentTempDate.getDate()) {
                // No need generate date range
                isGenerateDateRange = false;
            }
        }
        if (isGenerateDateRange) {
            this.initDateArray(currentTempDate);
        }
    }

    selectDate($event, date) {
        console.log("current Date object :" + (date - this.calendar.currentDate.getDate()));
        let detal = date - this.calendar.currentDate.getDate();
        this.calendar.currentDate = new Date(this.calendar.currentDate.getFullYear(), 
                                            this.calendar.currentDate.getMonth(), 
                                            this.calendar.currentDate.getDate()+detal);
    }

    loadEvents() {
        this.eventSource = this.createRandomEvents();
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    onEventSelected(event) {
        if (!event.allDay) {
            this.navController.push('attendance-page');
            console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        }
    }

    changeMode(mode) {
        this.calendar.mode = mode;
    }

    today() {
        this.calendar.currentDate = new Date();
    }

    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }

    onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
        this.currentTempDate = event.getDate();
        this.generateDateRange(event);
        console.log("OnCurrentDateChanged:" + event);
    }

    createRandomEvents() {
        var events = [];
        var baseNumber = 7;
        for (var i = 0; i < 5; i += 1) {

            var date = new Date();
            var detalTime = (i%2) ? 1 : 2;
            baseNumber = baseNumber + 1;
            date.setHours(baseNumber, 0, 0, 0);
            var startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), baseNumber, 0);
            
            baseNumber = baseNumber + detalTime;
            var endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), baseNumber, 0);

            console.log("startTime: " + startTime + "endTime: " + endTime + ".");

            events.push({
                title: '4MBA' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        }
        var mockUpDate = new Date();
        mockUpDate.setHours(7, 0, 0, 0);
        events.push({
            title: '4MBA' + 7,
            startTime: new Date(mockUpDate.getFullYear(), mockUpDate.getMonth(), mockUpDate.getDate(), 7, 0),
            endTime: new Date(mockUpDate.getFullYear(), mockUpDate.getMonth(), mockUpDate.getDate(), 8, 0),
            allDay: false
        });
        var mockUpDate1 = new Date();
        mockUpDate1.setHours(2, 0, 0, 0);
        events.push({
            title: '4MBA' + 2,
            startTime: new Date(mockUpDate1.getFullYear(), mockUpDate1.getMonth(), mockUpDate1.getDate(), 2, 0),
            endTime: new Date(mockUpDate1.getFullYear(), mockUpDate1.getMonth(), mockUpDate1.getDate(), 5, 0),
            allDay: false
        });
        return events;
    }

    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }

    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };
}
