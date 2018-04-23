import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineMaintainPage } from './machine-maintain';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    MachineMaintainPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(MachineMaintainPage)
  ],
})
export class MachineMaintainPageModule {}
