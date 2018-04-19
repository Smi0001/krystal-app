import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers, Response } from '@angular/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AssetService {
  getAutocompleteUrl = 'https://services.investo2o.com/assetmanager-ws/api/v1/assets/getassets';
  getEquityStockUrl = 'https://services.investo2o.com/assetmanager-ws/api/v3/getassetdetails';

  constructor(
    private http: HttpClient
  ) {
    this.http = http;
   }

  getHeaders() {
    return new HttpHeaders({
      'User-ID' : '4524',
      'User-IP' : '0.0.0.0',
      'Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      'Access-Token' : 'MTZkZWUyNjEtYzA5Ni00NjA1LTkyNjQtNzdlNzIwYmY1NGRjJVVTRVIlNDUyNA'
    });
  }

  getAutocomplete(params: any) {
    const paramUrl = `?query=${params.query}&asseType=${params.type}&filter=${params.filter}&isCustom=${params.isCustom}`;
    const url = this.getAutocompleteUrl + paramUrl;
    return this.http.get<any>(url, { headers: this.getHeaders() }).
      pipe(catchError(this.handleError<any>('getAutocomplete')));
  }


  getESDetails(params: any) {
    const paramUrl = `?asset=${params.asset}&type=${params.type}&isCustom=${params.isCustom}&date=${params.date}`;
    const url = this.getEquityStockUrl + paramUrl;
    return this.http.get<any>(url, { headers: this.getHeaders() }).
      pipe(catchError(this.handleError<any>('getAutocomplete')));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}

