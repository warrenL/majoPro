import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../provider/service/UserService';
import { UploadService } from '../provider/service/UploadService';

@Component({
  templateUrl: 'app.html'
})
export class ClassroomAPP {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'splash-screen-page';

  pages: Array<{ title: string; component: string; icon: string }>;

  constructor(public platform: Platform,
              public splashScreen: SplashScreen,
              public statusBar: StatusBar,
              public userService: UserService,
              public uploadService: UploadService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Dashboard', component: 'dashboard-page', icon: 'assets/dashboard/home.png'},
      {title: 'Attendance', component: 'tabs-page', icon: 'assets/dashboard/attendance.png'},
      {title: 'Lessons', component: 'lessons-page', icon: 'assets/dashboard/lessons.png'},
      {title: 'Communications', component: 'communications-page', icon: 'assets/dashboard/communications.png'}
    ];
  }

  initializeApp() {
    this.uploadService.startUpload();

    let EventUtil = {
      addHandler: function (element, type, handler) {
        if (element.addEventListener) {
          element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
          element.attachEvent('on' + type, handler);
        } else {
          element['on' + type] = handler;
        }
      },
      removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
          element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
          element.detachEvent('on' + type, handler);
        } else {
          element['on' + type] = null;
        }
      }
    };

    let that = this;
    EventUtil.addHandler(window, 'online', function () {
      that.uploadService.startUpload();
    });

    this.userService.isLogin().then(isLogin => {
      if (isLogin) {
        this.rootPage = 'dashboard-page';
      }
    });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
