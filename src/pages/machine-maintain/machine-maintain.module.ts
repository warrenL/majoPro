import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineMaintainPage } from './machine-maintain';

@NgModule({
  declarations: [
    MachineMaintainPage,
  ],
  imports: [
    IonicPageModule.forChild(MachineMaintainPage),
  ],
})
export class MachineMaintainPageModule {}
