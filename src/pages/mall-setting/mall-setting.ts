import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MallSettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'mall-setting-page'
})
@Component({
  selector: 'page-mall-setting',
  templateUrl: 'mall-setting.html',
})
export class MallSettingPage {

  sub_top_segment: string = 'sub_top_0';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MallSettingPage');
  }

}
