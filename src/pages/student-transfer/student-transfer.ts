import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 
 * Student transfer page for changing current selected student group
 * 
 */

@IonicPage({
  name: 'student-transfer-page',
  priority: 'high'
})
@Component({
  selector: 'page-student-transfer',
  templateUrl: 'student-transfer.html',
})
export class StudentTransferPage {

  public item: string;
  public groupClass: any = ["4MB4B","4MB3B","4MB2B","4MB1B"];
  public status: any;
  public timeStatus: any;
  classDate = new Date().toISOString();
  public isSelectedGroupClass: string;
  public currentTitle: string;
  public currentDate: string;

  /*
   * 
   * constructor
   * 
   */
  constructor( public navCtrl: NavController, 
               public navParams: NavParams ) {
      this.item = navParams['data'];
      this.isSelectedGroupClass = "";
      this.currentTitle = "4AM3A";
      this.currentDate = "8/1/2017";
      this.status = new Map();
      this.status.set('4AR2B','');
      this.status.set('4DR4B','');
      this.status.set('4ER5B','');
      this.status.set('4FR6B','');

      this.timeStatus = new Map();
      this.timeStatus.set('4AR2B','10/27/2017');
      this.timeStatus.set('4DR4B','10/27/2017');
      this.timeStatus.set('4ER5B','10/27/2017');
      this.timeStatus.set('4FR6B','10/27/2017');
      

      this.groupClass = new Array();

      this.groupClass.push("4AR2B");
      this.groupClass.push("4DR4B");
      this.groupClass.push("4ER5B");
      this.groupClass.push("4FR6B");
  }

  /*
   * 
   * Transfer student to selected group
   * 
   */
  transformStudent($event, selectItem) {
    this._setAllStatusNone();
    this.status.set(selectItem, "selected");
    this.isSelectedGroupClass = "selected";
  }

  /*
   * 
   * Clear the checkbox button status in group list
   * 
   */
  originalStatus() {
    this._setAllStatusNone();
    this.isSelectedGroupClass = "";
  }

  /*
   * 
   * Save button clicked for changing current student group 
   * 
   */
  Save() {
    for(let i of this.groupClass) {
      let status = this.status.get(i);
      if (status == "selected") {
        let tmpdate = this.timeStatus.get(i);
        let tmptitle = i;
        let index = this.groupClass.indexOf(i, 0);
        this.groupClass.splice(index, 1);
        this.groupClass.push(this.currentTitle);
        this.status.set(this.currentTitle, "");
        this.status.delete(i);
        this.timeStatus.set(this.currentTitle, this.currentDate);
        this.timeStatus.delete(i);
        this.currentTitle = tmptitle;
        this.currentDate = tmpdate;
        break;
      }
    }
  }

  /*
   * 
   * Clear selected checkbox status
   * 
   */
  _setAllStatusNone() {
    for (let i of this.groupClass) {
      this.status.set(i, '');
    }
  }
}
