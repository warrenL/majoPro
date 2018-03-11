import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactInformationPage } from './contact-information';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ContactInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactInformationPage),
    PipesModule
  ],
})

export class ContactInformationPageModule {
  
}
