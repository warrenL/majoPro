import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaintainerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'maintainer-page'
})

@Component({
  selector: 'page-maintainer',
  templateUrl: 'maintainer.html',
})

export class MaintainerPage {
  top_segment: string = 'top_0';
  publishAllOrder = [
    {orderId:"8150715185029326699", orderName:"漆兵", orderType:"有一台麻将机需要找人维修", address: "湖北省 武汉市 东西湖区 金银湖街道", 
     detailAddress:"**********", tel:"186****2466", publishDate:"2017.5.6 13:25", isTop:"true", status: "已上架"},
    {orderId:"8150715185029326699", orderName:"漆兵", orderType:"有一台麻将机需要找人维修", address: "湖北省 武汉市 东西湖区 金银湖街道", 
    detailAddress:"**********", tel:"186****2466", publishDate:"2017.5.6 13:25", isTop:"true", status: "已上架"},
    {orderId:"8150715185029326699", orderName:"漆兵", orderType:"有一台麻将机需要找人维修", address: "湖北省 武汉市 东西湖区 金银湖街道", 
    detailAddress:"**********", tel:"186****2466", publishDate:"2017.5.6 13:25", isTop:"true", status: "已上架"}
  ];

  applyingAllOrder = [
    {orderId:"8150715185029326699", orderName:"漆兵", orderType:"有一台麻将机需要找人维修", address: "湖北省 武汉市 东西湖区 金银湖街道", 
     detailAddress:"**********", tel:"186****2466", publishDate:"2017.5.6 13:25", isTop:"true", status: "已上架", applyingDate:"2017.5.7 13:25"},
    {orderId:"8150715185029326699", orderName:"漆兵", orderType:"有一台麻将机需要找人维修", address: "湖北省 武汉市 东西湖区 金银湖街道", 
    detailAddress:"**********", tel:"186****2466", publishDate:"2017.5.6 13:25", isTop:"true", status: "已上架", applyingDate:"2017.5.7 13:25"},
    {orderId:"8150715185029326699", orderName:"漆兵", orderType:"有一台麻将机需要找人维修", address: "湖北省 武汉市 东西湖区 金银湖街道", 
    detailAddress:"**********", tel:"186****2466", publishDate:"2017.5.6 13:25", isTop:"true", status: "已上架", applyingDate:"2017.5.7 13:25"}
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

  sendResume(event) {

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
}
