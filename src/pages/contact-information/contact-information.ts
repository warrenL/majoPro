import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Contact information page for edit contact information 
 * for current selected student
 */

@IonicPage({
  name: 'contact-information-page',
  segment: 'contact-information',
  priority: 'high'
})
@Component({
  selector: 'page-contact-information',
  templateUrl: 'contact-information.html',
})
export class ContactInformationPage {

  public contactName: string;
  relationshipList: { "name": string; "id": number; }[];
  emailList: { "email": string;  "id": number; }[];
  phoneList: { "phone": string; "type": string;  "id": number; "phoneNumber": string}[];
  relationshipNote: number;
  emailNote: number;
  phoneNote: number;

  /*
   * 
   * constuctor
   * 
   */
  constructor( public navCtrl: NavController, 
               public navParams: NavParams, 
               public alertCtrl: AlertController,
               private storage: Storage ) {
    // Serialize mock up data
    this.contactName = navParams['data'];
    let relationShipData = [
      {"name": "Mother", "id": 1}
    ];
    let emailData = [
      {"email": "MaryWalker@gmail.com", "id": 1}
    ];
    let phoneData = [
      {"phone": "(612) 333-6783", "type": "Home", "id": 1, "phoneNumber": "6123336783"},
      {"phone": "(773) 123-1223", "type": "Mobile", "id": 2 ,"phoneNumber": "7731231221"}
    ];
    storage.set('relationShipData', JSON.stringify(relationShipData));
    storage.get('relationShipData').then((data) => {
      this.relationshipList = JSON.parse(data);
    });
    storage.set('emailData', JSON.stringify(emailData));
    storage.get('emailData').then((data) => {
      this.emailList = JSON.parse(data);
    });
    storage.set('phoneData', JSON.stringify(phoneData));
    storage.get('phoneData').then((data) => {
      this.phoneList = JSON.parse(data);
    });

    this.relationshipNote = this.getJsonLength(relationShipData);
    this.emailNote = this.getJsonLength(emailData);
    this.phoneNote = this.getJsonLength(phoneData);
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
   * Show delete information alert include: relationship, email, phone
   * 
   */
  showConfirm(result: any, title: string, message: string, type: string) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'OK',
          handler: () => {
            if (type == "relationship") {
              this.relationshipList = result;
              this.relationshipNote = this.getJsonLength(result);
            } else if (type == "email") {
              this.emailList = result;
              this.emailNote = this.getJsonLength(result);
            } else if (type == "phone") {
              this.phoneList = result;
              this.phoneNote = this.getJsonLength(result);
            } else if (type == "contactDel") {
              this.navCtrl.pop({direction: 'forward'});
            }
          }
        }
      ]
    });
    confirm.present();
  }

  /*
   * 
   * Edit relation ship
   * 
   */
  editRelationship($event,relationship) {
    $event.stopPropagation();
  }

  /*
   * 
   * Delete relation ship
   * 
   */
  deleteRelationship($event,relationship) {
    $event.stopPropagation();
    var result = this.relationshipList.filter((item) => {
      return item.id !== relationship.id;
    });
    this.showConfirm(result, "Delete Relationship?", "Do you want to delete the relationship?", "relationship");
  }

  /*
   * 
   * Click E-mail item for sending E-mail
   * 
   */
  sendEmail($event,email) {
    $event.stopPropagation();
    window.location.href = "mailto:" + email.email;
  }

  /*
   * 
   * Edit E-mail information
   * 
   */
  editEmail($event,email) {
    $event.stopPropagation();
  }

  /*
   * 
   * Delete E-mail information
   * 
   */
  deleteEmail($event,email) {
    $event.stopPropagation();
    var result = this.emailList.filter((item) => {
      return item.id !== email.id;
    });
    this.showConfirm(result, "Delete Email Address?", "Do you want to delete the email address?", "email");
  }

  /*
   * 
   * Send a phone call 
   * 
   */
  telPhone($event,phone) {
    $event.stopPropagation();
    window.location.href = "tel:" + phone.phoneNumber;
  }

  /*
   * 
   * Edit phone number information
   * 
   */
  editPhone($event,phone) {
    $event.stopPropagation();
  }

  /*
   * 
   * Delete phone number information
   * 
   */
  deletePhone($event,phone) {
    $event.stopPropagation();
    var result = this.phoneList.filter((item) => {
      return item.id !== phone.id;
    });
    this.showConfirm(result, "Delete Phone Number?", "Do you want to delete the phone number?", "phone");
  }

  /*
   * 
   * Click delete contact for current seleted student
   * 
   */
  deleteContact($event) {
    $event.stopPropagation();
    this.showConfirm("", "Delete Contact?", "Do you want to delete the contact?", "contactDel");
  }
}
