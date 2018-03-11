import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupItemService } from '../../provider/service/GroupItemService';

/**
 * The controller class for group list page.
 *
 */
@IonicPage({
  name: 'group-list-page',
  priority: 'high'
})
@Component({
  selector: 'page-group-list',
  templateUrl: 'group-list.html'
})
export class GroupListPage {
  groupItems: { missingSum: number; attendanceTime: string; groupName: string; teacherName: string; subject: string; studentSum: number; }[];
  schoolColumns: { name: string; options: { text: string; value: string }[] }[];
  districtColumns: { name: string; options: { text: string; value: string }[] }[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public groupItemService: GroupItemService) {
    this.groupItems = [
      {missingSum: 0, attendanceTime: '10:00 9/3/17', groupName: '5AM3A', teacherName: 'Ms.Jacobson', subject: 'Math', studentSum: 1},
      {missingSum: 2, attendanceTime: '10:00 9/3/17', groupName: '4AM3A', teacherName: 'Ms.Sanders', subject: 'Reading', studentSum: 2},
      {missingSum: 0, attendanceTime: '10:00 9/3/17', groupName: '3AR2A', teacherName: 'Ms.Sanders', subject: 'Reading', studentSum: 3},
      {missingSum: 4, attendanceTime: '10:00 9/3/17', groupName: '4AM3A', teacherName: 'Ms.Jacobson', subject: 'Math', studentSum: 4},
      {missingSum: 0, attendanceTime: '10:00 9/3/17', groupName: '4AM3A', teacherName: 'Ms.Jacobson', subject: 'Math', studentSum: 5},
      {missingSum: 6, attendanceTime: '10:00 9/3/17', groupName: '5AM3A', teacherName: 'Ms.Sanders', subject: 'Reading', studentSum: 6},
      {missingSum: 0, attendanceTime: '10:00 9/3/17', groupName: '4PM3A', teacherName: 'Ms.Jacobson', subject: 'Math', studentSum: 7},
      {missingSum: 8, attendanceTime: '10:00 9/3/17', groupName: '5AM3A', teacherName: 'Ms.Jacobson', subject: 'Math', studentSum: 8},
      {missingSum: 0, attendanceTime: '10:00 9/3/17', groupName: '3AR2A', teacherName: 'Ms.Sanders', subject: 'Reading', studentSum: 9},
      {missingSum: 2, attendanceTime: '10:00 9/3/17', groupName: '4AM3A', teacherName: 'Ms.Jacobson', subject: 'Math', studentSum: 2},
      {missingSum: 0, attendanceTime: '10:00 9/3/17', groupName: '4PM3A', teacherName: 'Ms.Sanders', subject: 'Reading', studentSum: 3},
      {missingSum: 5, attendanceTime: '10:00 9/3/17', groupName: '4AM3A', teacherName: 'Ms.Jacobson', subject: 'Math', studentSum: 4}
    ];
    this.districtColumns = [
      {
        name: 'districtName',
        options: [
          {text: 'Holden R-III School District', value: '1'},
          {text: 'Iberia R-V School District', value: '2'},
          {text: 'Innovations Charter District', value: '3'},
          {text: 'Brookside Charter District', value: '4'},
          {text: 'California R-1 School District', value: '5'}
        ]
      }
    ];
    this.schoolColumns = [
      {
        name: 'schoolName',
        options: [
          {text: 'Evaluate Elementary', value: '1'},
          {text: 'Evaluate High', value: '2'},
          {text: 'Evaluate Middle', value: '3'},
          {text: 'Bailey, William H Middle (Summer)', value: '4'},
          {text: 'Kelly, Matt Elementary (Summer)', value: '5'}
        ]
      }
    ];
  }

  toAttendance(event, item) {
    this.navCtrl.push('attendance-page', item);
  }

}
