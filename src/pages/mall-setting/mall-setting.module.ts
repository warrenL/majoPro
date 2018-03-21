import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallSettingPage } from './mall-setting';

@NgModule({
  declarations: [
    MallSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(MallSettingPage),
  ],
})
export class MallSettingPageModule {}
