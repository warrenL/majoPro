import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiPickerModule } from 'ion-multi-picker';
import { DashboardPage } from './dashboard';

/**
 * The module class used to declare dashboard page.
 *
 */
@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    MultiPickerModule
  ],
})
export class DashboardPageModule {
}
