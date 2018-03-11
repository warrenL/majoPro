import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * The controller class for profile page.
 *
 */
@IonicPage({
  name: 'profile-page'
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
