import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { HttpProvider } from "./base/HttpProvider";

/**
 * The provider class used to provide http api for user.
 *
 */
@Injectable()
export class UserHttpProvider {

    /*
    all the response should be follow below format:
    {
      "data":{

      }
      "reMsg":"操作成功",
      "reCode":200
    }
    */


    constructor(private httpProvider: HttpProvider, private globalProvider: GlobalProvider) { }

    // 1.  登录
    //     地址:	api/users/login
    //     参数:	username, password
    //     返回:	token
    login(userName: string, password: string): Promise<any> {
      let url = "/api/users/login";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'username=' + userName + '&password=' + password;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value) {
          return this.globalProvider.setLoginValue(value.token).then(() => {
            return value;
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    }
    
    // 2.  注册
    //     地址:	api/users/regist
    //     参数:	name, phone, password, verifyCode, inviteCode, addr1, addr2, addr3, addr4
    //     返回:
    regist(name: string, phone: string, password: string, verifyCode: string, inviteCode: string, 
      addr1: string, addr2: string, addr3: string, addr4: string): Promise<any> {
      let url = "/api/users/regist";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'name=' + name + '&phone=' + phone + '&password=' + password;
      params = params + '&verifyCode=' + verifyCode + '&inviteCode=' + inviteCode;
      params = params + '&addr1=' + addr1 + '&addr2=' + addr2 + '&addr3=' + addr3 + '&addr4=' + addr4;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value) {
          return true;
        }
      }).catch((error) => {
        console.log(error);
        return false;
      });
    }
    
    // 3.  忘记密码
    //     地址:	api/users/pwdreset
    //     参数:	phone, password, verifyCode
    //     返回:
    resetPwd(phone: string, password: string, verifyCode: string): Promise<any> {
      let url = "/api/users/pwdreset";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'phone=' + phone + '&password=' + password + '&verifyCode=' + verifyCode;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value) {
          return true;
        }
      }).catch((error) => {
        console.log(error);
        return false;
      });
    }

    // 4.  发送短信
    //     地址:	api/users/pwdreset
    //     参数:	phone, smsType(1注册, 2忘记密码)
    //     返回:
    SMS(phone: string,  smsType: string): Promise<any> {
      let url = "/api/users/pwdreset";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'phone=' + phone + '&smsType=' + smsType;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value) {
          return this.globalProvider.setLoginValue(value.data.token).then(() => {
            return value;
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    }

    // logout(): Promise<any> {
    //   let url = "/users/logout";
    //   let heads = {};
    //   let params = {};
    //   return this.httpProvider.httpGetWithAuth(url, heads, params).then((value) => {
    //     console.log("Response " + value);
    //     return value;
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }

    // current(): Promise<any> {
    //   let url = "/users/current";
    //   let heads = {}
    //   let params = {};
    //   return this.httpProvider.httpGetWithAuth(url, heads, params).then((value) => {
    //     console.log("Response " + value);
    //     return value;
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }


}
