import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { MyMessageHttpProvider } from '../http/MyMessageHttpProvider';

import { HttpException } from "../../exception/HttpException";

/**
 * The class used to provide service api for user.
 *
 */
@Injectable()
export class MyMessageService {

  constructor(public globalProvider: GlobalProvider, public myMessageHttpProvider: MyMessageHttpProvider) {
  }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    getMyMessage(): Promise<any> {
        return this.myMessageHttpProvider.getMyMessage().then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }
    
    commitMyMessageContent(message: string): Promise<any> {
        return this.myMessageHttpProvider.commitMyMessageContent(message).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }
}