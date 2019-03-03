import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  api = 'http://qa.gurpscalculator.com/api/';
  userID = 'fc6b8e90-c6ce-4e90-90c3-aae82d43fcd5';
  headerDict = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
  };
  constructor(private http: HttpClient) {}

  private get(urlPart) {
    return this.http.get(
      `${this.api}${this.userID}/${urlPart}`,
      this.headerDict
    ).pipe(
      map(c => JSON.parse(c.toString()))
    );
  }

  getCharacter(characterID: string): Observable<any> {
    return this.get(`GetCharacter/${characterID}`);
  }

  getMyCharacters(): Observable<any> {
    return this.get(`GetMyCharacters`);
  }
}
