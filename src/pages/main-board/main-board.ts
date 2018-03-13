import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainBoardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'main-board-page'
})
@Component({
  selector: 'page-main-board',
  templateUrl: 'main-board.html',
})
export class MainBoardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainBoardPage');
  }

  signToday(event) {

  }

  logout(event) {

  }

  needInstallMajo(event) {
    this.navCtrl.push('machine-maintain-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  weInstallMajo(event) {

  }

  topTen(event) {

  }

  adArea(event) {

  }

  mall(event) {

  }

  contcatUs(event) {

  }
}
