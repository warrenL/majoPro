import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopTenPage } from './top-ten';

@NgModule({
  declarations: [
    TopTenPage,
  ],
  imports: [
    IonicPageModule.forChild(TopTenPage),
  ],
})
export class TopTenPageModule {}
