import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainBoardPage } from './main-board';

@NgModule({
  declarations: [
    MainBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(MainBoardPage),
  ],
})
export class MainBoardPageModule {}
