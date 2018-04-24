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
export class NoticeHttpProvider {
    constructor (private httpProvider: HttpProvider, private globalProvider: GlobalProvider, private ref: ApplicationRef) {

    }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    // 22. 系统消息列表
    //     地址:	api/notice/list
    //     参数:	token
    //     返回:	noticeId, noticeTitle, noticeDesc, status(1已读0未读), noticeDate(发布日期)
    getAllMessageList(): Promise<any> {
        let url = "api/notice/list";
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

    // 23. 查看系统消息
    //     地址:	api/notice/view
    //     参数:	token, noticeId
    //     返回:	noticeId, noticeTitle, noticeDesc, status(1已读0未读), noticeDate(发布日期), noticeContent(内容)
    getMessageContent(noticeId: string): Promise<any> {
        let url = "api/notice/view";
        let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
        let params = 'noticeId=' + noticeId;

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