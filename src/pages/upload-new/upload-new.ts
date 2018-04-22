import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

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
  addLinkString: string = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524416602633&di=ebfd61f25c72d202ecaef6a80b1a35ed&imgtype=0&src=http%3A%2F%2Fcdn3.freepik.com%2Fimage%2Fth%2F318-38775.jpg";
  images = [
    {big:"https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1521733197&di=a037aab61bcb3e989fd692e81723a0f2&size=w120&quality=100&imgtype=3&src=http%3A%2F%2Fbos.pgzs.com%2Fitunesimg%2F382201985%2F85%2F010300782f3a45f289fa04f4ba1c96ca_512x512bb.jpg"},
    {big:"https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1521733197&di=a037aab61bcb3e989fd692e81723a0f2&size=w120&quality=100&imgtype=3&src=http%3A%2F%2Fbos.pgzs.com%2Fitunesimg%2F382201985%2F85%2F010300782f3a45f289fa04f4ba1c96ca_512x512bb.jpg"},
    {big: this.addLinkString}
  ];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private camera: Camera,
              private transfer: FileTransfer,
              private file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadNewPage');
  }

  addNewPic($event,imgString: string) {
    if (this.addLinkString = imgString) {
      this.takePicture(this.camera.PictureSourceType.CAMERA);
    }
  }

  /*
  从图库中获取图片 this.camera.PictureSourceType.PHOTOLIBRARY
  从拍照获取图片 this.camera.PictureSourceType.CAMERA
  */
  takePicture(sourceType) {
    //定义相机参数
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: true,
      correctOrientation: true,
  //     quality: 100,
  // destinationType: this.camera.DestinationType.DATA_URL,
  // encodingType: this.camera.EncodingType.JPEG,
  // mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imgPath) => {
      console.log("get picture success as:"+imgPath);
      // this.doUpload(imgPath);
    });
  }

  doUpload(filePath) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',        // input type = file
      fileName: 'xxx.jpg',    //上传图片的名字
      mimeType: 'image/jpeg', //上传图片的mime类型
      params: {
        name:'',
        age:28
      },
      headers:{}
    };
    var api = '上传图片的地址';
    fileTransfer.upload(filePath, api, options).then((data) => {
      // success
      alert(JSON.stringify(data));
    },(err) => {
      //error
      alert(JSON.stringify(err));
    });
  }

  goToViewLargePictureCtrl(event, statusImages) {
    // 如果photos-view是放在ion-card等组件内部
    // 如果ion-card和photos-view同时监听了click事件
    // 会出现冒泡
    event.stopPropagation();

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
