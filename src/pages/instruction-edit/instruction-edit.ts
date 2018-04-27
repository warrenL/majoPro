import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrandService } from '../../provider/service/BrandService';

/**
 * Generated class for the InstructionEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'instruction-edit-page'
})
@Component({
  selector: 'page-instruction-edit',
  templateUrl: 'instruction-edit.html',
})
export class InstructionEditPage {
  editText: string = "";
  brandId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public brandService: BrandService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructionEditPage');
  }

  save(event) {
    this.brandService.updateBrand(this.editText, this.brandId).then((value) => {
      
    }).catch((error) => {
      console.log(error);
    });
  }
}
