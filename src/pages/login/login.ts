import { Component, trigger, state, style, transition, animate, ViewChild} from '@angular/core';
import { AlertController, App, IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { UserHttpProvider } from '../../provider/http/UserHttpProvider';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * The controller class for login page.
 *
 */
@IonicPage({
  name: 'login-page',
  segment: 'login',
  priority: 'high'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [
    trigger('inputState', [
      state(
        'inactive',
        style({
          display: 'none',
          opacity: 0,
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'active',
        style({
          opacity: 1,
          transform: 'none'
        })
      ),
      transition('inactive => active', animate('300ms ease-in'))
    ])
  ]
})
export class LoginPage {
  username: string = '';
  password: string = '';
  text: string = 'Login';
  state: string = 'inactive';
  @ViewChild('usernameInput') usernameInput : any
  @ViewChild('passwordInput') passwordInput : any
  @ViewChild('content') content : any
  constructor(public platform: Platform,
              public navCtrl: NavController,
              public alertCtrl: AlertController,
              public menuCtrl: MenuController,
              public userHttpProvider: UserHttpProvider,
              private keyboard: Keyboard,
              public appCtrl: App) {
    this.initializeApp();
    this.keyboard.onKeyboardHide().subscribe(() => {
      this.content.nativeElement.style.top = '15%';
    });
     this.keyboard.onKeyboardShow().subscribe(() => {
      if (this.state == 'active') {
        this.content.nativeElement.style.top = '6%';
      }
    });
  }
  ionViewDidLoad() {
    this.menuCtrl.swipeEnable(false);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.usernameInput.setFocus();
    }, 0);
  }

  /*
   * Login Button is clicked
   */
  login(event) {
    if (this.state == 'inactive') {
      if (this.username) {
        this.state = 'active';
        setTimeout(() => {
          this.passwordInput.setFocus();
        }, 0);
      } else {
        this.paramsIsEmpty('Username');
      }
    } else {
      if (!this.password) {
        this.paramsIsEmpty('Password');
      } else if (this.username.trim().toLowerCase() == 'rodney' && this.password.trim() == 'abc123_') {
        this.appCtrl.getRootNav().setRoot('dashboard-page', {}, {animate: true, direction: 'forward'});
      } else {
        this.showLoginFailedAlert();
      }
    }
  }


  /*
   * Login is failed
   */
  showLoginFailedAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login Failed!',
      subTitle: 'The Username or Password is incorrect.',
      buttons: ['OK'],
      cssClass: 'custom-ios'
    });
    alert.present();
  }

  paramsIsEmpty(params: string) {
    let alert = this.alertCtrl.create({
      title: 'Login Failed!',
      subTitle: 'The ' + params + ' is empty.',
      buttons: ['OK'],
      cssClass: 'custom-ios'
    });
    alert.present();
  }

  toSplash(event) {
    this.navCtrl.pop({animation: 'md-transition', direction: 'back'});
  }
}
