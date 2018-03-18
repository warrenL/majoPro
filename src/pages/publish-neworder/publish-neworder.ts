import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PublishNeworderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'publish-neworder-page'
})
@Component({
  selector: 'page-publish-neworder',
  templateUrl: 'publish-neworder.html',
})
export class PublishNeworderPage {
  name: string;
  tel: string;
  addDetail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishNeworderPage');
  }

  showOption(event) {

  }

  confirmPublish(event) {
    this.navCtrl.pop({animation: 'md-transition', direction: 'back'});
  }

}
