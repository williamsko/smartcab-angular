import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  apiURL = 'http://217.69.6.52/api/v1/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiY29kZSI6Ijk3NDYxOCIsImV4cCI6MTYwODgzMjM1MX0.2q1etqH6UIXfs7gtUt5ZJ8KPlZvbe0pC9-yBLMT8ecA',
    }),
  };

  constructor(private http: HttpClient) {}

  public recouvrement(phone: string, montant: number): Observable<any> {
    return this.http.post(
      this.apiURL + 'transaction/create/',
      JSON.stringify({
        phone_number: phone,
        account_number: 'GW942972902',
        type: 'RECOUVREMENT',
        amount: montant,
        paid_amount: montant,
      }),
      this.httpOptions
    );
  }

  public history(limit = 0): Observable<any> {
    let url = this.apiURL + 'transactions/?transaction_type=RECOUVREMENT';
    if (limit !== 0) {
      url = this.apiURL + `transactions/?transaction_type=RECOUVREMENT&limit=${limit}`;
    }
    return this.http.get(url, this.httpOptions);
  }

  public balance(): Observable<any> {
    return this.http.post(
      this.apiURL + 'transaction/agent/finance/situation/',
      {},
      this.httpOptions
    );
  }
}
