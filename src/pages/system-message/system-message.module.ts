import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SystemMessagePage } from './system-message';

@NgModule({
  declarations: [
    SystemMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(SystemMessagePage),
  ],
})
export class SystemMessagePageModule {}
