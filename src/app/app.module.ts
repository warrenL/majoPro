import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { StatusBar } from '@ionic-native/status-bar';
import { ClassroomAPP } from './app.component';
import { GlobalIonicErrorHandler } from '../exception/GlobalIonicErrorHandler';
import { MultiPickerModule } from 'ion-multi-picker';
import { GlobalProvider } from '../provider/GlobalProvider';
import { DBProvider } from '../provider/db/base/DBProvider';
import { WebsqlDBProvider } from '../provider/db/base/WebsqlDBProvider';
import { GroupItemRepoProvider } from '../provider/db/GroupItemRepoProvider';
import { HttpProvider } from '../provider/http/base/HttpProvider';
import { UserHttpProvider } from '../provider/http/UserHttpProvider';
import { GroupItemHttpProvider } from '../provider/http/GroupItemHttpProvider';
import { UserService } from '../provider/service/UserService';
import { GroupItemService } from '../provider/service/GroupItemService';
import { UploadService } from '../provider/service/UploadService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { PipesModule } from '../pipes/pipes.module';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [ClassroomAPP],
  imports: [
    // System Module
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgCalendarModule,
    IonicModule.forRoot(ClassroomAPP, {preloadModules: true, mode: "md", backButtonText: '', tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['websql']
    }),
    // Custom Module
    PipesModule,
    MultiPickerModule //Import MultiPickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ClassroomAPP],
  providers: [
    // System Provider
    StatusBar,
    SplashScreen,
    File,
    SQLitePorter,
    Keyboard,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: GlobalIonicErrorHandler},
    // Custom Provider
    GlobalProvider,
    {provide: DBProvider, useClass: WebsqlDBProvider},
    GroupItemRepoProvider,
    HttpProvider,
    GroupItemHttpProvider,
    UserHttpProvider,
    GroupItemService,
    UploadService,
    UserService
  ]
})
export class AppModule {
}
