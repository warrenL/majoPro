import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

/**
 * The class used to provide global common api.
 *
 */
@Injectable()
export class GlobalProvider {
  static TOKEN_KEY: string = "token";
  // static USER_ID_Key: string = "userId";
  static TOKEN_TIME_Key: string = "tokenTime";

  token: string;
  // userId: string;
  // deviceId: string;
  tokenTime: string;

  constructor(private storage: Storage) {
  }

  initGlobal() : Promise<any> {
    // this.deviceId = "123456";
    return this.storage.get(GlobalProvider.TOKEN_KEY).then((value) => {
      if (value) {
        this.token = value;
        return true;
        // return this.storage.get(GlobalProvider.USER_ID_Key).then(value => {
        //   if (value) {

        //     return this.storage.get(GlobalProvider.USER_ID_Key).then(value => {
        //       if (value) {
        //         this.userId = value;
        //         return true;
        //       }
        //     });
        //   } else {
        //     return false;
        //   }
        // })
      } else {
        return false;
      }
    });
  }

  getToken() {
    return this.token;
  }

  setToken(token: string): Promise<any> {
    this.token = token;
    return this.storage.set(GlobalProvider.TOKEN_KEY, token);
  }

  removeToken() {
    this.token = null;
    this.storage.remove(GlobalProvider.TOKEN_KEY);
  }

  // getUserId() {
  //   return this.userId;
  // }

  // setUserId(userId: string): Promise<any> {
  //   this.userId = userId;
  //   return this.storage.set(GlobalProvider.USER_ID_Key, userId);
  // }

  // removeUserId() {
  //   this.userId = null;
  //   this.storage.remove(GlobalProvider.USER_ID_Key);
  // }

  // getDeviceId() {
  //   return this.deviceId;
  // }

  setLoginValue(token: string): Promise<any> {
    return this.setToken(token).then(() => {
      return true;
      // this.setUserId(userId).then(() => {
      //   return true;
      // });
    });
  }

  getTokenTime() {
    return this.tokenTime;
  }

  setTokenTime(tokenTime: string): Promise<any> {
    this.tokenTime = tokenTime;
    return this.storage.set(GlobalProvider.TOKEN_TIME_Key, tokenTime);
  }

  removeTokenTime() {
    this.tokenTime = null;
    this.storage.remove(GlobalProvider.TOKEN_TIME_Key);
  }

}
