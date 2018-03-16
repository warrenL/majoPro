import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaintainListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'maintain-list-page'
})
@Component({
  selector: 'page-maintain-list',
  templateUrl: 'maintain-list.html',
})
export class MaintainListPage {

  maintainerList = [
    {name:"余师傅", role:"诚信技术员", hotpoint:"活跃度30+", ordercount:"20"},
    {name:"余师傅", role:"诚信技术员", hotpoint:"活跃度30+", ordercount:"20"},
    {name:"余师傅", role:"诚信技术员", hotpoint:"活跃度30+", ordercount:"20"},
    {name:"余师傅", role:"诚信技术员", hotpoint:"活跃度30+", ordercount:"20"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintainListPage');
  }

  chooseMaintainer(event) {

  }
}
