import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunicationsPage } from './communications';

/**
 * The module class used to declare communications page.
 *
 */
@NgModule({
  declarations: [
    CommunicationsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunicationsPage),
  ],
})
export class CommunicationsPageModule {}
