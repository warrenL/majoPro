import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RepareService } from '../../provider/service/RepareService';
import { AddressItem } from '../../model/AddressItem';
import { AppConfig } from './../../app/app.config';

/**
 * Generated class for the MachineMaintainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// https://github.com/schubertq/PhotosView

@IonicPage({
  name: 'machine-maintain-page'
})
@Component({
  selector: 'page-machine-maintain',
  templateUrl: 'machine-maintain.html',
})
export class MachineMaintainPage {

  addr1: string = "";
  addr2: string = "";
  addr3: string = "";
  addr4: string = "";

  cityColumns: any[];
  registerAddress: AddressItem;

  top_segment: string = 'top_0';
  publishAllOrder = [
    {orderId:"8150715185029326699", orderName:"漆兵", orderType:"有一台麻将机需要找人维修", address: "湖北省 武汉市 东西湖区 金银湖街道", 
     detailAddress:"**********", tel:"186****2466", publishDate:"2017.5.6 13:25", isTop:"true", status: "已上架"},
    {orderId:"8150715185029326699", orderName:"漆兵", orderType:"有一台麻将机需要找人维修", address: "湖北省 武汉市 东西湖区 金银湖街道", 
    detailAddress:"**********", tel:"186****2466", publishDate:"2017.5.6 13:25", isTop:"true", status: "已上架"},
    {orderId:"8150715185029326699", orderName:"漆兵", orderType:"有一台麻将机需要找人维修", address: "湖北省 武汉市 东西湖区 金银湖街道", 
    detailAddress:"**********", tel:"186****2466", publishDate:"2017.5.6 13:25", isTop:"true", status: "已上架"}
  ];
  selectFilterByDays: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public repareService: RepareService) {
    this.selectFilterByDays = false;
    // city json init
    this.cityColumns = AppConfig.getcityDataProvider();
    // get all the repare orders list
    this.repareService.repareOraders(new AddressItem(this.addr1, this.addr2, this.addr3, this.addr4,""), "0").then((value) => {
      
    }).catch((error) => {
      console.log(error);
    });
  }

  onLocationChange(event) {
    console.log("Selection location info: " + JSON.stringify(event));
    this.registerAddress = new AddressItem(event[0].text,event[1].text,event[2].text,"","");
    console.log(this.registerAddress);
  }

  segmentChanged(event) {
    if (event.value == "top_0") {
      // get all the repare orders list
      this.repareService.repareOraders(new AddressItem(this.addr1, this.addr2, this.addr3, this.addr4,""), "0").then((value) => {
      
      }).catch((error) => {
        console.log(error);
      });
    } else if (event.value == "top_1") {

    } else if (event.value == "top_2") {
      // get my orders list ordertype = 3 means my orders
      this.repareService.repareMyOrders("3").then((value) => {
            
      }).catch((error) => {
        console.log(error);
      });
    } else if (event.value == "top_3") {

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineMaintainPage');
  }

  updateSelectFilter() {
    console.log('Cucumbers new state:' + this.selectFilterByDays);
  }

  filterByArea(event) {
    // get orders list by address
    this.repareService.repareOraders(new AddressItem(this.addr1, this.addr2, this.addr3, this.addr4,""), "0").then((value) => {
          
    }).catch((error) => {
      console.log(error);
    });
  }

  sendToTop(event) {

  }

  selectMaintainer(event) {
    this.navCtrl.push('maintain-list-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  upToTop(event) {

  }

  refereshMyOrder(event) {

  }

  downFromTop(event) {

  }

  publishOrder(event) {
    console.log("publish Order.");
    this.navCtrl.push('publish-neworder-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  editInstruction(event) {
    console.log("instruction edit.");
    this.navCtrl.push('instruction-edit-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  myPublishOrders($event) {
    console.log("my publish order list.");
    this.navCtrl.push('publish-orderlist-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  chongzhi(event) {
    console.log("chongzhi.");
    this.navCtrl.push('chongzhi-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  mallSetting(event) {
    console.log("mall setting.");
    this.navCtrl.push('mall-setting-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  applyMaintainer(event) {
    console.log("apply maintainer.");
    this.navCtrl.push('auth-maintainer-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  myResume(event) {
    console.log("my Resume.");
    this.navCtrl.push('resume-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  systemMessage(event) {
    console.log("system Message.");
    this.navCtrl.push('system-message-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  mailBox(event) {
    console.log("mail box.");
    this.navCtrl.push('mailbox-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  fenxiang(event) {
    console.log("share code.");
    this.navCtrl.push('share-code-page', null, {animation: 'md-transition', direction: 'forward'});
  }
}
