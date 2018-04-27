import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyMessageService } from '../../provider/service/MyMessageService';

/**
 * Generated class for the MailboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'mailbox-page'
})
@Component({
  selector: 'page-mailbox',
  templateUrl: 'mailbox.html',
})
export class MailboxPage {

  myContent: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public myMessageService: MyMessageService) {
    this.myMessageService.getMyMessage().then((value) => {
        
    }).catch((error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailboxPage');
  }

  submit(event) {
    this.myMessageService.commitMyMessageContent(this.myContent).then((value) => {
        
    }).catch((error) => {
      console.log(error);
    });
  }
}
