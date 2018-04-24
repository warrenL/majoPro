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
export class MyMessageHttpProvider {
    constructor (private httpProvider: HttpProvider, private globalProvider: GlobalProvider, private ref: ApplicationRef) {

    }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    // 24. 我的留言
    //     地址:	api/message/mine
    //     参数:	token
    //     返回:	messageDate(留言日期), message(留言内容), resp(答复)
    getMyMessage(): Promise<any> {
        let url = "api/message/mine";
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

    // 25. 提交留言
    //     地址:	api/message/mine
    //     参数:	token, message(留言内容)
    //     返回:	
    commitMyMessageContent(message: string): Promise<any> {
        let url = "api/message/mine";
        let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
        let params = 'message=' + message;

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