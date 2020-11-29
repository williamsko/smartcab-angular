import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURL = 'http://217.69.6.52/api/v1/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public login(iusername: string, ipassword: string): Observable<any> {
    return this.http.post(
      this.apiURL + 'entity/agent/login/',
      JSON.stringify({
        username: iusername,
        password: ipassword,
      }),
      this.httpOptions
    );
  }
}
