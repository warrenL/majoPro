import { Injectable, ApplicationRef } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { HttpProvider } from "./base/HttpProvider";
import { ValueTransformer } from '@angular/compiler/src/util';
import { HttpException } from "../../exception/HttpException";
import { AddressItem } from '../../model/AddressItem';

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

   listData=[];
    constructor(private httpProvider: HttpProvider, private globalProvider: GlobalProvider, private ref: ApplicationRef) { }

    // 1.  登录
    //     地址:	api/users/login
    //     参数:	username, password
    //     返回:	token
    login(userName: string, password: string): Promise<any> {
      let url = "/api/users/login";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'username=' + userName + '&password=' + password;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Login success:--->" + value);
        if (value.reCode == 200 && value.reMsg == "操作成功") {
          return this.globalProvider.setLoginValue(value.data.token).then(() => {
            return value.data;
          });
        } else {
          return value.reMsg;
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
    
    // 2.  注册
    //     地址:	api/users/regist
    //     参数:	name, phone, password, verifyCode, inviteCode, addr1, addr2, addr3, addr4
    //     返回:
    regist(name: string, phone: string, password: string, verifyCode: string, inviteCode: string, 
      addressItem: AddressItem): Promise<any> {
      let url = "/api/users/regist";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'name=' + name + '&phone=' + phone + '&password=' + password;
      params = params + '&verifyCode=' + verifyCode + '&inviteCode=' + inviteCode;
      params = params + '&addr1=' + addressItem.addr1 
                      + '&addr2=' + addressItem.addr2 
                      + '&addr3=' + addressItem.addr3 
                      + '&addr4=' + addressItem.addr4;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value.reCode == 200 && value.reMsg == "操作成功") {
          return value.data;
        } else {
          return value.reMsg;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
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
        if (value.reCode == 200 && value.reMsg == "操作成功") {
          return value.data;
        } else {
          return value.reMsg;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
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
        if (value.reCode == 200 && value.reMsg == "操作成功") {
          return value.data;
        } else {
          return value.reMsg;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
    }

    logout(): Promise<any> {
        return this.httpProvider.getTestResponse().toPromise()
        .then((res) => {
          this.listData.push(res.json().data);
          // 数据格式请看log
          console.log("listData------->",this.listData[0].token);
          this.ref.tick();
          return this.listData;
         })
         .catch((err) => {
          console.log(err);
          this.handleError(err);
         });
      // let url = "/users/logout";
      // let heads = {};
      // let params = {};
      // return this.httpProvider.httpGetWithAuth(url, heads, params).then((value) => {
      //   console.log("Response " + value);
      //   return value;
      // }).catch((error) => {
      //   console.log(error);
      // });
    }

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

    // 18. 充值下单
    //   地址:	api/users/charge
    //   参数:	token, amount(充值金额,单位是分)
    //   返回:	appid, body, noncestr, packageStr, partnerid, prepayid, sign, timeStamp, tradeNo
    charge(amount: string): Promise<any> {
      let url = "/api/users/charge";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'amount=' + amount;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value.reCode == 200 && value.reMsg == "操作成功") {
          return value.data;
        } else {
          return value.reMsg;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
    }
      
    // 19. 查询充值状态
    //   地址:	api/users/chargeStatus
    //   参数:	token, tradeNo(充值订单号)
    //   返回:	balance(余额)
    chargeStatus(tradeNo: string): Promise<any> {
      let url = "/api/users/chargeStatus";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'tradeNo=' + tradeNo;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value.reCode == 200 && value.reMsg == "操作成功") {
          return value.data;
        } else {
          return value.reMsg;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
    }
    
    // 20. 我的邀请码
    //   地址:	api/users/invitationCode
    //   参数:	token
    //   返回:	invitationCode(邀请码)
    getInvitationCode(): Promise<any> {
      let url = "/api/users/invitationCode";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value.reCode == 200 && value.reMsg == "操作成功") {
          return value.data;
        } else {
          return value.reMsg;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
    }

    // 21. 我的简历
    //   地址:	api/users/resume
    //   参数:	token
    //   返回:	realName, phone, addr1, addr2, addr3, addr4, addr5
    getResume(): Promise<any> {
      let url = "/api/users/resume";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value.reCode == 200 && value.reMsg == "操作成功") {
          return value.data;
        } else {
          return value.reMsg;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
    }

    // 26. 用户签到
    //   地址:	api/users/signin
    //   参数:	token
    //   返回:	
    signin(): Promise<any> {
      let url = "/api/users/signin";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params;

      return this.httpProvider.httpPostNoAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        if (value.reCode == 200 && value.reMsg == "操作成功") {
          return value.data;
        } else {
          return value.reMsg;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
    }
}
