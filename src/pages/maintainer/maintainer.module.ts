import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintainerPage } from './maintainer';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    MaintainerPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(MaintainerPage)
  ],
})
export class MaintainerPageModule {}
