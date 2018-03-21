import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuthMaintainerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'auth-maintainer-page'
})
@Component({
  selector: 'page-auth-maintainer',
  templateUrl: 'auth-maintainer.html',
})
export class AuthMaintainerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthMaintainerPage');
  }

  nextStep(event) {
    console.log('next step.');
    this.navCtrl.push('authfinal-maintainer-page', null, {animation: 'md-transition', direction: 'forward'});
  }
}
