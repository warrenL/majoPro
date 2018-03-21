import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthMaintainerPage } from './auth-maintainer';

@NgModule({
  declarations: [
    AuthMaintainerPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthMaintainerPage),
  ],
})
export class AuthMaintainerPageModule {}
