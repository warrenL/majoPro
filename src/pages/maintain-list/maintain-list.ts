import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintainListPage');
  }

  chooseMaintainer(maintainerName: string, event) {
    let confirm = this.alertCtrl.create({
      title: '',
      message: '是否选择【余师傅】上门服务',
      buttons: [
        {
          text: '是',
          handler: () => {
            console.log('agree clicked');
          }
        },
        {
          text: '否',
          handler: () => {
            console.log('deagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  resume(maintainerName: string, event) {
    this.navCtrl.push('resume-page', null, {animation: 'md-transition', direction: 'forward'});
  }
}
