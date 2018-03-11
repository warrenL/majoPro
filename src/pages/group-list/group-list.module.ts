import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupListPage } from './group-list';
import { MultiPickerModule } from 'ion-multi-picker';

/**
 * The module class used to declare group list page.
 *
 */
@NgModule({
  declarations: [
    GroupListPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupListPage),
    MultiPickerModule
  ],
})
export class GroupListPageModule {}
