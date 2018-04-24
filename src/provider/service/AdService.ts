import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { AdHttpProvider } from '../http/adHttpProvider';

import { HttpException } from "../../exception/HttpException";

/**
 * The class used to provide service api for user.
 *
 */
@Injectable()
export class AdService {

  constructor(public globalProvider: GlobalProvider, public adHttpProvider: AdHttpProvider) {
  }

    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    getAllAd(keyword: string): Promise<any> {
        return this.adHttpProvider.getAllAd(keyword).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }

    getMyAd(keyword: string): Promise<any> {
        return this.adHttpProvider.getMyAd(keyword).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }

    EditAd(advert: string, company: string, price: string, adTag: string, status: string): Promise<any> {
        return this.adHttpProvider.EditAd(advert, company, price, adTag, status).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }

    publishAd(advert: string, company: string, price: string, adTag: string, images: string): Promise<any> {
        return this.adHttpProvider.publishAd(advert, company, price, adTag, images).then((value) => {
            console.log(value);
            return value;
        }).catch((error) => {
            console.log(error);
            this.handleError(error);
        });
    }
}