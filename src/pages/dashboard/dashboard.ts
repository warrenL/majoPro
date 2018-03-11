import { Component } from '@angular/core';
import { App, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * The controller class for dashboard page.
 *
 */
@IonicPage({
  name: 'dashboard-page',
  segment: 'dashboard',
  priority: 'high'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  schoolList: { name: string; options: { text: string; value: string }[] }[];
  districtList: { name: string; options: { text: string; value: string }[] }[];

  district: number = 0;
  school: number = 0;
  districtAlertOpts: { title: string };
  schoolAlertOpts: { title: string };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menu: MenuController,
              private appCtrl: App) {
    menu.enable(true);

    this.districtList = [
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
    this.schoolList = [
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

  attendanceManage(event) {
    this.appCtrl.getRootNav().push('tabs-page', {}, {animate: true, direction: 'forward'});
  }

  lessonsManage(event) {
    this.navCtrl.push('lessons-page');
  }

  communicationsManage(event) {
    this.navCtrl.push('communications-page');
  }
}
