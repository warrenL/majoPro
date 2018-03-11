import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonsPage } from './lessons';

/**
 * The module class used to declare lessons page.
 *
 */
@NgModule({
  declarations: [
    LessonsPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonsPage),
  ],
})
export class LessonsPageModule {}
