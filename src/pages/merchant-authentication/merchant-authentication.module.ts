import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantAuthenticationPage } from './merchant-authentication';

@NgModule({
  declarations: [
    MerchantAuthenticationPage,
  ],
  imports: [
    IonicPageModule.forChild(MerchantAuthenticationPage),
  ],
})
export class MerchantAuthenticationPageModule {}
