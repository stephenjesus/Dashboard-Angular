import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../environments/environment';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
//   api_url = environment.HOST.link;


  constructor(private http: HttpClient) {


   }
   getAllUsers() {
    return this.http.get(`https://us-central1-online-management-a7e84.cloudfunctions.net/api/getAllUser` , { responseType: 'text'});
  }
}
