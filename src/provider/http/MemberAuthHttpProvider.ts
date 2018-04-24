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
export class MemeberAuthHttpProvider {
    constructor (private httpProvider: HttpProvider, private globalProvider: GlobalProvider, private ref: ApplicationRef) {

    }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    // 27. 认证技术员(获取问题)
    // 	地址:	api/technician/question
    // 	参数:	token
    // 	返回:	questions(问题数组, questionId, questioTitle(题目标题), options(题目选项))
    getQuestions(): Promise<any> {
        let url = "api/technician/question";
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

    // 28. 认证技术员(回答问题)
    // 	地址:	api/technician/answer
    // 	参数:	token, questions(问题id数组), answers(答案数组)
    // 	返回:	
    answerQuestions(questions: string, answers: string): Promise<any> {
        let url = "api/technician/answer";
        let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
        let params = 'questions=' + questions + '&answers=' + answers;

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

    // 29. 认证技术员(认证)
    // 	地址:	api/technician/authenticate
    // 	参数:	token, idCard1(身份证正面), idCard2(身份证背面), photo(自拍)
    // 	返回:
    authMember(idCard1: string, idCard2: string, photo: string): Promise<any> {
        let url = "api/technician/authenticate";
        let heads = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
        let params = 'idCard1=' + idCard1 + '&idCard2=' + idCard2 + '&photo=' + photo;

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