import { Component, OnInit } from '@angular/core';

interface Hero {
  id: string;
  name: string;
  imgSrc: string;
  favorite: boolean;
}

interface HeroCard extends Hero {
  visible: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allCards: HeroCard[];
  popularHeroCards: HeroCard[];
  heroCards: HeroCard[];

  constructor() { }

  ngOnInit() {
    this.mockData();
  }

  filterCards(event) {
    const val = event.target.value.trim().toLowerCase();
    if (val.length === 0) {
      this.allCards.forEach(card => {card.visible = true; });
    } else {
      this.allCards.forEach(card => {
        card.visible = card.name.toLowerCase().trim().includes(val);
      });
    }
  }

  favoriteToggle(heroID: string) {
    const hero = this.allCards.find(h => h.id === heroID);
    hero.favorite = !hero.favorite;
  }

  mockData() {
    this.popularHeroCards = [
      {name: 'Siobhan', imgSrc: '../../assets/images/mock/heroes/7.jpg', visible: true, favorite: true, id: '1'},
      {name: 'Aithen', imgSrc: '../../assets/images/mock/heroes/4.jpg', visible: true, favorite: true, id: '2'}
    ];

    this.heroCards = [
      {name: 'Fella', imgSrc: '../../assets/images/mock/heroes/4.jpg', visible: true, favorite: false, id: '4'},
      {name: 'Avi', imgSrc: '../../assets/images/mock/heroes/2.jpg', visible: true, favorite: false, id: '5'},
      {name: 'Kark', imgSrc: '../../assets/images/mock/heroes/6.jpg', visible: true, favorite: false, id: '6'},
      {name: 'Markus', imgSrc: '../../assets/images/mock/heroes/1.jpg', visible: true, favorite: false, id: '7'},
      {name: 'Thanos', imgSrc: '../../assets/images/mock/heroes/7.jpg', visible: true, favorite: false, id: '8'},
      {name: 'Sidharthiel Evelandreu', imgSrc: '../../assets/images/mock/heroes/5.jpg', visible: true, favorite: false, id: '3'},
      {name: 'Tobias Hawk', imgSrc: '../../assets/images/mock/heroes/4.jpg', visible: true, favorite: false, id: '9'},
      {name: 'Taligareive ExMordel', imgSrc: '../../assets/images/mock/heroes/5.jpg', visible: true, favorite: false, id: '10'}
    ];

    this.allCards = [...this.popularHeroCards, ...this.heroCards];
  }

}
