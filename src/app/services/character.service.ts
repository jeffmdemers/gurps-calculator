import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  userID = 'fc6b8e90-c6ce-4e90-90c3-aae82d43fcd5';

  get(characterID: string): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get(
      `http://qa.gurpscalculator.com/api/${this.userID}/GetCharacter/${characterID}`,
      requestOptions)
      .pipe(
        map(c => JSON.parse(c.toString()))
      );
  }
}
