import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintainerPage } from './maintainer';

@NgModule({
  declarations: [
    MaintainerPage,
  ],
  imports: [
    IonicPageModule.forChild(MaintainerPage),
  ],
})
export class MaintainerPageModule {}
