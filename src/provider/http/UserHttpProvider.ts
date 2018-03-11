import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { HttpProvider } from "./base/HttpProvider";

/**
 * The provider class used to provide http api for user.
 *
 */
@Injectable()
export class UserHttpProvider {
    constructor(private httpProvider: HttpProvider, private globalProvider: GlobalProvider) { }

    login(userName: string, password: string): Promise<any> {
      let url = "/users/login";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'username=' + userName + '&password=' + password;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value) {
          return this.globalProvider.setLoginValue(value.token, value.userId).then(() => {
            return value;
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    }

    logout(): Promise<any> {
      let url = "/users/logout";
      let heads = {};
      let params = {};
      return this.httpProvider.httpGetWithAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        return value;
      }).catch((error) => {
        console.log(error);
      });
    }

    current(): Promise<any> {
      let url = "/users/current";
      let heads = {}
      let params = {};
      return this.httpProvider.httpGetWithAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        return value;
      }).catch((error) => {
        console.log(error);
      });
    }


}
