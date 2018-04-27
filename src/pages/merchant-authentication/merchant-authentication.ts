import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrandService } from '../../provider/service/BrandService';

/**
 * Generated class for the MerchantAuthenticationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'merchant-authentication-page'
})
@Component({
  selector: 'page-merchant-authentication',
  templateUrl: 'merchant-authentication.html',
})
export class MerchantAuthenticationPage {
  idCard1: string;
  idCard2: string;
  brandmark: string;
  brandId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public brandService: BrandService) {
  }

  submit(event) {
    this.brandService.uploadNewBrandAuth(this.idCard1, this.idCard2, this.brandmark, this.brandId).then((value) => {
        
    }).catch((error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MerchantAuthenticationPage');
  }

}
