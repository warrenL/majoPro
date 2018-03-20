import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstructionEditPage } from './instruction-edit';

@NgModule({
  declarations: [
    InstructionEditPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructionEditPage),
  ],
})
export class InstructionEditPageModule {}
