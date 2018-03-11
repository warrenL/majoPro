import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

  segmentChanged (event) {
    console.log('Change segment');
  }

  back($event) {
    this.navCtrl.pop({animation: 'md-transition', direction: 'back'});
  }

  login($event) {
    this.navCtrl.push('main-board-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  findPassword(event) {
    this.navCtrl.push('find-password-page', null, {animation: 'md-transition', direction: 'forward'});
  }

}
