import { Component, trigger, style, transition, animate, keyframes } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * The controller class for splash screen page.
 *
 */
@IonicPage({
  name: 'splash-screen-page',
  segment: 'splash-screen',
  priority: 'high'
})
@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html'
})
export class SplashScreenPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.swipeEnable(false);
  }

  sign(event) {
    this.navCtrl.push('login-register-page', null, {animation: 'md-transition', direction: 'forward'});
  }
}
