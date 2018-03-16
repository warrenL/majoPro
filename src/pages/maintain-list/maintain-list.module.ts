import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintainListPage } from './maintain-list';

@NgModule({
  declarations: [
    MaintainListPage,
  ],
  imports: [
    IonicPageModule.forChild(MaintainListPage),
  ],
})
export class MaintainListPageModule {}
