import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishNeworderPage } from './publish-neworder';

@NgModule({
  declarations: [
    PublishNeworderPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishNeworderPage),
  ],
})
export class PublishNeworderPageModule {}
