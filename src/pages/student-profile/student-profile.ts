import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { App, IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * 
 * Student profile page
 * 
 */

@IonicPage({
  name: 'student-profile-page',
  segment: 'student-profile',
  priority: 'high'
})
@Component({
  selector: 'page-student-profile',
  templateUrl: 'student-profile.html',
})
export class StudentProfilePage {
  item: string;
  currentStudent: string;
  groupNote: string;
  contactNote: string;
  contactNoNote: number;
  groupNoNote: number;
  groupList: { "groupId": number; "groupName": string; }[];
  contactList: { "contactName": string; "role": string; "hasEmail": string; "hasTel": string }[];

  /*
   * 
   * constructor
   * 
   */
  constructor( public navCtrl: NavController,
               public alertCtrl: AlertController,
               public navParams: NavParams,
               private storage: Storage,
               public appCtrl: App ) {
    // Serailized mock up data
    this.item = navParams['data'];
    this.currentStudent = 'Jennifer Walker';
    let groupData = [
      {"groupId": 1, "groupName": "4AM3A"},
      {"groupId": 2, "groupName": "4AR2B"}
    ];
    let contactData = [
      {"contactName": "Mary Walker", "role": "Mother", "hasEmail": "ture", "hasTel": "ture"},
      {"contactName": "Jeff Walker", "role": "Father", "hasEmail": "false", "hasTel": "ture"},
      {"contactName": "Samantha Jones", "role": "Aunt", "hasEmail": "ture", "hasTel": "ture"}
    ];
    storage.set('groupData', JSON.stringify(groupData));
    storage.get('groupData').then((data) => {
      this.groupList = JSON.parse(data);
    });
    storage.set('contactData', JSON.stringify(contactData));
    storage.get('contactData').then((data) => {
      this.contactList = JSON.parse(data);
    });

    this.groupNote = this.getJsonLength(groupData) <= 1 ? 'Current Group' : 'Current Groups';
    this.contactNote = this.getJsonLength(contactData) <= 1 ? 'Emergency Contact' : 'Emergency Contacts';
    this.groupNoNote = this.getJsonLength(groupData);
    this.contactNoNote = this.getJsonLength(contactData);
  }

  /*
   * 
   * Go to attendance page
   * 
   */
  toAttendance($event) {
    this.navCtrl.push('attendance-page');
  }

  /*
   * 
   * Go to student transform page
   * pass the item parameter
   * 
   */
  toTransform($event) {
    this.navCtrl.push('student-transfer-page', this.item);
  }

  /*
   * 
   * Remove group by group id in group list
   * 
   */
  removeGroup(groupId, event) {
    var result = this.groupList.filter((item)=> {
      return item.groupId !== groupId;
    });
    this.showConfirm(result);
  }

  /*
   * 
   * Show the alert for delete remove group.
   * 
   */
  showConfirm(result: any) {
    let confirm = this.alertCtrl.create({
      title: 'Leave Group?',
      message: 'Remove student from this group?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.groupList = result;
            this.groupNote = this.getJsonLength(result) <= 1 ? 'Current Group' : 'Current Groups';
            this.groupNoNote = this.getJsonLength(result);
          }
        }
      ]
    });
    confirm.present();
  }

  /*
   * 
   * get JSON length.
   * 
   */
  getJsonLength(jsonData: any) {
    let jsonLength = 0;
    for (let item in jsonData) {
      jsonLength++;
      item = item + 1;
    }
    return jsonLength;
  }

  /*
   * 
   * Go to contactor edit page
   * 
   */
  toContactor($event,contact) {
    this.navCtrl.push('contact-information-page', contact.contactName);
  }

  /*
   * 
   * Click E-mail button for sending E-mail
   * 
   */
  email($event,contact) {
    $event.stopPropagation();
    window.location.href = "mailto:MaryWalker@gmail.com";
  }

  /*
   * 
   * Send a phone call 
   * 
   */
  tel($event,contact) {
    $event.stopPropagation();
    window.location.href = "tel:6123336783";
  }
}
