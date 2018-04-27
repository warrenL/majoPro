import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../provider/service/UserService';

/**
 * Generated class for the ChongzhiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'chongzhi-page'
})
@Component({
  selector: 'page-chongzhi',
  templateUrl: 'chongzhi.html',
})
export class ChongzhiPage {

  tradeNo: string = '';
  amount: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    this.userService.chargeStatus(this.tradeNo).then((value) => {
      
    }).catch((error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChongzhiPage');
  }

  chongzhi(event) {
    this.userService.charge(this.amount).then((value) => {
      
    }).catch((error) => {
      console.log(error);
    });
  }
}
