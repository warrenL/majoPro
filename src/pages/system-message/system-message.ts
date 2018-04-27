import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticeService } from '../../provider/service/NoticeService';

/**
 * Generated class for the SystemMessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'system-message-page'
})
@Component({
  selector: 'page-system-message',
  templateUrl: 'system-message.html',
})
export class SystemMessagePage {
  noticeId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public noticeService: NoticeService) {
    this.noticeService.getAllMessageList().then((value) => {
        
    }).catch((error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemMessagePage');
  }

  DetailMessageContent(event) {
    this.noticeService.getMessageContent(this.noticeId).then((value) => {
        
    }).catch((error) => {
      console.log(error);
    });
  }

}
