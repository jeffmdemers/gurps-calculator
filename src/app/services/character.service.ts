import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characterList: any[];
  controller = 'character';
  constructor(private apiService: ApiService) {}

  private get(urlPart) {
    return this.apiService.get(`${this.controller}/${urlPart}`);
  }

  getCharacter(characterID: string): Observable<any> {
    return this.get(`GetCharacter?characterID=${characterID}`);
  }

  getMyCharacters(): Observable<any> {
    return this.characterList
      ? of(this.characterList)
      : this.get(`GetMyCharacters`).pipe(map(c => (this.characterList = c)));
  }
}
