import { Injectable } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider';

import { BrandHttpProvider } from '../http/BrandHttpProvider';

import { HttpException } from "../../exception/HttpException";

/**
 * The class used to provide service api for user.
 *
 */
@Injectable()
export class BrandService {

    constructor(public globalProvider: GlobalProvider, public brandHttpProvider: BrandHttpProvider) {
    }
    
    private handleError(error: Response) {
        console.error("http error - " + error);
        throw new HttpException(error.status, "Http Request Error");
    }

    uploadNewBrand(brandName: string, brandLogo: string): Promise<any> {
      return this.brandHttpProvider.uploadNewBrand(brandName, brandName).then((value) => {
        console.log(value);
        return value;
      }).catch((error) => {
        console.log(error);
        this.handleError(error);
      });
    }

    updateBrand(brandDesc: string, brandId: string): Promise<any> {
        return this.brandHttpProvider.updateBrand(brandDesc, brandId).then((value) => {
            console.log(value);
            return value;
          }).catch((error) => {
            console.log(error);
            this.handleError(error);
          });
    }

    uploadNewBrandAuth(idCard1: string, idCard2: string, brandmark: string, brandId: string): Promise<any> {
        return this.brandHttpProvider.uploadNewBrandAuth(idCard1, idCard2, brandmark, brandId).then((value) => {
            console.log(value);
            return value;
          }).catch((error) => {
            console.log(error);
            this.handleError(error);
          });
    }

    getMyBrand(): Promise<any> {
        return this.brandHttpProvider.getMyBrand().then((value) => {
            console.log(value);
            return value;
          }).catch((error) => {
            console.log(error);
            this.handleError(error);
          });
    }

    getRankingBrand(): Promise<any> {
        return this.brandHttpProvider.getRankingBrand().then((value) => {
            console.log(value);
            return value;
          }).catch((error) => {
            console.log(error);
            this.handleError(error);
          });
    }

}