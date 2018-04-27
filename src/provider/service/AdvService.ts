import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { AdvHttpProvider } from '../http/AdvHttpProvider';

import { HttpException } from "../../exception/HttpException";

/**
 * The class used to provide service api for user.
 *
 */
@Injectable()
export class AdvService {

  constructor(public globalProvider: GlobalProvider, public advHttpProvider: AdvHttpProvider) {
  }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    getAllAd(keyword: string): Promise<any> {
        return this.advHttpProvider.getAllAd(keyword).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }

    getMyAd(keyword: string): Promise<any> {
        return this.advHttpProvider.getMyAd(keyword).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }

    EditAd(advert: string, company: string, price: string, adTag: string, status: string): Promise<any> {
        return this.advHttpProvider.EditAd(advert, company, price, adTag, status).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }

    publishAd(advert: string, company: string, price: string, adTag: string, images: string): Promise<any> {
        return this.advHttpProvider.publishAd(advert, company, price, adTag, images).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }
}