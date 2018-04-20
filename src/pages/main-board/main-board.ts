import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CityDataProvider } from "../../providers/city-data/city-data";

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

  cityColumns: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public cityDataProvider: CityDataProvider) {

    this.cityColumns = this.cityDataProvider.cities;
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
    this.navCtrl.push('maintainer-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  topTen(event) {
    this.navCtrl.push('top-ten-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  adArea(event) {
    this.navCtrl.push('majo-ad-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  mall(event) {
    this.navCtrl.push('mall-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  contcatUs(event) {
    this.navCtrl.push('mailbox-page', null, {animation: 'md-transition', direction: 'forward'});
  }
}
