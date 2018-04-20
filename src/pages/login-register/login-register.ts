import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../provider/service/UserService';
import { CityDataProvider } from "../../providers/city-data/city-data";
import { AddressItem } from '../../model/AddressItem';

/**
 * Generated class for the LoginRegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'login-register-page'
})
@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {
  username: string = '';
  password: string = '';
  jsonString: string = '';

  registerAddress: AddressItem;

  authentication: string = '登录';

  cityColumns: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public userService: UserService, 
              public cityDataProvider: CityDataProvider) {
    this.cityColumns = this.cityDataProvider.cities;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

  segmentChanged (event) {
    console.log('Change segment');
  }

  register(event) {
    // this.userService.regist(name, phone, password, verifyCode, 
    //   inviteCode, addr1, addr2, addr3, addr4).then((value) => {
    //   this.authentication = '登录';
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  onLocationChange(event) {
    console.log("Selection location info: " + JSON.stringify(event));
    this.registerAddress = new AddressItem(event[0].text,event[1].text,event[2].text,"","");
    console.log(this.registerAddress);
  }

  getVerifyCode(event) {
    // this.userService.SMS(phone, "1").then((value) => {
      
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  back(event) {
    this.navCtrl.pop({animation: 'md-transition', direction: 'back'});
  }

  login(event) {
    // this.userService.login(this.username, this.password).then((value) => {
      this.navCtrl.push('main-board-page', null, {animation: 'md-transition', direction: 'forward'});
    // }).catch((error) => {
    //   console.log(error);
    // });
    
  }

  findPassword(event) {
    this.navCtrl.push('find-password-page', null, {animation: 'md-transition', direction: 'forward'});
  }

}
