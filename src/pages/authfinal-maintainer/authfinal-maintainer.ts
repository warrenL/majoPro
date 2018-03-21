import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuthfinalMaintainerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'authfinal-maintainer-page'
})
@Component({
  selector: 'page-authfinal-maintainer',
  templateUrl: 'authfinal-maintainer.html',
})
export class AuthfinalMaintainerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthfinalMaintainerPage');
  }

}
