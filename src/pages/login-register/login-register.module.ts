import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginRegisterPage } from './login-register';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    LoginRegisterPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(LoginRegisterPage)
  ],
})

export class LoginRegisterPageModule {}
