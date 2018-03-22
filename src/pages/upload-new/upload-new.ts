import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UploadNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'upload-new-page'
})
@Component({
  selector: 'page-upload-new',
  templateUrl: 'upload-new.html',
})
export class UploadNewPage {
  images = [
    {big:"assets/twoways.png"},
    {big:"assets/twoways.png"},
    {big:"assets/twoways.png"},
    {big:"assets/twoways.png"},
    {big:"assets/twoways.png"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadNewPage');
  }

  goToViewLargePictureCtrl(event, statusImages) {
    // 如果photos-view是放在ion-card等组件内部
    // 如果ion-card和photos-view同时监听了click事件
    // 会出现冒泡
    // event.stopPropagation();

    var images: Array<string> = [];
    for (var i = 0; i < statusImages.length; ++i) {
      var image = statusImages[i];
      images.push(image.big);
    }
    // this.navCtrl.push(ViewLargePictureCtrl, {
    //   images: images
    // });
  }

}
