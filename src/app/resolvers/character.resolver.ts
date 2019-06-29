import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<any> {
  constructor(private characterService: CharacterService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.characterService.getCharacter(route.params['id']);
  }
}

@Injectable({
  providedIn: 'root'
})
export class MyCharactersResolver implements Resolve<any> {
  constructor(private characterService: CharacterService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.characterService.getMyCharacters();
  }
}
