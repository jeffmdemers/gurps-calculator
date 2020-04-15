import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Character } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss'],
})
export class CharacterDisplayComponent implements OnInit {
  character: Character;
  screenSelected = 'details';
  menuOpen = true;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.setupMenu();
    //this.getScreenSelections();

    const c = this.route.snapshot.data.character;
    this.character = new Character(c);
  }

  setupMenu() {
    this.menuService.showMenuIcon = true;
    this.menuService.toggleStream$.subscribe(x => {
      this.menuOpen = !this.menuOpen;
    });
  }
}
