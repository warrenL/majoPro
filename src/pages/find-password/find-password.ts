import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../provider/service/UserService';

/**
 * Generated class for the FindPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'find-password-page'
})
@Component({
  selector: 'page-find-password',
  templateUrl: 'find-password.html',
})
export class FindPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPasswordPage');
  }

  back($event) {
    this.navCtrl.pop({animation: 'md-transition', direction: 'back'});
  }

  getVerifyCode(event){
    // this.userService.SMS(phone, "1").then((value) => {
      
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  confirm(event) {
    console.log('confirm find password');
    // this.userService.resetPwd(phone, password, verifyCode).then((value) => {
      
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

}
