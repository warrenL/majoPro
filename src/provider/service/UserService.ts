import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { UserHttpProvider } from '../http/UserHttpProvider';

import { HttpException } from "../../exception/HttpException";

/**
 * The class used to provide service api for user.
 *
 */
@Injectable()
export class UserService {

  constructor(public globalProvider: GlobalProvider, public userHttpProvider: UserHttpProvider) {
  }

  isLogin(): Promise<any> {
    return this.globalProvider.initGlobal().then((value) => {
      if (value) {
        if (navigator.onLine) {
          // return this.userHttpProvider.current().then((value) => {
          //   if (value) {
          //     return true;
          //   } else {
          //     return false;
          //   }
          // });
          return true;
        } else {
          let tokenExpireTime = new Date(this.globalProvider.getTokenTime());
          tokenExpireTime.setDate(tokenExpireTime.getDate() + 30);
          let nowStr = (new Date()).toISOString();
          return (tokenExpireTime.toISOString() < nowStr);
        }
      } else {
        return false;
      }
    });
  }

  login(userName: string, password: string): Promise<any> {
    return this.userHttpProvider.login(userName, password).then((value) => {
      console.log("userService:---->"+value.status);
      if (value) {
        return value;
      }
    }).catch((error) => {
      console.log(error);
      this.handleError(error);
    });
  }

  private handleError(error: Response) {
    console.error("http error - " + error);
    throw new HttpException(error.status, "Http Request Error");
  }

  regist(name: string, phone: string, password: string, verifyCode: string, inviteCode: string, 
    addr1: string, addr2: string, addr3: string, addr4: string): Promise<any> {
    return this.userHttpProvider.regist(name, phone, password, verifyCode, 
      inviteCode, addr1, addr2, addr3, addr4).then((value) => {
      if (value) {
        return value;
      }
    }).catch((error) => {
      console.log(error);
      this.handleError(error);
    });
  }

  resetPwd(phone: string, password: string, verifyCode: string): Promise<any> {
    return this.userHttpProvider.resetPwd(phone, password, verifyCode).then((value) => {
      if (value) {
        return value;
      }
    }).catch((error) => {
      console.log(error);
      this.handleError(error);
    });
  }

  SMS(phone: string,  smsType: string): Promise<any> {
    return this.userHttpProvider.SMS(phone, smsType).then((value) => {
      if (value) {
        return value;
      }
    }).catch((error) => {
      console.log(error);
      this.handleError(error);
    });
  }

  logout(): Promise<any> {
    return this.userHttpProvider.logout().then((value) => {
      if (value) {
        return value;
      }
    })
  }
}
