import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../environments/environment';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_url = environment.HOST.link;


  constructor(private http: HttpClient) {


   }
   getAllUsers() {
    return this.http.get(this.api_url + `/getAllUser`);
  }
  login(payload) {
    return this.http.post(this.api_url + `/logIn` , payload);
  }
  addTopUpRequest(payload) {
    return this.http.post(this.api_url + `/addTopUpRequest` , payload);
  }
  getCustomerDashboard(payload) {
    return this.http.post(this.api_url +  `/getCustomerDashboard` , payload);
  }
}
