import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * The controller class for lessons page.
 *
 */
@IonicPage({
  name: 'lessons-page'
})
@Component({
  selector: 'page-lessons',
  templateUrl: 'lessons.html',
})
export class LessonsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
