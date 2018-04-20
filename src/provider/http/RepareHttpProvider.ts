import { Injectable, ApplicationRef } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { HttpProvider } from "./base/HttpProvider";
import { ValueTransformer } from '@angular/compiler/src/util';
import { HttpException } from "../../exception/HttpException";
import { OrderItem } from '../../model/OrderItem';
import { ApplyOrderItem } from '../../model/ApplyOrderItem';
import { AddressItem } from '../../model/AddressItem';

/**
 * The provider class repare majo machine to provide http api for user.
 *
 */
@Injectable()
export class RepareHttpProvider {

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

    private handleError(error: Response) {
      console.error("http error - " + error);
      throw new HttpException(error.status, "Http Request Error");
    }

    // 5.  维修麻将机未接订单
    //     地址:	api/repare/orders
    //     参数:	addr1, addr2, addr3, addr4, token, orderType(0所有订单, 1维修订单, 2购买新机器订单, 3购买旧机器订单, 4租麻将机订单, 5安装麻将机或配件订单)
    //     返回:	orderNo, orderType(1维修订单, 2购买新机器订单, 3购买旧机器订单, 4租麻将机订单, 5安装麻将机或配件订单), 
    //       publisher, remark(描述), addr1, addr2, addr3, addr4, addr5, phone, publishDate, topFlag(1置顶,0不置顶)  
    repareOraders(addressItem: AddressItem, orderType: string): Promise<OrderItem> {
      let url = "api/repare/orders";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'addr1=' + addressItem.addr1 + '&addr2=' + addressItem.addr2 + '&addr3=' + addressItem.addr3 + '&addr4=' + addressItem.addr4 + "&orderType=" + orderType;

      return this.httpProvider.httpPostWithAuth(url, heads, params).then((value) => {
        console.log(value);
        return value.map((data) => {
          return new OrderItem(data.orderNo, data.orderType, data.publisher, data.remark, 
                               new AddressItem(data.addr1, data.addr2, data.addr3, data.addr4, data.addr5), 
                               data.phone, data.publisheDate, data.topFlag);
        });
        // if (value.reCode == 200 && value.reMsg == "操作成功") {
        //   return value.data;
        // } else {
        //   return value.reMsg;
        // }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
    }
    
    // 6.  维修麻将机(申请通过, 申请中)
    //     地址:	api/repare/myOrders
    //     参数:	token, type(1申请中, 2申请通过, 3我发布的订单)
    //     返回:	orderNo, publisher, remark(描述), addr1, addr2, addr3, addr4, addr5, phone, publishDate, 
    //       topFlag(1置顶,0不置顶), status(1申请中, 2申请通过, 3已完成), reqDate(申请日期), approveDate(订单审批通过日期)
    //       reqCount(申请数量)
    repareMyOrders(type: string): Promise<any> {
      let url = "api/repare/myOrders";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'type' + type;

      return this.httpProvider.httpPostWithAuth(url, heads, params).then((value) => {
        console.log("Response " + value);
        return value.map((data) => {
          return new ApplyOrderItem(data.orderNo, data.publisher, data.remark, 
                               new AddressItem(data.addr1, data.addr2, data.addr3, data.addr4, data.addr5), 
                               data.phone, data.publisheDate, data.topFlag, 
                               data.status, data.reqDate, data.approveDate, data.reqCount);
        });
        // if (value.reCode == 200 && value.reMsg == "操作成功") {
        //   return value.data;
        // } else {
        //   return value.reMsg;
        // }
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
    }
    
    // 7.  维修麻将机取消申请/举报/完成/置顶/上架/下架/删除
    //     地址:	api/repare/orderUpdate
    //     参数:	token, orderNo, type(1取消 2举报, 3完成, 4置顶, 5上架, 6下架, 7删除)
    //     返回:
    repareOrderUpdate(orderNo: string, type: string): Promise<any> {
      let url = "api/repare/orderUpdate";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'orderNo=' + orderNo + '&type=' + type;

      return this.httpProvider.httpPostWithAuth(url, heads, params).then((value) => {
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

    // 8.  维修麻将机推送类型
    //     地址:	api/repare/orderRemind
    //     参数:	token, addr1, addr2, addr3,
    //       type1, type2, type3, type4, type5, type6 
    //     返回:	
    repareOrderRemind(addressItem: AddressItem, type: string): Promise<any> {
      let url = "api/repare/orderRemind";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'addr1=' + addressItem.addr1 + '&addr2=' + addressItem.addr2 + '&addr3=' + addressItem.addr3 + '&addr4=' + addressItem.addr4 + '&type=' + type;

      return this.httpProvider.httpPostWithAuth(url, heads, params).then((value) => {
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

    // 9.  维修麻将机订单创建/修改
    //     地址:	api/repare/orderEdit
    //     参数:	token, orderNo(新建的时候空, 修改的时候不为空), 
    //       orderType(1维修订单, 2购买新机器订单, 3购买旧机器订单, 4租麻将机订单, 5安装麻将机或配件订单)
    //       addr1, addr2, addr3, addr4, addr5, phone, publisher
    //     返回:
    repareOrderEdit(orderNo: string, orderType: string, addressItem: AddressItem, phone: string, publisher: string): Promise<any> {
      let url = "api/repare/orderEdit";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'orderNo=' + orderNo;
      params = params + '&addr1=' + addressItem.addr1
                      + '&addr2=' + addressItem.addr2 
                      + '&addr3=' + addressItem.addr3 
                      + '&addr4=' + addressItem.addr4 
                      + '&addr5=' + addressItem.addr5;
      params = params + '&phone=' + phone + '&publisher=' + publisher;

      return this.httpProvider.httpPostWithAuth(url, heads, params).then((value) => {
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
