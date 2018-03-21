import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectFilterByDays = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineMaintainPage');
  }

  updateSelectFilter() {
    console.log('Cucumbers new state:' + this.selectFilterByDays);
  }

  filterByArea(event) {

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
