import { Injectable, ApplicationRef } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { HttpProvider } from "./base/HttpProvider";
import { ValueTransformer } from '@angular/compiler/src/util';
import { HttpException } from "../../exception/HttpException";

/**
 * The provider class repare majo machine to provide http api for user.
 *
 */
@Injectable()
export class AdvHttpProvider {
    constructor (private httpProvider: HttpProvider, private globalProvider: GlobalProvider) {

    }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    // 14. 广告大厅
	// 地址:	api/ads/hall
	// 参数:	token, keyword(公司或分类关键字)
	// 返回:	adId, adTag(标签), company(公司), images(产品图片, string数组), advert(广告词), 
    // 	authenticated(1已认证0未认证), ranking(排名)
    getAllAd(keyword: string): Promise<any> {
        let url = "api/ads/hall";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'keyword=' + keyword;

      return this.httpProvider.httpPostWithAuth(url, heads, params).then((value) => {
        console.log(value);
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

    // 15. 我的广告
	// 地址:	api/ads/myads
	// 参数:	token, keyword(公司或分类关键字)
	// 返回:	adId, adTag(标签), company(公司), images(产品图片, string数组), advert(广告词), 
	// 	authenticated(1已认证0未认证), ranking(排名), status(1已上架, 0未上架)
    getMyAd(keyword: string): Promise<any> {
        let url = "api/ads/myads";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'keyword=' + keyword;

      return this.httpProvider.httpPostWithAuth(url, heads, params).then((value) => {
        console.log(value);
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

    // 16. 修改广告数据(广告说明, 公司, 扣费数量)
	// 地址:	api/ads/update
	// 参数:	token, advert(广告说明), company(公司), price(扣费数量), adTag(标签), status(1已上架, 0未上架, 2删除)
	// 返回:	
    EditAd(advert: string, company: string, price: string, adTag: string, status: string): Promise<any> {
        let url = "api/ads/update";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'advert=' + advert + '&company=' + company + '&price=' + price + '&adTag=' + adTag + '&status=' + status;

      return this.httpProvider.httpPostWithAuth(url, heads, params).then((value) => {
        console.log(value);
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

    // 17. 发布新广告
	// 地址:	api/ads/publish
	// 参数:	token, advert(广告说明), company(公司), images(产品图片, string数组), price(扣费数量), adTag(标签, 直接上传标签文字)
    // 返回:	
    publishAd(advert: string, company: string, price: string, adTag: string, images: string): Promise<any> {
        let url = "api/ads/publish";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'advert=' + advert + '&company=' + company + '&price=' + price + '&adTag=' + adTag + '&images=' + images;

      return this.httpProvider.httpPostWithAuth(url, heads, params).then((value) => {
        console.log(value);
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