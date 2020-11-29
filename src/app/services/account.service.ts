import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiURL = 'http://217.69.6.52/api/v1/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiY29kZSI6Ijk3NDYxOCIsImV4cCI6MTYwODgzMjM1MX0.2q1etqH6UIXfs7gtUt5ZJ8KPlZvbe0pC9-yBLMT8ecA',
    }),
  };

  constructor(private http: HttpClient) {}

  public getCustomerInformation(phone: string): Observable<any> {
    return this.http.get(
      this.apiURL + `customer/info/?phone_number=${phone}`,
      this.httpOptions
    );
  }
}
