import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { RepareHttpProvider } from '../http/RepareHttpProvider';

import { HttpException } from "../../exception/HttpException";

/**
 * The class used to provide service api for user.
 *
 */
@Injectable()
export class RepareService {

  constructor(public globalProvider: GlobalProvider, public repareHttpProvider: RepareHttpProvider) {
  }

  repareOraders(addr1: string, addr2: string, addr3: string, addr4: string, orderType: string): Promise<any> {
    return this.repareHttpProvider.repareOraders(addr1, addr2, addr3, addr4, orderType).then((value) => {
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

  repareMyOrders(type: string): Promise<any> {
    return this.repareHttpProvider.repareMyOrders(type).then((value) => {
      if (value) {
        return value;
      }
    }).catch((error) => {
      console.log(error);
      this.handleError(error);
    });
  }

  repareOrderUpdate(orderNo: string, type: string): Promise<any> {
    return this.repareHttpProvider.repareOrderUpdate(orderNo, type).then((value) => {
      if (value) {
        return value;
      }
    }).catch((error) => {
      console.log(error);
      this.handleError(error);
    });
  }

  repareOrderRemind(addr1: string, addr2: string, addr3: string, addr4: string, type: string): Promise<any> {
    return this.repareHttpProvider.repareOrderRemind(addr1, addr2, addr3, addr4, type).then((value) => {
      if (value) {
        return value;
      }
    }).catch((error) => {
      console.log(error);
      this.handleError(error);
    });
  }

  repareOrderEdit(orderNo: string, orderType: string, addr1: string, addr2: string,
    addr3: string, addr4: string, phone: string, publisher: string): Promise<any> {
      return this.repareHttpProvider.repareOrderEdit(orderNo, orderType, addr1, addr2, addr3, addr4, phone, publisher).then((value) => {
        if (value) {
          return value;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
  }
}
