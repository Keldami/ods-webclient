/*
Copyright (c) 2018 Friedrich-Alexander University Erlangen-Nürnberg (FAU)
SPDX-License-Identifier: AGPL-3.0-only
*/
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ConfigService} from './config.service';

const headerParams = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Authorization' : String('Basic ' + btoa('admin@adminland.com:admin123'))
};

const requestOptions = {
  headers: new HttpHeaders(headerParams)
};

@Injectable({
  providedIn: 'root'
})
export class BasicRestService {

  odsBaseApiUrlV1 = 'http://localhost:8080/ods/api/v1';
  odsBaseApiUrlV2 = 'http://localhost:8080/ods/api/v2';

  constructor(private http: HttpClient,
              private configService: ConfigService) {
    this.odsBaseApiUrlV1 = this.configService.getBasicUrl();
  }

  get(url: string): Observable<any> {
    return this.http.get(url, requestOptions)
      .pipe(catchError(this.handleError));
  }

  getV2(url: string): Observable<any> {
    return this.http.get(url);
  }


  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data, requestOptions)
      .pipe(catchError(this.handleError));
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data, requestOptions)
      .pipe(catchError(this.handleError));
  }

  delete(url: string) {
    return this.http.delete(url, requestOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log('error: ');
    console.log(error);
    return error;
  }
}
