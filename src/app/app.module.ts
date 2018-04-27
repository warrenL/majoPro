import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { StatusBar } from '@ionic-native/status-bar';
import { MultiPickerModule } from 'ion-multi-picker';
import { ClassroomAPP } from './app.component';
import { GlobalIonicErrorHandler } from '../exception/GlobalIonicErrorHandler';
import { GlobalProvider } from '../provider/GlobalProvider';
import { DBProvider } from '../provider/db/base/DBProvider';
import { WebsqlDBProvider } from '../provider/db/base/WebsqlDBProvider';
import { GroupItemRepoProvider } from '../provider/db/GroupItemRepoProvider';
import { HttpProvider } from '../provider/http/base/HttpProvider';
import { UserHttpProvider } from '../provider/http/UserHttpProvider';
import { GroupItemHttpProvider } from '../provider/http/GroupItemHttpProvider';
import { RepareHttpProvider } from '../provider/http/RepareHttpProvider';
import { UserService } from '../provider/service/UserService';
import { GroupItemService } from '../provider/service/GroupItemService';
import { RepareService } from '../provider/service/RepareService';
import { PipesModule } from '../pipes/pipes.module';
import { CityDataProvider } from '../providers/city-data/city-data';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { BrandService } from '../provider/service/BrandService';
import { BrandHttpProvider } from '../provider/http/BrandHttpProvider';
import { AdvService } from '../provider/service/AdvService';
import { AdvHttpProvider } from '../provider/http/AdvHttpProvider';
import { NoticeHttpProvider } from '../provider/http/NoticeHttpProvider';
import { NoticeService } from '../provider/service/NoticeService';
import { MyMessageHttpProvider } from '../provider/http/MyMessageHttpProvider';
import { MyMessageService } from '../provider/service/MyMessageService';

@NgModule({
  declarations: [ClassroomAPP],
  imports: [
    // System Module
    BrowserModule,
    MultiPickerModule,
    HttpModule,
    IonicModule.forRoot(ClassroomAPP, {preloadModules: true, mode:"ios", backButtonText: '', tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['websql']
    }),
    // Custom Module
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ClassroomAPP],
  providers: [
    // System Provider
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    Camera,
    SQLitePorter,
    {provide: ErrorHandler, useClass: GlobalIonicErrorHandler},
    // Custom Provider
    GlobalProvider,
    {provide: DBProvider, useClass: WebsqlDBProvider},
    GroupItemRepoProvider,
    HttpProvider,
    GroupItemHttpProvider,
    UserHttpProvider,
    RepareHttpProvider,
    BrandHttpProvider,
    AdvHttpProvider,
    NoticeHttpProvider,
    MyMessageHttpProvider,
    GroupItemService,
    RepareService,
    BrandService,
    UserService,
    AdvService,
    NoticeService,
    MyMessageService,
    CityDataProvider
  ]
})
export class AppModule {
}
