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
export class BrandHttpProvider {
    constructor (private httpProvider: HttpProvider, private globalProvider: GlobalProvider, private ref: ApplicationRef) {

    }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    // 10. 上传新品牌(填写品牌名称, logo)
	// 地址:	api/brand/create
	// 参数:	token, brandName, brandLogo
    // 返回:	brandId
    uploadNewBrand(brandName: string, brandLogo: string): Promise<any> {
        let url = "api/brand/create";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'brandName=' + brandName + '&brandLogo=' + brandLogo;

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

    // 11. 修改品牌介绍(填写品牌介绍)
	// 地址:	api/brand/update
	// 参数:	token, brandDesc, brandId
    // 返回:
    updateBrand(brandDesc: string, brandId: string): Promise<any> {
      let url = "api/brand/update";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'brandDesc=' + brandDesc + '&brandId=' + brandId;

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

    // 12. 上传新品牌(认证)
	// 地址:	api/brand/authenticate
	// 参数:	token, idCard1(身份证正面), idCard2(身份证背面), brandmark(商标图片证), brandId
	// 返回:
    uploadNewBrandAuth(idCard1: string, idCard2: string, brandmark: string, brandId: string): Promise<any> {
      let url = "api/brand/authenticate";
      let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
      let params = 'idCard1=' + idCard1 + '&idCard2=' + idCard2 + '&brandmark=' + brandmark + '&brandId=' + brandId;

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

    // 12. 我的品牌
	// 地址:	api/brand/mybrands
	// 参数:	token
	// 返回:	brandId, brandName, brandLogo, submitter, phone, authenticated(1已认证0未认证), 
	// 	likeCount(被赞次数), dislikeCount(被黑次数), flowerCount(鲜花数)
	// 	ranking(排名, 小的靠上)
    getMyBrand(): Promise<any> {
        let url = "api/brand/mybrands";
        let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
        let params;
  
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

    //   13. 品牌排名
    //   地址:	api/brand/ranking
    //   参数:	token
    //   返回:	brandId, brandName, brandLogo, submitter, phone, authenticated(1已认证0未认证), 
    //       likeCount(被赞次数), dislikeCount(被黑次数), flowerCount(鲜花数)
    //       ranking(排名, 小的靠上)
    getRankingBrand(): Promise<any> {
        let url = "api/brand/ranking";
        let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
        let params;

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