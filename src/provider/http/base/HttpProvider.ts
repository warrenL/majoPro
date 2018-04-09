import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { APIVersionConstants } from "../../../constant/APIVersionConstants"
import { HttpException } from "../../../exception/HttpException";
import { GlobalProvider } from "../../GlobalProvider";

/**
 * The base provider class used to provide common http api.
 *
 */
@Injectable()
export class HttpProvider {
  BASE_URL: string = "https://127.0.0.1";
  // CLIENT_KEY: string = "clientKey";
  // CLIENT_VALUE: string = "student-attendance";
  // DEVICE_ID_KEY: string = "deviceId";
  TOKEN_KEY: string = "token";
  // API_VERSION_KEY: string = "apiVersion";

  constructor(private http: Http, private globalProvider: GlobalProvider) {
  }

  public httpGetNoAuth(url: string, headers: any, parameters: any) {
    let finalHeaders = this.getHeaders(headers);

    let params = new URLSearchParams();
    for (let key in parameters) {
      params.set(key, parameters[key]);
    }

    let options = new RequestOptions({ headers: finalHeaders, params: params });

    return this.http.get(this.BASE_URL + url, options).toPromise()
      .then(res => {return res.json().data})
      .catch(err => {
        this.handleError(err);
      });
  }

  public httpGetWithAuth(url: string, headers: any, parameters: any) {
    let finalHeaders = this.getHeaders(headers);
    finalHeaders.append(this.TOKEN_KEY, this.globalProvider.getToken());

    let params = new URLSearchParams();
    for (let key in parameters) {
      params.set(key, parameters[key]);
    }

    let options = new RequestOptions({ headers: finalHeaders, params: params });

    return this.http.get(this.BASE_URL + url, options).toPromise()
      .then((res) => {
        let newToken = res.headers.get(this.TOKEN_KEY);
        if (newToken) {
          return this.globalProvider.setToken(newToken).then(() => {
            return res.json().data;
          });
        } else {
          return res.json().data;
        }
      })
      .catch(err => {
        this.handleError(err);
      });
  }

  public httpPostNoAuth(url: string, headers: any, body: any) {
    let finalHeaders = this.getHeaders(headers);

    let options = new RequestOptions({ headers: finalHeaders });

    return this.http.post(this.BASE_URL + url, body, options).toPromise()
      .then((res) => {
        return res.json().data;
      })
      .catch((err) => {
        this.handleError(err);
      });
  }

  public httpPostWithAuth(url: string, headers: any, body: any) {
    let finalHeaders = this.getHeaders(headers);
    finalHeaders.append(this.TOKEN_KEY, this.globalProvider.getToken());

    let options = new RequestOptions({ headers: finalHeaders });

    return this.http.post(this.BASE_URL + url, body, options).toPromise()
      .then((res) => {
        let newToken = res.headers.get(this.TOKEN_KEY);
        if (newToken) {
          return this.globalProvider.setToken(newToken).then(() => {
            return res.json().data;
          });
        } else {
          return res.json().data;
        }
      })
      .catch((err) => {
        this.handleError(err);
      });
  }

  private handleError(error: Response) {
    console.error("http error - " + error);
    throw new HttpException(error.status, "Http Request Error");
  }

  private getHeaders(headers: any): Headers {
    let finalHeaders = new Headers();
    // finalHeaders.append(this.CLIENT_KEY, this.CLIENT_VALUE);
    // finalHeaders.append(this.DEVICE_ID_KEY, this.globalProvider.getDeviceId());
    finalHeaders.append('X-Requested-With', 'XMLHttpRequest');
    // if (!headers[this.API_VERSION_KEY]) {
    //   finalHeaders.append(this.API_VERSION_KEY, APIVersionConstants.API_VERSION_1_0);
    // }
    if (!headers['Content-Type']) {
      finalHeaders.append('Content-Type', 'application/json');
    }
    for (let headerKey in headers) {
      finalHeaders.append(headerKey, headers[headerKey]);
    }
    return finalHeaders;
  }

  // 本地json文件请求
  getTestResponse(){
    return this.http.get("assets/json/newTest.json")
  }
}
