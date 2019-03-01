import { Component, OnInit } from '@angular/core';

interface HeroCard {
  name: string;
  imgSrc: string;
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

  mockData() {
    this.popularHeroCards = [
      {name: 'Siobhan', imgSrc: '../../assets/images/mock/heroes/1.jpg', visible: true},
      {name: 'Aithen', imgSrc: '../../assets/images/mock/heroes/2.jpg', visible: true},
      {name: 'Kamacite', imgSrc: '../../assets/images/mock/heroes/3.jpg', visible: true}
    ];

    this.heroCards = [
      {name: 'Fella', imgSrc: '../../assets/images/mock/heroes/4.jpg', visible: true},
      {name: 'Avi', imgSrc: '../../assets/images/mock/heroes/5.jpg', visible: true},
      {name: 'Kark', imgSrc: '../../assets/images/mock/heroes/6.jpg', visible: true},
      {name: 'Markus', imgSrc: '../../assets/images/mock/heroes/7.jpg', visible: true},
      {name: 'Thanos', imgSrc: '../../assets/images/mock/heroes/4.jpg', visible: true},
      {name: 'Sidharthiel Evelandreu', imgSrc: '../../assets/images/mock/heroes/5.jpg', visible: true},
      {name: 'Malechi', imgSrc: '../../assets/images/mock/heroes/6.jpg', visible: true},
      {name: 'Alexis', imgSrc: '../../assets/images/mock/heroes/7.jpg', visible: true},
      {name: 'Sir Aion Crane', imgSrc: '../../assets/images/mock/heroes/4.jpg', visible: true},
      {name: 'Taligareive ExMordel', imgSrc: '../../assets/images/mock/heroes/5.jpg', visible: true},
      {name: 'Aerich Stormwaters', imgSrc: '../../assets/images/mock/heroes/6.jpg', visible: true},
      {name: 'Tobias Hawk', imgSrc: '../../assets/images/mock/heroes/7.jpg', visible: true}
    ];

    this.allCards = [...this.popularHeroCards, ...this.heroCards];
  }

}
