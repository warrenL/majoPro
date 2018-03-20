import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishOrderlistPage } from './publish-orderlist';

@NgModule({
  declarations: [
    PublishOrderlistPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishOrderlistPage),
  ],
})
export class PublishOrderlistPageModule {}
