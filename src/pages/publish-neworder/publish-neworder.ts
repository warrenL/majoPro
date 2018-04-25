import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RepareService } from '../../provider/service/RepareService';
import { AddressItem } from '../../model/AddressItem';
import { AppConfig } from './../../app/app.config';
import { AlertController } from 'ionic-angular';

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
  orderType: string;

  cityColumns: any[];
  registerAddress: AddressItem;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public repareService: RepareService, public alertCtrl: AlertController) {
    // city json init
    this.cityColumns = AppConfig.getcityDataProvider();
    this.orderType = "有一台麻将机需要维修";
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('订单类型选择');

    alert.addInput({
      type: 'radio',
      label: '有一台麻将机需要维修',
      value: '有一台麻将机需要维修',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '购买一台新机器',
      value: '购买一台新机器',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: '购买一台旧机器',
      value: '购买一台旧机器',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: '租麻将机',
      value: '租麻将机',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: '安装麻将机或配件',
      value: '安装麻将机或配件',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.orderType = data;
      }
    });
    alert.present();
  }

  onLocationChange(event) {
    console.log("Selection location info: " + JSON.stringify(event));
    this.registerAddress = new AddressItem(event[0].text,event[1].text,event[2].text,"","");
    console.log(this.registerAddress);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishNeworderPage');
  }

  showOption(event) {
    this.showRadio();
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
