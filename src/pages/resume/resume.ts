import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../provider/service/UserService';

/**
 * Generated class for the ResumePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'resume-page'
})
@Component({
  selector: 'page-resume',
  templateUrl: 'resume.html',
})
export class ResumePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    this.userService.getResume().then((value) => {
      
    }).catch((error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumePage');
  }

  close(event) {
    this.navCtrl.pop({direction: 'forward'});
  }
}
