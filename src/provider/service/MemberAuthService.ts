import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { MemeberAuthHttpProvider } from '../http/MemberAuthHttpProvider';

import { HttpException } from "../../exception/HttpException";

/**
 * The class used to provide service api for user.
 *
 */
@Injectable()
export class AdService {

  constructor(public globalProvider: GlobalProvider, public memeberAuthHttpProvider: MemeberAuthHttpProvider) {
  }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    getQuestions(): Promise<any> {
        return this.memeberAuthHttpProvider.getQuestions().then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }

    answerQuestions(questions: string, ansers: string): Promise<any> {
        return this.memeberAuthHttpProvider.answerQuestions(questions, ansers).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }

    authMember(idCard1: string, idCard2: string, photo: string): Promise<any> {
        return this.memeberAuthHttpProvider.authMember(idCard1, idCard2, photo).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }
}