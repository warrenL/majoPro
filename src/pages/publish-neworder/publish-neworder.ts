import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RepareService } from '../../provider/service/RepareService';

/**
 * Generated class for the PublishNeworderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'publish-neworder-page'
})
@Component({
  selector: 'page-publish-neworder',
  templateUrl: 'publish-neworder.html',
})
export class PublishNeworderPage {
  name: string;
  tel: string;
  addr1: string;
  addr2: string;
  addr3: string;
  addr4: string;
  addDetail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public repareService: RepareService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishNeworderPage');
  }

  showOption(event) {

  }

  confirmPublish(event) {
    // this.repareService.repareOrderEdit("","1",this.addr1, this.addr2, this.addr3, this.addr4, 
    // this.addDetail, this.tel, this.name).then((value) => {
      this.navCtrl.pop({animation: 'md-transition', direction: 'back'});
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

}
