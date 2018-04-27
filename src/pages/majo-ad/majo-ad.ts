import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvService } from '../../provider/service/AdvService';

/**
 * Generated class for the MajoAdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'majo-ad-page'
})
@Component({
  selector: 'page-majo-ad',
  templateUrl: 'majo-ad.html',
})
export class MajoAdPage {

  top_segment: string = 'top_0';
  images = [
    {big:"https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1521733197&di=a037aab61bcb3e989fd692e81723a0f2&size=w120&quality=100&imgtype=3&src=http%3A%2F%2Fbos.pgzs.com%2Fitunesimg%2F382201985%2F85%2F010300782f3a45f289fa04f4ba1c96ca_512x512bb.jpg"},
    {big:"https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1521733197&di=a037aab61bcb3e989fd692e81723a0f2&size=w120&quality=100&imgtype=3&src=http%3A%2F%2Fbos.pgzs.com%2Fitunesimg%2F382201985%2F85%2F010300782f3a45f289fa04f4ba1c96ca_512x512bb.jpg"},
  ];
  majoLists = [
    {name:"雀康"},
    {name:"雀友"},
  ];
  majoLabels = [
    {name:"【区域经销商】"},
    {name:"【省级批发商】"},
    {name:"【主机厂家】"},
    {name:"【底脚厂家】"},
    {name:"【边框厂家】"},
    {name:"【取暖器厂家】"},
    {name:"【芯片厂家】"},
    {name:"【螺丝厂家】"},
    {name:"【磁铁厂家】"},
    {name:"【轴承厂家】"},
    {name:"【塑料件厂家】"},
    {name:"【麻将牌厂家】"},
    {name:"【区域经销商】"},
    {name:"【操作盘厂家】"},
  ];

  myMajoLists = [
    {name:"浙江杭州雀康机电有限公司",amount:"15",level:"1",status:"下架"},
    {name:"浙江杭州雀友机电有限公司",amount:"15",level:"2",status:"下架"},
  ];

  keyword: string = '';

  advert: string;
  company: string;
  price: string;
  adTag: string;
  imagesList: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public advService: AdvService) {
    this.advService.getAllAd('').then((value) => {
        
    }).catch((error) => {
      console.log(error);
    });
  }

  segmentChanged(event) {
    if (event.value == "top_0") {
      // get all the repare orders list
      this.advService.getAllAd(this.keyword).then((value) => {
        
      }).catch((error) => {
        console.log(error);
      });
    } else if (event.value == "top_1") {
      
    } else if (event.value == "top_2") {
      this.advService.getMyAd(this.keyword).then((value) => {
        
      }).catch((error) => {
        console.log(error);
      });
    } else if (event.value == "top_3") {

    }
  }

  publish(event) {
    this.advService.publishAd(this.advert, this.company, this.price, this.adTag, this.imagesList).then((value) => {
        
    }).catch((error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MajoAdPage');
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
