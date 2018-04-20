import { AddressItem } from '../model/AddressItem';

export class ApplyOrderItem {

    //     返回:	orderNo, publisher, remark(描述), addr1, addr2, addr3, addr4, addr5, phone, publishDate, 
    //       topFlag(1置顶,0不置顶), status(1申请中, 2申请通过, 3已完成), reqDate(申请日期), approveDate(订单审批通过日期)
    //       reqCount(申请数量)
    orderNo: string;
    publisher: string;
    remark: string;
    addressObj: AddressItem;
    phone: string;
    publishDate: string;
    topFlag: string;
    status: string;
    reqDate: string;
    approveDate: string;
    reqCount: string;
  
    constructor(orderNo: string, publisher: string, remark: string
        , addressObj: AddressItem, phone: string
        , publishDate: string, topFlag: string, status: string, reqDate: string, approveDate: string, reqCount: string) {
      this.orderNo = orderNo;
      this.publisher = publisher;
      this.remark = remark;
      this.addressObj = new AddressItem(addressObj.addr1, addressObj.addr2, addressObj.addr3, addressObj.addr4, addressObj.addr5);
      this.phone = phone;
      this.publishDate = publishDate;
      this.topFlag = topFlag;
      this.status = status;
      this.reqDate = reqDate;
      this.approveDate = approveDate;
      this.reqCount = reqCount;
    }
  }