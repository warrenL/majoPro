import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishNeworderPage } from './publish-neworder';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    PublishNeworderPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(PublishNeworderPage)
  ],
})
export class PublishNeworderPageModule {}
