import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { UserHttpProvider } from '../http/UserHttpProvider';

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
}
