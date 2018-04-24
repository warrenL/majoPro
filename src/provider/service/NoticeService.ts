import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { NoticeHttpProvider } from '../http/NoticeHttpProvider';

import { HttpException } from "../../exception/HttpException";

/**
 * The class used to provide service api for user.
 *
 */
@Injectable()
export class NoticeService {

  constructor(public globalProvider: GlobalProvider, public noticeHttpProvider: NoticeHttpProvider) {
  }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    getAllMessageList(): Promise<any> {
        return this.noticeHttpProvider.getAllMessageList().then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }
    getMessageContent(noticeId: string): Promise<any> {
        return this.noticeHttpProvider.getMessageContent(noticeId).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }
}