import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { RepareHttpProvider } from '../http/RepareHttpProvider';

import { HttpException } from "../../exception/HttpException";
import { AddressItem } from '../../model/AddressItem';

/**
 * The class used to provide service api for user.
 *
 */
@Injectable()
export class RepareService {

  constructor(public globalProvider: GlobalProvider, public repareHttpProvider: RepareHttpProvider) {
  }

  repareOraders(addressItem: AddressItem, orderType: string): Promise<any> {
    return this.repareHttpProvider.repareOraders(addressItem, orderType).then((value) => {
      console.log("userService:---->"+value);
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

  repareOrderRemind(addressItem: AddressItem, type: string): Promise<any> {
    return this.repareHttpProvider.repareOrderRemind(addressItem, type).then((value) => {
      if (value) {
        return value;
      }
    }).catch((error) => {
      console.log(error);
      this.handleError(error);
    });
  }

  repareOrderEdit(orderNo: string, orderType: string, addressItem: AddressItem, phone: string, publisher: string): Promise<any> {
      return this.repareHttpProvider.repareOrderEdit(orderNo, orderType, addressItem, phone, publisher).then((value) => {
        if (value) {
          return value;
        }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
  }
}
