import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupCalendarPage } from './group-calendar';
import { PipesModule } from '../../pipes/pipes.module';
import { NgCalendarModule } from 'ionic2-calendar';

/**
 * The module class used to declare group calendar page.
 *
 */
@NgModule({
  declarations: [
    GroupCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupCalendarPage),
    NgCalendarModule,
    PipesModule
  ],
})
export class GroupCalendarPageModule {}
