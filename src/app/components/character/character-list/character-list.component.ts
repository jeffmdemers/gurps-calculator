import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Hero {
  id: string;
  name: string;
  imgSrc: string;
  favorite: boolean;
  campaign: string;
}

interface HeroCard extends Hero {
  visible: boolean;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  heroCards: HeroCard[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.get();
  }

  get() {
    this.heroCards = this.route.snapshot.data.characters.map(c => {
      const card: HeroCard = {
        id: c.ID,
        name: c.Name,
        imgSrc: `http://images.gurpscalculator.com/characters/${c.ID}.png`,
        favorite: false,
        visible: true,
        campaign: c.Campaign.name,
      };

      return card;
    });
  }

  filterCards(event) {
    const val = event.target.value.trim().toLowerCase();
    if (val.length === 0) {
      this.heroCards.forEach(card => {
        card.visible = true;
      });
    } else {
      this.heroCards.forEach(card => {
        card.visible = card.name
          .toLowerCase()
          .trim()
          .includes(val);
      });
    }
  }

  favoriteToggle(heroID: string) {
    const hero = this.heroCards.find(h => h.id === heroID);
    hero.favorite = !hero.favorite;
  }

  updateImage(event) {}
}
