import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  baseUrl: string = "http://localhost:3000/";

  httpHeaders: HttpHeaders = new HttpHeaders({
    "content-type": "application/json"
  });

  constructor(private http: HttpClient) { }

  getDataFromServer(endPoint: string): Observable<any> {
    const url = this.baseUrl + endPoint;
    return this.http.get(url, { headers: this.httpHeaders });
  }
}
 