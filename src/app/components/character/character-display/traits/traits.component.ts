import { Component, OnInit, Input } from '@angular/core';
import { Trait } from '../../../../shared/models/character.model';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-character-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss']
})
export class TraitsComponent implements OnInit {

  @Input()
  traits: Trait[];
  filteredTraits: Trait[];

  constructor() { }

  ngOnInit() {
    this.filteredTraits = [...this.traits];
  }

  filter(event) {
    const query = event.currentTarget.value.toLowerCase();
    if (query.trim().length === 0) {
      this.filteredTraits = [...this.traits];
    } else {
      this.filteredTraits = this.traits.filter(s => s.name.toLowerCase().indexOf(query) > -1);
    }
  }

}
