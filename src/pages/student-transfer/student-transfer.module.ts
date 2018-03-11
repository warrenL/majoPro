import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentTransferPage } from './student-transfer';

@NgModule({
  declarations: [
    StudentTransferPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentTransferPage),
  ],
})

export class StudentTransferPageModule {
  
}
