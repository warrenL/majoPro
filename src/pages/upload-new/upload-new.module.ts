import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadNewPage } from './upload-new';

@NgModule({
  declarations: [
    UploadNewPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadNewPage),
  ],
})
export class UploadNewPageModule {}
