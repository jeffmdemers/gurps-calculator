import { Injectable } from '@angular/core';
import { Observable, of, iif } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Character } from '../shared/models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characterList: any[];
  controller = 'character';
  currentCharacter: Character;

  constructor(private apiService: ApiService) { }

  private get(urlPart) {
    return this.apiService.get(`${this.controller}/${urlPart}`);
  }

  getCharacter(characterID: string): Observable<Character> {
    return this.get(`GetCharacter?characterID=${characterID}`).pipe(
      map(c => {
        this.currentCharacter = new Character(c);
        return this.currentCharacter;
      })
    );
  }

  getMyCharacters(): Observable<any> {
    return iif(() => this.characterList !== undefined,
      of(this.characterList),
      this.get(`GetMyCharacters`).pipe(map(c => (this.characterList = c))));
  }

  savePersistentData(character: Character = this.currentCharacter) {
    return this.apiService.post_raw('Character/SavePersistentData', {
      characterID: character.metaInformation.id,
      data: {
        CurrentHP: character.status.HP.Current,
        CurrentFP: character.status.FP.Current,
        Notes: character.metaInformation.notes || ''
      }
    });
  }
}
