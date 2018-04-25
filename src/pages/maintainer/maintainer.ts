import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RepareService } from '../../provider/service/RepareService';
import { AddressItem } from '../../model/AddressItem';
import { AppConfig } from './../../app/app.config';

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

  cityColumns: any[];
  registerAddress: AddressItem;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public repareService: RepareService) {
    this.selectFilterByDays = false;
    // city json init
    this.cityColumns = AppConfig.getcityDataProvider();
    // get all the repare orders list
    this.repareService.repareOraders(new AddressItem("", "", "", "", ""), "0").then((value) => {
      
    }).catch((error) => {
      console.log(error);
    });
  }

  onLocationChange(event) {
    console.log("Selection location info: " + JSON.stringify(event));
    this.registerAddress = new AddressItem(event[0].text,event[1].text,event[2].text,"","");
    console.log(this.registerAddress);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineMaintainPage');
  }

  segmentChanged(event) {
    if (event.value == "top_0") {
      // get all the repare orders list
      this.repareService.repareOraders(new AddressItem("", "", "", "", ""), "0").then((value) => {
        
      }).catch((error) => {
        console.log(error);
      });
    } else if (event.value == "top_1") {
      this.repareService.repareMyOrders("1").then((value) => {
            
      }).catch((error) => {
        console.log(error);
      });
    } else if (event.value == "top_2") {
      // get my orders list ordertype = 3 means my orders
      this.repareService.repareMyOrders("2").then((value) => {
            
      }).catch((error) => {
        console.log(error);
      });
    } else if (event.value == "top_3") {

    }
  }

  updateSelectFilter() {
    console.log('Cucumbers new state:' + this.selectFilterByDays);
  }

  filterByArea(event) {
    // get orders list by address
    this.repareService.repareOraders(this.registerAddress, "0").then((value) => {
              
    }).catch((error) => {
      console.log(error);
    });
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
