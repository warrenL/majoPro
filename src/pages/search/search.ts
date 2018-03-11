import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * The controller class for search page.
 *
 */
@IonicPage({
  name: 'search-page'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  slides = ['1','2','3','4','5','6','7'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  active(i) {
    
  }
}