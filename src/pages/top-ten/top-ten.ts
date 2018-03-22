import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopTenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:"top-ten-page"
})
@Component({
  selector: 'page-top-ten',
  templateUrl: 'top-ten.html',
})
export class TopTenPage {
  top_segment: string = 'top_0';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopTenPage');
  }

  uploadNew(event) {
    console.log("upload new.");
    this.navCtrl.push('upload-new-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  vote(event) {
    console.log("vote.");
    this.navCtrl.push('merchant-authentication-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  authentication(event) {
    console.log("authentication.");
    this.navCtrl.push('merchant-authentication-page', null, {animation: 'md-transition', direction: 'forward'});
  }

  RefineInstruction(event) {
    console.log("instruction edit.");
    this.navCtrl.push('instruction-edit-page', null, {animation: 'md-transition', direction: 'forward'});
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
