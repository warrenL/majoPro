import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * The controller class for communications page.
 *
 */
@IonicPage({
  name: 'communications-page'
})
@Component({
  selector: 'page-communications',
  templateUrl: 'communications.html',
})
export class CommunicationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
