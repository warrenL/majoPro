import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPasswordPage');
  }

  back($event) {
    this.navCtrl.pop({animation: 'md-transition', direction: 'back'});
  }

  confirm(event) {
    console.log('confirm find password');
  }

}
