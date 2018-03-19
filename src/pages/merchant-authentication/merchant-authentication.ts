import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MerchantAuthenticationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'merchant-authentication-page'
})
@Component({
  selector: 'page-merchant-authentication',
  templateUrl: 'merchant-authentication.html',
})
export class MerchantAuthenticationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MerchantAuthenticationPage');
  }

}
