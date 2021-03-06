import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'mall-page'
})
@Component({
  selector: 'page-mall',
  templateUrl: 'mall.html',
})
export class MallPage {

  top_segment: string = 'top_0';
  sub_top_segment: string = 'sub_top_0';

  mallLists = [
    {name:"雀景", isapply:"true", squenence:"1", mallLink:"quejing.taobao.com", mallAddress:"湖北省武汉市东西湖区金银湖街道", applyMaintainer:"3", good:"556", bad:"50"},
    {name:"雀景", isapply:"true", squenence:"2", mallLink:"quejing.taobao.com", mallAddress:"湖北省武汉市东西湖区金银湖街道", applyMaintainer:"2", good:"456", bad:"50"},
    {name:"雀景", isapply:"true", squenence:"3", mallLink:"quejing.taobao.com", mallAddress:"湖北省武汉市东西湖区金银湖街道", applyMaintainer:"1", good:"300", bad:"50"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MallPage');
  }

  applyMaintainer(event) {

  }

  uploadNew(event) {
    
  }

  submit(event) {

  }

  authentication(event) {
    this.navCtrl.push('merchant-authentication-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  gotoTobao(mallLink: string, event) {
    window.open("https://"+mallLink, '_blank', 'location=yes');
  }

  // 申请中的区域售后人员列表
  listemployee(event) {
    this.navCtrl.push('applying-employees-page', null, {animation: 'md-transition', direction: 'forward'});
  }
}
