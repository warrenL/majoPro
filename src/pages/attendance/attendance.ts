import { Component } from '@angular/core';
import { NavController, 
         NavParams, 
         PopoverController,
         IonicPage, 
         ActionSheetController, 
         AlertController, 
         App
       } from 'ionic-angular';

/**
 * attendance page: change student status and profile
 *
 * attendance page will edit student status and profile
 */

@IonicPage({
  name: 'attendance-page',
  priority: 'high'
})
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class AttendancePage {
  dataSourceChanged: string = "";
  signDate = new Date().toISOString();
  checkProgress: number = 0;
  dragevent: any;
  percent: number;

  items=[
    'Jill Simpson','Jared Johnson','Aaron Williams','Jazmine Jones','Markus Johnson',
    'Jennifer Walker','Richard Morris'
  ];

   public status: any={'Jill Simpson':'','Jared Johnson':'','Aaron Williams':'',
  'Jazmine Jones':'','Markus Johnson':'','Jennifer Walker':'','Richard Morris':''};

  /* 
   *
   * constructor
   *
   */
  constructor( public navCtrl: NavController, 
               public navParams: NavParams,
               public alertCtrl: AlertController, 
               public popoverCtrl: PopoverController,
               public actionsheetCtrl: ActionSheetController, 
               public appCtrl: App) {
                
  }

  /* 
   *
   * Confirm alert for check all button
   *
   */
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Mark Present?',
      message: 'Press OK to record All unmarked students as present.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.status['Jill Simpson'] = (this.status['Jill Simpson'] == "") ? "Normal" : this.status['Jill Simpson'];
            this.status['Jared Johnson'] = (this.status['Jared Johnson'] == "") ? "Normal" : this.status['Jared Johnson'];
            this.status['Aaron Williams'] = (this.status['Aaron Williams'] == "") ? "Normal" : this.status['Aaron Williams'];
            this.status['Jazmine Jones'] = (this.status['Jazmine Jones'] == "") ? "Normal" : this.status['Jazmine Jones'];
            this.status['Markus Johnson'] = (this.status['Markus Johnson'] == "") ? "Normal" : this.status['Markus Johnson'];
            this.status['Jennifer Walker'] = (this.status['Jennifer Walker'] == "") ? "Normal" : this.status['Jennifer Walker'];
            this.status['Richard Morris'] = (this.status['Richard Morris'] == "") ? "Normal" : this.status['Richard Morris'];
            this.status['Richard Morris1'] = (this.status['Richard Morris1'] == "") ? "Normal" : this.status['Richard Morris1'];
            this.status['Richard Morris2'] = (this.status['Richard Morris2'] == "") ? "Normal" : this.status['Richard Morris2'];
            this.status['Richard Morris3'] = (this.status['Richard Morris3'] == "") ? "Normal" : this.status['Richard Morris3'];
            this.status['Richard Morris4'] = (this.status['Richard Morris4'] == "") ? "Normal" : this.status['Richard Morris4'];
            this.dataSourceChanged = "Changed";
            this._checkProgress();
            this.checkProgress = 100;
          }
        }
      ]
    });
    confirm.present();
  }

  /* 
   *
   * Caculate the present status students progress and display in progress bar
   *
   */
  _checkProgress() {
    let totalNormalChecked = 0;
    for(let i of this.items) {
      if (this.status[i] != "") {
        totalNormalChecked += 1;
      }
    }
    this.checkProgress = (totalNormalChecked/this.items.length)*100;
  }

  /* 
   *
   * Mark the student as absent
   *
   */
  absent($event, item: string) {
    if($event) {
      $event.stopPropagation();
    }
    this.status[item] = "Absent";
    this.dataSourceChanged = "Changed";
    this._checkProgress();
  }

  /* 
   *
   * Mark the student as present
   *
   */
  present($event, item: string) {
    if($event) {
      $event.stopPropagation();
    }
    this.status[item] = "Normal";
    this.dataSourceChanged = "Changed";
    this._checkProgress();
  }

  /* 
   *
   * Mark the student as school closure
   *
   */
  schoolClosure(item) {
    this.status[item] = "SchoolClosure";
    this.dataSourceChanged = "Changed";
    this._checkProgress();
  }

  /* 
   *
   * Mark the student as school function
   *
   */
  schoolFunction(item) {
    this.status[item] = "SchoolFunction";
    this.dataSourceChanged = "Changed";
    this._checkProgress();
  }

  /* 
   *
   * Mark the student as Late
   *
   */
  Late(item) {
    this.status[item] = "Late";
    this.dataSourceChanged = "Changed";
    this._checkProgress();
  }

  /* 
   *
   * Mark the student as student profile
   *
   */
  studentProfile(item) {
    this.status[item] = "StudentProfile";
    this.dataSourceChanged = "Changed";
    this._checkProgress();
  }

  /* 
   *
   * Mark all students as present
   *
   */
  checkAll(){
    this.showConfirm();
  }

  /* 
   *
   * Pop up student setting action sheet include: 
   * Present, Absent, School Closure, School Function, Late
   * Student Profile, Transfer Student
   * 
   */
  transformStudent($event, item: string) {
    let titleForStudent = "Student: "+item;
    let actionSheet = this.actionsheetCtrl.create({
          title: titleForStudent,
          cssClass: 'action-sheets-basic-page',
          buttons: [
            {
              text: 'Present',
              cssClass: 'action-sheet-present',
              handler: () => {
                this.present($event, item);
              }
            },
            {
              text: 'Absent',
              cssClass: 'action-sheet-absent',
              handler: () => {
                this.absent($event, item);
              }
            },
            {
              text: 'School Closure',
              cssClass: 'action-sheet-tardy',
              handler: () => {
                this.schoolClosure(item);
              }
            },
            {
              text: 'School Function',
              cssClass: 'action-sheet-tardy',
              handler: () => {
                this.schoolFunction(item);
              }
            },
            {
              text: 'Late',
              cssClass: 'action-sheet-tardy',
              handler: () => {
                this.Late(item);
              }
            },
            {
              text: 'Student Profile',
              cssClass: 'action-sheet-profile',
              handler: () => {
                this.navCtrl.push('student-profile-page', item);
              }
            },
            {
              text: 'Transfer Student',
              cssClass:'action-sheet-transfer',
              handler: () => {
                this.navCtrl.push('student-transfer-page',item);
              }
            },
            {
              text: 'Close',
              role: 'cancel',
              handler: () => {
              }
            }
          ]
        });
        actionSheet.present();
  }

  /*
  * Swipe to set status.
  */
  dragStatus($event) {
    this.dragevent = $event;
    this.percent = $event.getSlidingPercent();
  }
  ontouchEnd($event, item) {
    if (this.percent >1) {
      this.absent(null,item)
    } else if (this.percent <-1){
       this.present(null,item)
    }
    setTimeout(() => {
      if (this.dragevent) {
        this.dragevent.close();
        this.percent = 0;
       }
     }, 0);
  }

}
