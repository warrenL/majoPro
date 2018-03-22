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
    {big:"https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1521733197&di=a037aab61bcb3e989fd692e81723a0f2&size=w120&quality=100&imgtype=3&src=http%3A%2F%2Fbos.pgzs.com%2Fitunesimg%2F382201985%2F85%2F010300782f3a45f289fa04f4ba1c96ca_512x512bb.jpg"},
    {big:"https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1521733197&di=a037aab61bcb3e989fd692e81723a0f2&size=w120&quality=100&imgtype=3&src=http%3A%2F%2Fbos.pgzs.com%2Fitunesimg%2F382201985%2F85%2F010300782f3a45f289fa04f4ba1c96ca_512x512bb.jpg"},
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
