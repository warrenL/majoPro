import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../provider/service/UserService';

/**
 * Generated class for the ShareCodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'share-code-page'
})
@Component({
  selector: 'page-share-code',
  templateUrl: 'share-code.html',
})
export class ShareCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    this.userService.getInvitationCode().then((value) => {
        
    }).catch((error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareCodePage');
  }

}
