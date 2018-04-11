import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../provider/service/UserService';

/**
 * Generated class for the LoginRegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'login-register-page'
})
@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {
  username: string = '';
  password: string = '';

  authentication: string = '登录';

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

  segmentChanged (event) {
    console.log('Change segment');
  }

  register(event) {
    // this.userService.regist(name, phone, password, verifyCode, 
    //   inviteCode, addr1, addr2, addr3, addr4).then((value) => {
    //   this.authentication = '登录';
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  getVerifyCode(event) {
    // this.userService.SMS(phone, "1").then((value) => {
      
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  back(event) {
    this.navCtrl.pop({animation: 'md-transition', direction: 'back'});
  }

  login(event) {
    this.userService.login(this.username, this.password).then((value) => {
      this.navCtrl.push('main-board-page', null, {animation: 'md-transition', direction: 'forward'});
    }).catch((error) => {
      console.log(error);
    });
    
  }

  findPassword(event) {
    this.navCtrl.push('find-password-page', null, {animation: 'md-transition', direction: 'forward'});
  }

}
