import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Skill, Character, Trait, Identity } from 'src/app/shared/models/character.model';
import { Status, StatusIncrement } from 'src/app/shared/models/status.model';
import { RodeoItem } from '../../shared/rodeo/rodeo.component';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss']
})
export class CharacterDisplayComponent implements OnInit {
  character: Character;
  screenSelected = 'details';
  screenSelections: RodeoItem[];
  menuOpen = true;

  constructor(private route: ActivatedRoute,
    private menuService: MenuService) { }

  ngOnInit() {
    this.setupMenu();
    this.getScreenSelections();

    const c = this.route.snapshot.data.character;
    this.character = new Character(c);
  }

  setupMenu() {
    this.menuService.showMenuIcon = true;
    this.menuService.toggleStream$.subscribe(x => {
      this.menuOpen = !this.menuOpen;
    });
  }
  getScreenSelections() {
    this.screenSelections = [
      new RodeoItem('details', 'Details'),
      new RodeoItem('skills', 'Skills'),
      new RodeoItem('traits', 'Traits')
    ];
  }

}
