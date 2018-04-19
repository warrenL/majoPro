import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../provider/service/UserService';

@Component({
  templateUrl: 'app.html'
})
export class ClassroomAPP {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'splash-screen-page';

  constructor(public platform: Platform,
              public splashScreen: SplashScreen,
              public statusBar: StatusBar,
              public userService: UserService) {
    this.initializeApp();
  }

  initializeApp() {

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

    this.userService.isLogin().then(isLogin => {
      if (isLogin) {
        this.rootPage = 'page-main-board';
      }
    });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
