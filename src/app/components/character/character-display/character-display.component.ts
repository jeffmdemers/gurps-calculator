import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Character } from 'src/app/shared/models/character.model';
import { RodeoItem } from '../../shared/rodeo/rodeo.component';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss'],
})
export class CharacterDisplayComponent implements OnInit {
  character: Character;
  screenSelected = 'details';
  screenSelections: RodeoItem[];
  menuOpen = true;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.setupMenu();
    this.getScreenSelections();

    this.character = this.route.snapshot.data.character;
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
      new RodeoItem('traits', 'Traits'),
    ];
  }
}
