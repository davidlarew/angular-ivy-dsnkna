import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  jsonFile = '../assets/products.json';

  constructor(private http: HttpClient) {}


  getData(): Promise<any> {
    return this.http.get(this.jsonFile)
      .toPromise()
  }
}