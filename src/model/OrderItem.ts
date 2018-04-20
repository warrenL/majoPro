import { AddressItem } from '../model/AddressItem';

export class OrderItem {

    //     返回:	orderNo, orderType(1维修订单, 2购买新机器订单, 3购买旧机器订单, 4租麻将机订单, 5安装麻将机或配件订单), 
    //       publisher, remark(描述), addr1, addr2, addr3, addr4, addr5, phone, publishDate, topFlag(1置顶,0不置顶) 
    orderNo: string;
    orderType: string;
    publisher: string;
    remark: string;
    addressObj: AddressItem;
    phone: string;
    publishDate: string;
    topFlag: string;
  
    constructor(orderNo: string, orderType: string, publisher: string, remark: string
        , addressObj: AddressItem, phone: string
        , publishDate: string, topFlag: string) {
      this.orderNo = orderNo;
      this.orderType = orderType;
      this.publisher = publisher;
      this.remark = remark;      
      this.addressObj = new AddressItem(addressObj.addr1, addressObj.addr2, addressObj.addr3, addressObj.addr4, addressObj.addr5);
      this.phone = phone;
      this.publishDate = publishDate;
      this.topFlag = topFlag;
    }
  }