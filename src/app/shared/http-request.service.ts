import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  get(endPoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${endPoint}`)
  }

  post(endPoint: string, obj: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${endPoint}`, obj)
  }
}
