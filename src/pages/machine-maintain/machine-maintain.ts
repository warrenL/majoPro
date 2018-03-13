import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MachineMaintainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// https://github.com/schubertq/PhotosView

@IonicPage({
  name: 'machine-maintain-page'
})
@Component({
  selector: 'page-machine-maintain',
  templateUrl: 'machine-maintain.html',
})
export class MachineMaintainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineMaintainPage');
  }

}
