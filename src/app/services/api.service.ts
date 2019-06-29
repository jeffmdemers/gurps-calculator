import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'http://qa.gurpscalculator.com/api/';
  //api = 'http://localhost:52527/api/';

  constructor(private http: HttpClient) {}

  private headers() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        Authorization: localStorage.getItem('Authorization') || '',
      }),
    };
  }

  get(apiPath: string) {
    return this.http.get(`${this.api}${apiPath}`, this.headers()).pipe(
      map(c => {
        try {
          return JSON.parse(c.toString());
        } catch (e) {
          console.log(c);
          return null;
        }
      })
    );
  }

  post(apiPath: string, body: any) {
    return this.http.post(`${this.api}${apiPath}`, body, this.headers());
  }
}
